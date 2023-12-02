(() => {
  const button = document.querySelector("#update-btn");

  button.addEventListener("click", () => {

    if(!document.startViewTransition) {
      updateDOM();
      return;
    }

    document.startViewTransition(() => updateDOM());
  });

  function updateDOM() {
    document.querySelector(".content").innerHTML = "<h1>Nuevo contenido</h1>";
  }
})();
