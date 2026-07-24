# RingGuard

**Your silent mode guardian.**

RingGuard is an Android utility that keeps your phone quiet, on your terms. It blocks unwanted calls while you're in silent or vibrate mode, and always lets your trusted contacts and real emergencies ring through — with smart rules for repeat callers, all handled fully on-device.

🔗 **Live site:** https://wandering-spirit-22.github.io/ringguard/
📱 **Get the app:** https://play.google.com/store/apps/details?id=com.ringguard.app

![RingGuard preview](assets/og.png)

---

## Features

- **Whitelist** — choose exactly who can reach you, even in silent mode
- **Smart Rules** — Repeat Caller Bypass lets a call through if the same number calls again within a window you set
- **Two themes** — Frost (light glass) and Night Sky (dark glass), switch anytime
- **Recent Activity** — a simple on-device log of what got blocked
- **Privacy-first** — no accounts, no analytics, no ad SDKs, no network access. Everything stays encrypted on your device.

## Tech stack

This repository contains the **marketing website and privacy policy** for RingGuard — a static site with no build step.

- Plain HTML5, CSS3, vanilla JavaScript
- Google Fonts (Instrument Serif, Inter)
- No frameworks, no bundler, no dependencies

The RingGuard **Android app** itself is a separate codebase and is not included in this repository.

## Project structure

```
ringguard/
├── index.html          # Landing page
├── privacy.html         # Privacy policy
├── style.css             # Shared styles (design tokens, layout, components)
├── app.js                 # Scroll reveals, hero animation, parallax
├── assets/
│   ├── icon.png              # App icon / favicon
│   ├── og.png                  # Social preview image (1200×630)
│   ├── home page.png
│   ├── whitelist.png
│   ├── smart rules.png
│   ├── theme night.png
│   └── review.png
├── robots.txt
├── sitemap.xml
└── README.md
```

## Running locally

No build step is required. Any static file server works, for example:

```bash
# Python
python3 -m http.server 8000

# Node (npx, no install needed)
npx serve .
```

Then open `http://localhost:8000` in your browser.

## Deployment

This site is deployed with **GitHub Pages** directly from the `main` branch. Any push to `main` redeploys automatically within a minute or two — see [Steps to deploy](#steps-to-deploy-to-github-pages) below.

## Privacy

RingGuard collects no personal data and makes no network requests. Full details are on the [Privacy Policy](https://wandering-spirit-22.github.io/ringguard/privacy.html) page.

## Contact

Questions or feedback: [support.ringguard@gmail.com](mailto:support.ringguard@gmail.com)

## License

All rights reserved. This code is publicly visible for transparency, but is not licensed for reuse, modification, or redistribution without permission.