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
