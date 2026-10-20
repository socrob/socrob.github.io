# SocRob@Home Website

Single-page website for the SocRob@Home team, built with [Nuxt 3](https://nuxt.com/) and [Vuetify](https://vuetifyjs.com/), and hosted on GitHub Pages.

[Website](https://socrob.github.io/) · [Repository](https://github.com/socrob/socrob.github.io)

## Setup

Install Git and [nvm](https://github.com/nvm-sh/nvm#installing-and-updating), then open a new terminal. The project specifies Node.js 20 in `.nvmrc`; npm is included with Node.js.

```bash
git clone https://github.com/socrob/socrob.github.io.git
cd socrob.github.io
nvm install
nvm use
npm ci
```

If you already have a local clone, skip cloning and run the remaining commands from its directory. If its remote still points to the old repository, update it:

```bash
git remote set-url origin https://github.com/socrob/socrob.github.io.git
```

The configuration uses `baseURL: '/'` for `https://socrob.github.io/`. The same settings work locally and for deployment; no configuration switching is needed.

## Edit & Test Locally

From the project directory, run:

```bash
nvm use
npm run dev
```

Open [http://localhost:3000/](http://localhost:3000/). Changes appear automatically when you save; press `Ctrl+C` to stop the server.

- Edit each website section in `components/`.
- Edit styles in `assets/`.
- Store images and other static files in `public/`.

Note: image paths previously caused deployment issues when rendering images with `v-for`. The existing components use individual image statements as a workaround; check images after changing this approach.

## Deployment

Generate the static site:

```bash
npm run generate
```

To publish the generated files from `.output/public` to the `gh-pages` branch, run:

```bash
npm run deploy
```

Publishing requires GitHub write access to the repository. In [Settings → Pages](https://github.com/socrob/socrob.github.io/settings/pages), the publishing source should be the `gh-pages` branch and `/ (root)` folder. Allow a few minutes for the website to update; check the repository's [Actions](https://github.com/socrob/socrob.github.io/actions) for deployment logs.

### Helpful Resources

Original deployment references:

- [lucpotage/nuxt-github-pages](https://github.com/lucpotage/nuxt-github-pages)
- [darioTecchia/nuxt3-ghpages](https://github.com/darioTecchia/nuxt3-ghpages/tree/main)
- [Alejandro Suárez's Blog](https://alejandrosuarez.eu/blog/how-to-deploy-nuxt3-app-in-github-pages/)

## Future Work

- [ ] Fix night mode display issues
- [ ] Resolve image path and `v-for` issues on deployment
- [ ] Improve the "Publications" section with better styling and layout
