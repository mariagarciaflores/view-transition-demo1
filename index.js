(() => {
  const button = document.querySelector("#update-btn");

  button.addEventListener("click", () => {
    updateDOM();
  });

  function updateDOM() {
    document.querySelector(".content").innerHTML = "<h1>Nuevo contenido</h1>";
  }
})();
