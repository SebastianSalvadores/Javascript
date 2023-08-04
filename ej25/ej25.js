let nombre;
let apellido;

function getFormValores() {
  let nombres = document.getElementsByName("nombre");
  nombres.forEach((e) => (nombre = e.value));
  let apellidos = document.getElementsByName("apellido");
  apellidos.forEach((e) => (apellido = e.value));
  console.log(`Nombre: ${nombre}
  Apellido: ${apellido}`);
  alert(`Hola ${nombre} ${apellido}!`);
}
