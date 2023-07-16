<br>

next.js app manually installed using javascript, the pages router, and tailwind, deployed to vercel
  - [next@latest](https://nextjs.org/docs/getting-started/installation#manual-installation)
  - [tailwindcss](https://tailwindcss.com/docs/guides/nextjs)
    - [bradlc.vscode-tailwindcss](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
  - [daisyui@latest](https://daisyui.com/components)
  - [react-icons](https://react-icons.github.io/react-icons)

<br>

###### installation

```bash
cd && git clone https://github.com/tannertanner1/pages-router.git # github.com/new
cd pages-router && code . # open
touch .gitignore # npm i

npm init -y
npm i next@latest react@latest react-dom@latest
```

<br>

###### routing

```bash
mkdir pages && cd pages
touch index.js _app.js _document.js
touch about.js book.js contact.js && cd ..
```

<br>

###### styling

```bash
npm i tailwindcss postcss autoprefixer -D
npx tailwindcss init -p

touch globals.css

npm i daisyui@latest -D
npm i react-icons -S
```

note: add `import "../globals.css";` in `./pages/_app.js` and `plugins: [require("daisyui")]` in `tailwind.config.js`

<br>

###### components

```bash
npm i react-scroll
mkdir components && cd components
touch hover.js navbar.js hero.js screen.js anchor.js section.js email.js && cd ..
```

<br>

###### deployment
```bash
npm run dev

ga && gc "" && gp # git add . && git commit -m "" && git push -u origin main

# vercel.com/new
```

<br>

###### analytics
```bash
npm i @vercel/analytics # vercel.com/docs/concepts/analytics
```

note: add `import { Analytics } from "@vercel/analytics/react";` and `<Analytics />` in `./pages/_app.js`

<br>