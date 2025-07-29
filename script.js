// Mostrar un mensaje simple en la consola
document.addEventListener("DOMContentLoaded", function () {
  alert("¡Hola, desarrolladora Fullstack en camino! 🎓💜");

  // Seleccionar el botón por su ID y agregar evento
  const boton = document.getElementById("click");
  boton.addEventListener("click", function () {
    alert("Se ha enviado un mensaje");
  });

});
