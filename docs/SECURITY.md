# Security and privacy

- No secrets, credentials, cookies or tokens are stored in the repository.
- Contact is an address the Email tab copies to the clipboard (no `mailto:`); there is no server-side form or data collection endpoint.
- External links use `rel="noreferrer"` where applicable.
- Nginx sends `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` and `Strict-Transport-Security` headers in every location.
- The site is static and has no runtime database.
- Fonts (Fontsource) and the drawing libraries (rough.js, Rough Notation) are bundled from npm: the site makes no third-party requests.
- The only browser storage is `sessionStorage` for the chosen theme, wrapped in try/catch.
