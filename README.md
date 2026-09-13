# Vraj Shah â€” Noir portfolio

A charcoal, ivory, and muted-lime portfolio with a moving orbital illustration, a project archive, experience and education, contact links, and three dedicated project pages. Static HTML is generated with Node.js; the site needs no runtime server or installed packages.

## Preview locally

Requires Node.js 22 or newer.

```sh
npm run dev
```

Open http://localhost:4173. After editing source files, restart the command to rebuild. To create deployment files only, run `npm run build`. The output is in `dist/`.

On Windows PowerShell, use `npm.cmd run dev` if execution policy blocks `npm.ps1`.

## Deploy to Vercel

Put this folder in its own GitHub repository and import it into Vercel. The included `vercel.json` sets the build command and output directory. If deploying from a larger repository, set the Vercel Root Directory to `noir-portfolio`.

## Deploy to GitHub Pages

Push the contents of this folder to the root of a new repository with a `main` branch. In Settings â†’ Pages, select **GitHub Actions** as the source. The included workflow builds and deploys on pushes to `main`; it can also be run manually from the Actions tab. All internal assets and page links are relative, so the site supports a repository URL such as `username.github.io/repository/` as well as a custom domain.

## Edit the site

- `src/data.js`: personal details, experience, education, skills, and project facts imported from the supplied spider portfolio.
- `build.mjs`: page templates, project slugs, editorial text, and the earlier-project archive.
- `public/styles.css`: responsive styling and animation, with reduced-motion support.
- `public/site.js`: mobile navigation, motion preferences, and copy-email behavior.

Project descriptions reflect the GitHub READMEs reviewed during this session. Experience, education, dates, and additional skills follow the supplied portfolio. Roadmap features are explicitly labeled as planned. No project performance numbers or live demos are invented.

The artwork is original HTML/CSS/SVG. DM Sans and IBM Plex Mono are bundled locally in `public/fonts/` with their SIL Open Font Licenses; no remote font request is needed. Core navigation and all project content work without JavaScript. The copy-email button requires a secure context (HTTPS or localhost).

The GitHub profile repository and original `spider-portfolio` are separate from this site. Enable GitHub Pages using the steps above to publish the website.

Deployment references: [GitHub Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) and [Vercel project configuration](https://vercel.com/docs/project-configuration).

## Browser compatibility checks

Run `npm ci`, then `npx playwright install webkit`. Tests also use an installed Google Chrome browser. Run `npm test` to check WebKit with an iPhone viewport and Chrome with an Android viewport. On Windows PowerShell, use `npm.cmd` and `npx.cmd` if execution policy blocks the scripts.

The checks cover the reduced-motion default, explicit on/off overrides, saved settings across project navigation, unavailable browser storage, SVG icons, mobile navigation, and the no-JavaScript fallback. Decorative icons use inline SVG to avoid platform-specific emoji rendering. OS reduced motion remains the default until the visitor explicitly changes the site's motion setting.
