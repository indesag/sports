export function setupCounter(element) {
  var tiempoRestante = 10; // Inicializar el tiempo restante en 10 segundos

  function actualizarContador() {
    if (tiempoRestante > 0) {
      element.textContent = `El formulario de inscripción se abrirá en ${tiempoRestante} segundos`;
      tiempoRestante--;
      setTimeout(actualizarContador, 1000); // Actualizar cada 1 segundo (1000 ms)
    } else {
      element.textContent = 'abriendo el formulario';
      // Realizar alguna acción una vez que el contador llegue a cero
    }
  }

  // Iniciar el contador cuando la página se carga
  actualizarContador();
}
