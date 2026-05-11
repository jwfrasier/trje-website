// Visual inspection helper. Usage:
//   node scripts/inspect.mjs <url> <outdir> [name]
// Captures three viewports (mobile/tablet/desktop) and dumps a small report
// with computed body color/background, found image sources, and SVG markup.

import puppeteer from "puppeteer";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const [url = "http://localhost:4321/", outdirArg = "screenshots", name = "shot"] = process.argv.slice(2);
const outdir = resolve(process.cwd(), outdirArg);

const viewports = [
  { name: "mobile", width: 390, height: 844, deviceScaleFactor: 2 },
  { name: "tablet", width: 834, height: 1112, deviceScaleFactor: 2 },
  { name: "desktop", width: 1440, height: 900, deviceScaleFactor: 2 },
];

await mkdir(outdir, { recursive: true });

const browser = await puppeteer.launch({ headless: "new" });
const report = { url, captured: new Date().toISOString(), viewports: [] };

try {
  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport(vp);
    await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });
    // Scroll to trigger lazy-loaded images.
    await page.evaluate(async () => {
      const total = document.documentElement.scrollHeight;
      const step = window.innerHeight * 0.8;
      for (let y = 0; y < total; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 80));
      }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 200));
    });
    const file = `${name}-${vp.name}.png`;
    await page.screenshot({ path: resolve(outdir, file), fullPage: true });

    const meta = await page.evaluate(() => {
      const body = getComputedStyle(document.body);
      const imgs = [...document.images].map((i) => ({
        src: i.currentSrc || i.src,
        w: i.naturalWidth,
        h: i.naturalHeight,
        alt: i.alt,
      }));
      const links = [...document.querySelectorAll('a[href*="cdn"], link[rel="icon"], link[rel="apple-touch-icon"]')]
        .map((el) => el.href || el.getAttribute("src"));
      return {
        title: document.title,
        bgColor: body.backgroundColor,
        fgColor: body.color,
        fontFamily: body.fontFamily,
        images: imgs.slice(0, 30),
        favicons: links,
        h1: [...document.querySelectorAll("h1, h2")].slice(0, 5).map((el) => el.textContent?.trim()),
      };
    });

    report.viewports.push({ ...vp, file, meta });
    await page.close();
  }
} finally {
  await browser.close();
}

await writeFile(resolve(outdir, `${name}-report.json`), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
