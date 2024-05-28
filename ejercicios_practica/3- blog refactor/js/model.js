"use strict";

function Post(titulo,avatar,texto){
    this.titulo=titulo;
    this.avatar=avatar;
    this.texto=texto;
  
    this.render = () => {
      return  `<article ${this.titulo}>
                  <img
                  src=${this.avatar}
                  class="icon-type"
                  alt="icon type"
                  />
                  <p>
                      ${this.texto}
                  </p>
              </article>
              `
  };
  
   
  };