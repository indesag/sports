export function setupCounter(element, form) {
  var tiempoRestante = 20; // Inicializar el tiempo restante en 10 segundos
  let link = '';
  const torneo = form?.toLowerCase() || 'futbol';
  switch (torneo) {
    case 'futbol':
      link =
        'https://docs.google.com/forms/d/e/1FAIpQLScei-0aSwblSJUE8qgUV-4Uc_hGjhIWjA4g5NLyEowPpBVXYQ/viewform';
      break;
    case 'voleibol':
      link =
        'https://docs.google.com/forms/d/e/1FAIpQLSfU-qSxNeUeLsCvXaSAsXrNenP7ditxROqu-kDeyHV7sTs90g/viewform';
      break;
    default:
      link =
        'https://docs.google.com/forms/d/e/1FAIpQLScei-0aSwblSJUE8qgUV-4Uc_hGjhIWjA4g5NLyEowPpBVXYQ/viewform';
      break;
  }

  function actualizarContador() {
    if (tiempoRestante > 0) {
      element.textContent = `El formulario de inscripción para el torneo de ${torneo} se abrirá en ${tiempoRestante} segundos`;
      tiempoRestante--;
      setTimeout(actualizarContador, 1000); // Actualizar cada 1 segundo (1000 ms)
    } else {
      element.textContent = 'abriendo el formulario';
      window.location.href = link;
      // Realizar alguna acción una vez que el contador llegue a cero
    }
  }

  // Iniciar el contador cuando la página se carga
  actualizarContador();
}
