// DECLARACIÓN DE VARIABLES GLOBALES

/* let body = document.getElementsByTagName('body') */
let gif_sugerencia = document.getElementsByClassName('img--gif--sugerencia')
console.log(gif_sugerencia);

let gif_titulo_sugerencia = document.getElementsByClassName('gif--titulo--sugerencia')
console.log(gif_titulo_sugerencia);

let gif_tendencia = document.getElementsByClassName('img--gif--tendencias')
console.log(gif_tendencia);

let gif_titulo_tendencia = document.getElementsByClassName('gif--titulo--tendencia')
console.log(gif_titulo_tendencia);

///////////////////////

// ENDPOINT PARA MOSTRAR LOS GIFS EN LA SECCIÓN DE SUGERENCIAS

function cargaDelBody() { // Función para detectar la carga del body y llamar al Endpoint
  console.log('La página cargó');

  getSugerencias();
}

// ENDPOINT SUGERENCIAS
function getSugerencias() {
  const Sugerencias =
    fetch('http://api.giphy.com/v1/gifs/trending' + '?api_key=' + 'IJ7aSGsN2e6e1INt0JSAqYYwHPKFi58e' + '&limit=4')
      .then(response => response.json())
      .then(resData => {
        console.log(resData);
        for (let i = 0; i < resData.data.length; i++) {
          let url_sugerencia = resData.data[i].images.downsized.url
          let titulo_sugerencia_completo = resData.data[i].title

          for (let j = i; j < gif_sugerencia.length; j++) {
            gif_sugerencia[j].src = url_sugerencia
          }

          for (let k = i; k < gif_titulo_sugerencia.length; k++) {
            let titulo_sugerencia_final = titulo_sugerencia_completo.split('GIF', 1)// ELIMINAR EL AUTOR DEL TÍTULO DEL GIF
            console.log(titulo_sugerencia_final);

            gif_titulo_sugerencia[k].textContent = `#${titulo_sugerencia_final[0].replace(/ /g, '')} ` // ELIMINAR ESPACIOS EN BLANCO
          }
        }
        return resData
      })
      .catch((error) => {
        return error
      })
  return Sugerencias
}

///////////////////////

// ENDPOINT PARA CAPTURAR LA BÚSQUEDA DEL USUARIO Y MOSTRARLA EN LA SECCIÓN DE TENDENCIAS

//Capturar la búsqueda del usuario y llamar el Endpoint
let search = () => {
  let buscar = document.getElementById('buscar').value
  event.preventDefault();
  console.log(buscar);
  getTendencias(buscar); //Llamada a la función del Endpoint
}

//ENDPOINT TENDENCIAS
function getTendencias(search) {
  const Tendencias =
    fetch('http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=' + 'IJ7aSGsN2e6e1INt0JSAqYYwHPKFi58e' + '&limit=10')
      .then(response => response.json())
      .then(resData => {
        console.log(resData);
        for (let i = 0; i < resData.data.length; i++) {
          let url_tendencia = resData.data[i].images.downsized.url
          let titulo_tendencia = resData.data[i].title
          for (let j = 0; j < gif_tendencia.length; j++) {
            gif_tendencia[i].src = url_tendencia
          }
          for (k = i; k < gif_titulo_tendencia.length; k++) {
            gif_titulo_tendencia[k].textContent = `#${titulo_tendencia} `
          }
        }
        return resData
      })
      .catch((error) => {
        return error
      })
  return Tendencias
}

///////////////////////