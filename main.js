import './style.css';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
<p id="contador"></p>
<div
class="fb-video"
data-autoplay="true"
data-href="https://www.facebook.com/indesag/videos/1076921783685728/"
data-width="500"
data-show-text="true"
></div>
`;

setupCounter(document.querySelector('#contador'));

window.fbAsyncInit = function () {
  FB.init({
    appId: '571043277598714', // Reemplaza con tu ID de aplicación de Facebook
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v18.0', // Reemplaza con la versión de la API que estés utilizando
  });

  // Detecta el evento de finalización de la reproducción del video
  FB.Event.subscribe('xfbml.ready', function (msg) {
    if (msg.type === 'video') {
      var time = setTimeout(() => {
        window.open(
          'https://docs.google.com/forms/d/e/1FAIpQLScei-0aSwblSJUE8qgUV-4Uc_hGjhIWjA4g5NLyEowPpBVXYQ/viewform',
          '_blank',
        );
        clearTimeout(time);
      }, 10000);
    }
  });
};

// Carga el SDK de Facebook
(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');
