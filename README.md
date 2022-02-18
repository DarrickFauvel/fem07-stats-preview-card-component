# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

<img src="https://github.com/DarrickFauvel/fem07-stats-preview-card-component/blob/main/screenshot-mobile.png" width="200" />
<img src="https://github.com/DarrickFauvel/fem07-stats-preview-card-component/blob/main/screenshot-desktop.png" width="400" />

### Links

- Solution URL: [https://github.com/DarrickFauvel/fem07-stats-preview-card-component](https://github.com/DarrickFauvel/fem07-stats-preview-card-component)
- Live Site URL: [https://fem07-stats-preview-card-component-drrck.netlify.app/](https://fem07-stats-preview-card-component-drrck.netlify.app/)

## My process

### Built with

- Mobile-first workflow
- Semantic HTML5 markup
- CSS Grid
- [Sass](https://www.sass-lang.com) - CSS with superpowers
- [Parcel](https://parceljs.org) - Zero config build tool

### What I learned

I learned about the CSS property `mix-blend-mode` and how to apply it to this project.

The image used in the card is a black & white photo. So, I placed the `<img>` inside a `<div>` with a soft violet background color.

Using the following CSS:

```css
img {
  mix-blend-mode: multiply;
  opacity: 0.75;
}
```

I believe I got the results that match the design.

### Useful resources

[CSS: mix-blend-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode)

## Author

- Website - [Darrick Fauvel](https://www.darrickfauvel.com)
- Frontend Mentor - [@DarrickFauvel](https://www.frontendmentor.io/profile/DarrickFauvel)
