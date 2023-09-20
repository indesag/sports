export function onLoadFrame(iframe) {
  iframe.addEventListener('onload', function () {
    alert('onload');
    // Redirigir al enlace deseado cuando el video termine
    iframe.contentWindow.document.querySelector('video').addEventListener('ended', function () {
      // Cambiar la URL al enlace deseado
      window.location.href =
        'https://docs.google.com/forms/d/e/1FAIpQLScei-0aSwblSJUE8qgUV-4Uc_hGjhIWjA4g5NLyEowPpBVXYQ/viewform';
    });
  });
}

export function endedVideo(video) {
  video.addEventListener('ended', function () {
    // Cambiar la URL al enlace deseado
    window.location.href =
      'https://docs.google.com/forms/d/e/1FAIpQLScei-0aSwblSJUE8qgUV-4Uc_hGjhIWjA4g5NLyEowPpBVXYQ/viewform';
  });
}
