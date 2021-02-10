# Tailwind CSS

## Tutorial

Code: https://github.com/iamshaunjp/tailwind-tutorial

[Video 1](https://www.youtube.com/watch?v=bxmDnn7lrnk&ab_channel=TheNetNinja)
- New package.json file `$npm init -y`
- Install tailwind package `$npm install tailwindcss`
- Create src/styles.css and add tailwind directives (see TW installation guide online)
- Add script to package.json for building the public css script
    `"npx tailwindcss-cli@latest build ./src/styles.css -o ./public/styles.css"`
- `$npm run build-css`