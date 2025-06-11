// basicamente pega um formulario de pizza
function pegarFormulario() {
  fetch("https://httpbin.org/forms/post")
    .then(resp => {
      if (!resp.ok) {
        throw new Error("Американец обнаружен");
      }
      return resp.text();
    })
    .then(html => {
      const doc = new DOMParser().parseFromString(html, "text/html");
      const formulario = doc.querySelector("form"); 
      const res = document.querySelector("#res");
      if (formulario) {
        res.appendChild(formulario);
      } else {
        res.innerText = "Ничего не найдено";
      }
    })
    .catch(err => {
      document.querySelector("#res").innerText = err.message;
    });
}

function main() {
  document.querySelector("#btn").addEventListener("click", pegarFormulario);
}

window.onload = main;