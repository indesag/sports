import './style.css';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
<p id="contador"></p>
<div id="fb-root"></div>
<div class="fb-video" data-allowfullscreen="true" data-autoplay="true" data-href="https://www.facebook.com/indesag/videos/1076921783685728/" data-width="500" data-show-text="true"><blockquote cite="https://www.facebook.com/indesag/videos/1076921783685728/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/indesag/videos/1076921783685728/"></a><p>No dejes pasar la oportunidad, el momento de iniciar a construir tu futuro es hoy 🔝

‼️INSCRIPCIÓN GRATIS‼️ 

“Asegura tu inversión con enseñanza de calidad en la Universidad INDESAG” 

Contáctanos en 📲 74 44 10 99 82 al 85 

#SomosINDESAG</p>Publicado por <a href="https://www.facebook.com/indesag">Universidad Indesag</a> en Domingo, 3 de septiembre de 2023</blockquote></div>
`;

function obtenerValorDeFormDesdeURL() {
  // Obtener la cadena de consulta de la URL
  var queryString = window.location.search;

  // Eliminar el signo de interrogación "?" del inicio de la cadena de consulta
  queryString = queryString.substring(1);

  // Dividir la cadena de consulta en pares clave-valor
  var parametros = queryString.split('&');

  // Buscar el parámetro "form" y obtener su valor
  for (var i = 0; i < parametros.length; i++) {
    var parametro = parametros[i].split('=');
    if (parametro[0] === 'register') {
      // Decodificar el valor si es necesario
      var valorForm = decodeURIComponent(parametro[1]);
      return valorForm;
    }
  }

  // Devolver null si no se encuentra el parámetro "form" en la URL
  return 'soccer';
}

// Ejemplo de uso:
const valorFormEnURL = obtenerValorDeFormDesdeURL();

setupCounter(document.querySelector('#contador'), valorFormEnURL);
