// VARIABLES GLOBALES
let contenedor_listo = document.getElementById('contenedor_capturar_listo')
let listo = document.getElementById('mostrar_camara_capturar_listo')
let video = document.getElementById('grabar_camara')
let finalizar_botones = document.getElementById('contenedor_finalizar_botones')
let capturar = document.getElementById('mostrar_camara_capturar')
let contenedor_capturar = document.getElementById('contenedor_capturar')

////////////////////////////

contenedor_listo.style.display = 'none'
finalizar_botones.style.display = 'none'

capturar.addEventListener('click', () => {
  videoGenerate1()
  setTimeout(() => {
    contenedor_capturar.style.display = 'none'
    contenedor_listo.style.display = ''
  }, 3000);
})

listo.addEventListener('click', () => {
  contenedor_listo.style.display = 'none'
  finalizar_botones.style.display = ''
})

function videoGenerate1() {
  navigator.mediaDevices
    .getUserMedia({ audio: false, video: true })
    .then(function (stream) {
      video.srcObject = stream;
      video.play();
    });
}