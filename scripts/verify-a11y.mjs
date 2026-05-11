import puppeteer from "puppeteer";

const url = "http://localhost:4321/";
const browser = await puppeteer.launch({ headless: "new" });
const results = [];

function ok(name, val, extra = "") {
  results.push(`${val ? "PASS" : "FAIL"} - ${name}${extra ? " — " + extra : ""}`);
}

try {
  // === C2: nav landmark
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(url, { waitUntil: "networkidle2" });
    const navLandmark = await page.evaluate(() => {
      const navs = document.querySelectorAll('nav[aria-label="Primary"]');
      if (!navs.length) return null;
      const nav = navs[0];
      return {
        count: navs.length,
        containsMenu: !!nav.querySelector('#nav-menu'),
        containsToggle: !!nav.querySelector('#nav-toggle'),
        inHeader: !!nav.closest('header.nav'),
      };
    });
    ok("C2 <nav aria-label=Primary> exists", !!navLandmark, JSON.stringify(navLandmark));
    ok("C2 nav contains #nav-menu", navLandmark?.containsMenu);
    ok("C2 nav nested in header.nav", navLandmark?.inHeader);
    await page.close();
  }

  // === C3: mobile nav focus mgmt
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 390, height: 844 });
    await page.goto(url, { waitUntil: "networkidle2" });

    // Initial state - sheet closed at mobile - should be inert + aria-hidden
    const closedState = await page.evaluate(() => {
      const m = document.getElementById('nav-menu');
      return {
        inert: m.hasAttribute('inert'),
        ariaHidden: m.getAttribute('aria-hidden'),
        dataOpen: m.dataset.open,
      };
    });
    ok("C3 closed sheet inert (mobile)", closedState.inert);
    ok("C3 closed sheet aria-hidden=true (mobile)", closedState.ariaHidden === 'true');

    // Click toggle - opens sheet, focus moves to first link
    await page.click('#nav-toggle');
    await new Promise(r => setTimeout(r, 100));
    const openState = await page.evaluate(() => {
      const m = document.getElementById('nav-menu');
      const active = document.activeElement;
      return {
        inert: m.hasAttribute('inert'),
        ariaHidden: m.getAttribute('aria-hidden'),
        dataOpen: m.dataset.open,
        ariaExpanded: document.getElementById('nav-toggle').getAttribute('aria-expanded'),
        activeTag: active?.tagName,
        activeHref: active?.getAttribute?.('href'),
        activeInMenu: m.contains(active),
      };
    });
    ok("C3 open sheet not inert", !openState.inert);
    ok("C3 open sheet aria-hidden=false", openState.ariaHidden === 'false');
    ok("C3 toggle aria-expanded=true after open", openState.ariaExpanded === 'true');
    ok("C3 focus moved into sheet", openState.activeInMenu, "active=" + openState.activeTag + " href=" + openState.activeHref);

    // Tab from last wraps to first
    const focusables = await page.evaluate(() => {
      const m = document.getElementById('nav-menu');
      const els = Array.from(m.querySelectorAll('a[href], button:not([disabled])'));
      return els.length;
    });
    // Focus last item
    await page.evaluate((n) => {
      const m = document.getElementById('nav-menu');
      const els = m.querySelectorAll('a[href], button:not([disabled])');
      els[n - 1].focus();
    }, focusables);
    await page.keyboard.press('Tab');
    const afterTab = await page.evaluate(() => {
      const a = document.activeElement;
      const m = document.getElementById('nav-menu');
      const first = m.querySelector('a[href], button:not([disabled])');
      return { isFirst: a === first, href: a.getAttribute?.('href') };
    });
    ok("C3 Tab from last wraps to first", afterTab.isFirst, "now href=" + afterTab.href);

    // Shift+Tab from first wraps to last
    await page.evaluate(() => {
      const m = document.getElementById('nav-menu');
      const first = m.querySelector('a[href], button:not([disabled])');
      first.focus();
    });
    await page.keyboard.down('Shift');
    await page.keyboard.press('Tab');
    await page.keyboard.up('Shift');
    const afterShiftTab = await page.evaluate(() => {
      const a = document.activeElement;
      const m = document.getElementById('nav-menu');
      const els = m.querySelectorAll('a[href], button:not([disabled])');
      return { isLast: a === els[els.length - 1] };
    });
    ok("C3 Shift+Tab from first wraps to last", afterShiftTab.isLast);

    // Escape closes and returns focus to toggle
    await page.keyboard.press('Escape');
    await new Promise(r => setTimeout(r, 100));
    const afterEsc = await page.evaluate(() => {
      const m = document.getElementById('nav-menu');
      return {
        dataOpen: m.dataset.open,
        inert: m.hasAttribute('inert'),
        ariaHidden: m.getAttribute('aria-hidden'),
        active: document.activeElement?.id,
        toggleExpanded: document.getElementById('nav-toggle').getAttribute('aria-expanded'),
      };
    });
    ok("C3 Escape closes sheet (data-open=false)", afterEsc.dataOpen === 'false');
    ok("C3 Escape re-applies inert", afterEsc.inert);
    ok("C3 Escape sets aria-hidden=true", afterEsc.ariaHidden === 'true');
    ok("C3 Escape returns focus to toggle", afterEsc.active === 'nav-toggle');
    ok("C3 Escape sets aria-expanded=false", afterEsc.toggleExpanded === 'false');
    await page.close();
  }

  // === C3: desktop nav must NOT be inert
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(url, { waitUntil: "networkidle2" });
    const state = await page.evaluate(() => {
      const m = document.getElementById('nav-menu');
      return { inert: m.hasAttribute('inert'), ariaHidden: m.getAttribute('aria-hidden') };
    });
    ok("C3 desktop nav not inert", !state.inert, JSON.stringify(state));
    ok("C3 desktop nav not aria-hidden", state.ariaHidden !== 'true');
    await page.close();
  }

  // === C4: JS disabled -> elements visible
  {
    const page = await browser.newPage();
    await page.setJavaScriptEnabled(false);
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(url, { waitUntil: "domcontentloaded" });
    const visible = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      const opacity = h1 ? getComputedStyle(h1).opacity : null;
      return {
        hasAnimClass: document.documentElement.classList.contains('has-anim'),
        h1Opacity: opacity,
      };
    });
    ok("C4 (JS disabled) .has-anim not added", !visible.hasAnimClass);
    ok("C4 (JS disabled) h1 visible (opacity=1)", visible.h1Opacity === '1', "opacity=" + visible.h1Opacity);
    await page.close();
  }

  // === C4: 3500ms fallback removes .has-anim if GSAP fails
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    // Block the hoisted page scripts so GSAP never runs
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const u = req.url();
      if (u.includes('hoisted') || u.includes('gsap') || u.includes('ScrollTrigger')) {
        req.abort();
      } else {
        req.continue();
      }
    });
    await page.goto(url, { waitUntil: "domcontentloaded" });
    const initial = await page.evaluate(() => document.documentElement.classList.contains('has-anim'));
    await new Promise(r => setTimeout(r, 4000));
    const after = await page.evaluate(() => ({
      hasAnim: document.documentElement.classList.contains('has-anim'),
      h1Opacity: getComputedStyle(document.querySelector('h1')).opacity,
    }));
    ok("C4 .has-anim added initially", initial);
    ok("C4 .has-anim removed after 3500ms", !after.hasAnim);
    ok("C4 h1 visible after fallback (opacity=1)", after.h1Opacity === '1', "opacity=" + after.h1Opacity);
    await page.close();
  }
} finally {
  await browser.close();
}

for (const r of results) console.log(r);
const failed = results.filter(r => r.startsWith('FAIL'));
console.log(`\n${results.length - failed.length}/${results.length} passed`);
if (failed.length) process.exit(1);
