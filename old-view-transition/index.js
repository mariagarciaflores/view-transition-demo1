(() => {
  const button = document.querySelector("#update-btn");

  button.addEventListener("click", () => {
    updateDOM();
  });

  function updateDOM() {
    console.log('Update DOM')
    const content = document.querySelector(".content");

    // Agregar la clase de fade-out para iniciar la animación de desvanecimiento
    content.classList.add("fade-out");

    // Después de un breve retraso, actualizar el contenido y agregar la clase de fade-in
    setTimeout(() => {
      content.innerHTML = "<h1>Nuevo contenido</h1>";
      content.classList.remove("fade-out");
      content.classList.add("fade-in");
    }, 500); // Este valor debe coincidir con la duración de la animación en el CSS
  }
})();
