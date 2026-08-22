// Step 2 of the Decap CMS GitHub OAuth flow.
// Exchanges GitHub's temporary code for an access token, then hands the token
// to the CMS popup's opener window via postMessage (the handshake Decap expects).
export default async function handler(req, res) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;
  const { code, state } = req.query;

  const cookieState = (req.headers.cookie || "")
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith("decap_oauth_state="))
    ?.split("=")[1];

  let payload;
  if (!clientId || !clientSecret) {
    payload = { error: "OAuth env vars are not set in Vercel." };
  } else if (!code || !state || state !== cookieState) {
    payload = { error: "State mismatch. Close this window and try signing in again." };
  } else {
    const ghRes = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
    });
    const data = await ghRes.json();
    payload = data.access_token
      ? { token: data.access_token, provider: "github" }
      : { error: data.error_description || data.error || "GitHub did not return a token." };
  }

  const status = payload.error ? "error" : "success";
  const message = `authorization:github:${status}:${JSON.stringify(payload)}`;

  res.setHeader("Set-Cookie", "decap_oauth_state=; Path=/api; HttpOnly; Secure; SameSite=Lax; Max-Age=0");
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.status(200).send(`<!doctype html>
<html><body><p>Signing you in…</p>
<script>
  (function () {
    function send() {
      window.opener.postMessage(${JSON.stringify(message)}, "*");
    }
    window.addEventListener("message", function (e) {
      if (typeof e.data === "string" && e.data.indexOf("authorizing:github") === 0) send();
    });
    window.opener.postMessage("authorizing:github", "*");
  })();
</script>
</body></html>`);
}
