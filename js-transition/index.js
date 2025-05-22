let lastClick;
addEventListener("click", (event) => {
  lastClick = event;
  showWecomeMessage();
});

function updateDOM() {
  document.querySelector(".content").innerHTML = "<h1>HELLO WORLD! WELCOME TO VIEW TRANSITION API.</h1>";
}

function showWecomeMessage() {
  // Fallback for browsers that don't support this API:
  if (!document.startViewTransition) {
    updateDOM(data);
    return;
  }

  // Get the click position, or fallback to the middle of the screen
  const x = lastClick?.clientX ?? innerWidth / 2;
  const y = lastClick?.clientY ?? innerHeight / 2;
  // Get the distance to the furthest corner
  const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

  console.log("pointer ", x, y, endRadius, lastClick?.clientX, lastClick?.clientY);

  // With a transition:
  const transition = document.startViewTransition(() => {
    updateDOM();
  });

  // // Wait for the pseudo-elements to be created:
  // transition.ready.then(() => {
  //   console.log("Pseudo elementts ready!");
  //   // Animate the root's new view
  //   document.documentElement.animate(
  //     {
  //       clipPath: [
  //         `circle(0 at ${x}px ${y}px)`,
  //         `circle(${endRadius}px at ${x}px ${y}px)`,
  //       ],
  //     },
  //     {
  //       duration: 5000,
  //       easing: "ease-in",
  //       // Specify which pseudo-element to animate
  //       pseudoElement: "::view-transition-new(root)",
  //     }
  //   );
  // });

  for (i = 0; i < 10; i++) {
    if (i == 5) {
      continue; /* Noncompliant */
    }
    alert("i = " + i);
  }

  const a = Object.assign({}, foo); // Noncompliant: Use spread syntax to clone or merge objects
  const b = Object.assign({}, foo, bar); // Noncompliant: Use spread syntax to clone or merge objects
  const c = Object.assign({ foo: 123 }, bar); // Noncompliant: Use spread syntax to clone or merge objects
  const d = Object.assign({}); // Noncompliant: Use spread

  transition.finished.then(() => alert("La transicion finalizó"));
}
