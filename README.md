# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

### Screenshot

![](./design/desktop-design.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/Kelf1729/Front_Mentor_PingComing.git)
- Live Site URL: [Add live site URL here](https://kelf1729.github.io/Front_Mentor_PingComing/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript
- Mobile

### What I learned

Aprendi a utilizar o input de dados em formato de texto e a manipulação e extração dessas informações fornecidas pelo usuário.

```html
<form action="">
  <input
    type="text"
    name="name"
    placeholder="Your email address... "
    id="email"
  />
  <button>Notify Me</button>
  <label class="output-email"></label>
</form>
```

Utilização da expressão regular para determinar se um string ou dados de entrada estão no formato necessário de acordo com o pedido pelo projeto.

```js
const mensagem = document.querySelector(".output-email");
const entrada = document.getElementById("email");
console.log(mensagem);
document.querySelector("button").addEventListener("click", (event) => {
  event.preventDefault();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  mensagem.classList.toggle("ativar");
  const value = entrada.value;
  if (value.trim() == "") {
    mensagem.innerHTML = "Whoops! It looks like you forgot to add your email";
  } else if (!emailRegex.test(value.trim())) {
    mensagem.innerHTML = "Please provide a valid email address";
  }
});
};
```

Também utlizei a entrada do svg diretamente no html ao invés de fazer isso pelo img, isso permitiu melhor manipulação das cores e do svg.

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  class="ionicon"
  viewBox="0 0 512 512"
  width="40px"
  height="40px"
>
  <path
    d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
  />
</svg>
```

### Continued development

Falta apenas algumas alterações sobre a cor da borda do input de e-mails e mudança do icone para facebook, twitter e instagram mas são alterações simples de se fazer, nada complicado no final.

## Author

- Website - [@kelf1729]
