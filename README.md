# Newsletter sign-up form with success message solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview
In this project I was tasked with the challenge to build a newsletter-sign up page. I created the page using react, styled compoents and flexbox. 

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop Solution](./src/images/Screenshots/Desktop%20Solution.png)
![Desktop Error State](./src/images/Screenshots/Desktop%20Solution%20Error%20state.png)
![Desktop Success State](./src/images/Screenshots/Desktop%20Success%20state.png)
![Mobile Solution](./src/images/Screenshots/Mobile%20Solution.png)
![Mobile Success State](./src/images/Screenshots/Mobile%20Success%20state.png)

### Links

- Solution URL: [Solution](https://github.com/zembezn/newsletter-sign-up)
- Live Site URL: [Live Site](https://newsletter-sign-up-zembezn.netlify.app/)

## My process
So far my process has been setting up a component and working on the CSS till the look and feel comes together. From there its tweaks and adjustments till I am satisfied with the outcome. This only being a sign up page doesnt need much more than the email validation and setting up the error states and button function. An area I am pleased to have expanded on is building with media queries and making the site responsive to the various screen sizes. 

### Built with

- Semantic HTML5 markup
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I learned to validate emails and reference them in the success message. I learned to disable zoom on the page and switch between desktop and mobile images and making the page responsive to the various screen sizes. 

```html
 <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
```
```css
export const ImageContainer = styled.div`
max-width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
border-top-right-radius: 25px;
border-bottom-right-radius: 25px;

img {
    height: 95%;
}

img.mobile {
    display: none;
}

@media (max-width: 480px) {

    display: flex;
    width: 100%;

    img {
        display: none;
    }

    img.mobile {
        max-width: 100%;
        height: auto;
        width: 100%;
        display: flex;
        content: url(${({ media }) => media });
        align-items: normal;
        justify-content: center;
    }
}
`
```
```js
function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

const currentEmailValue = () => {
   return refEmail.current.value;
}

const handleChange = (e) => {
  setEmail(e.target.value);
};

const onSubmit = (e) => {
  e.preventDefault()

  setError('')
  setSuccessful(true)

  if(isValidEmail(email)) {
    console.log('The email is valid')
  } else {
    setError('Email is invalid')
  }

  setEmail('')
}

const Dismiss = () => {
  setSuccessful(false)
} 
```

### Continued development

I want to continue improving on creating responsive content for various devices. 

## Author

- Website - [Kanya Zembe](https://github.com/zembezn)
- Frontend Mentor - [@jinxmonsoon](https://www.frontendmentor.io/profile/jinxmonsoon)