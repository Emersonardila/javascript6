"use strict";

const tituloPrincipal = document.querySelector(".main-title");

// Accedemos al texto de nuestro titulo
console.log(tituloPrincipal.textContent);

// Generamos la fecha que queremos insertar
const hoy = new Date();

// Alteramos el texto de nuestro titulo con un "template string"
tituloPrincipal.textContent = `Publica tu aprendizaje: ${hoy.getDate()}/${
  hoy.getMonth() + 1
}/${hoy.getFullYear()}`;


let accumulator = ""
for(const post of data){

  accumulator += `
  <article class="post">
    <div class="post-header">
      <img
      src= "${post.avatar}"
        class="icon-avatar"
        alt="avatar icon"
        width="75"
      />
      <h2>${post.titulo}</h2>
    </div>
    <div>
      <p>
        ${post.texto}
      </p>
    </div>
  </article>
  `
};
const section = document.querySelector("section");
// innerHTML reemplaza todo el contenido HTML de ese elemento,
// todos los hijos, por lo que si habia código HTML se perderá
// y reemplazará por el nuevo.
// Es recomendable no invocar innerHTML muchas veces ya que
// no es muy performante
section.innerHTML = accumulator;
posts();
