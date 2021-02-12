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

[Video 2](https://www.youtube.com/watch?v=3ZMUgga6SsY&ab_channel=TheNetNinja): HTML structure

[Video 3](https://www.youtube.com/watch?v=w0KZhi3DD-0&ab_channel=TheNetNinja): Fonts & colours
- See Tailwind docs for colour scheme and class names
- Colour eg: text-gray-600
- Weight eg: font-semibold
- Size eg: text-2xl

[Video 4](https://www.youtube.com/watch?v=1g4W2U-l350&ab_channel=TheNetNinja): Margin, Padding & Borders
- Padding eg: p-4, py-6
- Margin eg: mt-4, ml-4
- Border eg: border-8, border-t, border-l-4, border-gray-200

[Video 5](https://www.youtube.com/watch?v=6UVQlB1eo5A&ab_channel=TheNetNinja): Tailwind config
- Use config to extend or add to default rules
- `$npx tailwindcss-cli@latest init`
- Add styles as required in the new tailwind.config.js file
- Then reprocess styles using `$npm run build-css`
- Optional: Add Tailwind CSS IntelliSense VS Code extension

[Video 6](https://www.youtube.com/watch?v=arfDRUIZOiw&ab_channel=TheNetNinja): Custom fonts
- Default font is sans
- Font eg: font-serif
- For custom fonts, eg from Google, @import them from fonts.google.com into src/styles.css
- Then extend in config file using fontFamily and font name
- Then reprocess styles using `$npm run build-css`

[Video 7](https://www.youtube.com/watch?v=WK6u8YDYqak&ab_channel=TheNetNinja): Using Flexbox
- Flex horizontal eg: flex justify-center
- Flex vertical eg: flex items-end
- Height eg: h-4
- Weight eg: w-6

[Video 8](https://www.youtube.com/watch?v=VYFjvMfVv2o&ab_channel=TheNetNinja): Responsive classes
- Don't have to use mediaqueries when using Tailwind, just prefix our TW classes with responsive classes
- Responsive class eg: text-yellow-300  sm:text-red-500 lg:text-blue-200

[Video 9](https://www.youtube.com/watch?v=vqKie-xmcFs&ab_channel=TheNetNinja): Cards
- Cards eg: rounded overflow-hidden shadow-md
- Add 'block' to class to send text on to next line
- Add 'object-cover' to class to takes out image size distortion

[Video 10](https://www.youtube.com/watch?v=cY0XJY98d3w&ab_channel=TheNetNinja): Badges
- Positioning eg: relative

[Video 11](https://www.youtube.com/watch?v=somWrB-wumY&ab_channel=TheNetNinja): @apply directive
- Tips for using multiple classes or badges, and changing styles of cards easily
- Extracting classes into external selectors inside the styles.css file
- Use @apply in css class. Bit like mixin

[Video 12](https://www.youtube.com/watch?v=_r2qB44o_Fs&ab_channel=TheNetNinja): Grids
- Grid eg: grid grid-cols-3 gap-10, col-span-2

[Video 13](): 
- 

[Video 14](): 
- 

[Video 15](): 
- 

[Video 16](): 
- 

[Video 17](): 
- 

[Video 18](): 
- 

[Video 19](): 
- 

