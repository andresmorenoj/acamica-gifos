/* let busqueda = document.getElementById('buscar')

let search = busqueda.textContent
/* busqueda.addEventListener('change', captura)
function captura() {
  var e = busqueda.value
  console.log(e);
} */

let search = () => {
  let buscar = document.getElementById('buscar').value
  event.preventDefault();
  console.log(buscar);
  getSearchResults(buscar);
}


let prueba = document.getElementById('pruebas')
let gif_prueba = document.getElementsByClassName('img--gif')
let verMas = document.getElementById('verMas')
console.log(gif_prueba);


function getSearchResults(search) {
  const found =
    fetch('http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=' + 'IJ7aSGsN2e6e1INt0JSAqYYwHPKFi58e&limit=4')
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        for (let i = 0; i < data.data.length; i++) {
          let url = data.data[i].images.fixed_width_small.url
          for (let j = 0; j < gif_prueba.length; j++) {
            gif_prueba[i].src = url
          }
        }
        return data
      })
      .catch((error) => {
        return error
      })
  return found
}


/* function getSearchResults(search) {
  const found =
    fetch('http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=' + 'IJ7aSGsN2e6e1INt0JSAqYYwHPKFi58e&limit=4')
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        for (let i = 0; i < data.data.length; i++) {
          let id = data.data[i].id
          let url = data.data[i].images.fixed_width_small.url
          console.log(id);
          let img_gif = document.createElement('img')
          img_gif.src = url
          img_gif.width = 280
          img_gif.height = 280
          img_gif.classList = 'img--gif'
          for (let j = 0; j < gif_prueba.length; j++) {
            gif_prueba[i].src = url
          }

          console.log(gif_prueba);

             prueba.appendChild(img_gif)

             gif_prueba.insertBefore(img_gif, verMas)
        }
        return data
      })
      .catch((error) => {
        return error
      })
  return found
} */

