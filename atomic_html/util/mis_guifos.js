// VARIABLES GLOBALES
let contenedor_listo = document.getElementById('contenedor_capturar_listo')
let listo = document.getElementById('mostrar_camara_capturar_listo')
let video = document.getElementById('grabar_camara')
let finalizar_botones = document.getElementById('contenedor_finalizar_botones')
let capturar = document.getElementById('mostrar_camara_capturar')
capturar.textContent = 'Capturar'
let contenedor_capturar = document.getElementById('contenedor_capturar')
let subir_gif = document.getElementById('contenedor_finalizar_subir')
let repetir_captura = document.getElementById('contenedor_finalizar_repetir')
let url_gif = null


////////////////////////////

/* METODO POST A GIFPHY */
class giphy {
  async obtener(apiKey, formaData) {
    let cors = { method: "POST", body: formaData, json: true };
    let respuestaApi = await this.postear(
      `https://upload.giphy.com/v1/gifs?api_key=${apiKey}`,
      cors
    );

    return respuestaApi;
  }
  async postear(URL, parametros) {
    let datos = await fetch(URL, parametros);
    console.log('Datos postear ', datos);
    let respuesta = await datos.json();

    console.log('Respuesta postear, ', respuesta);


    return respuesta;
  }

  async getGifById(id) {
    let obtenId = await fetch(
      `https://api.giphy.com/v1/gifs/${id}?api_key=IJ7aSGsN2e6e1INt0JSAqYYwHPKFi58e`
    )
      .then(resData => {
        console.log('Quiero morir', resData);
        url_gif = resData.url

      })
    /* let obtenResId = await obtenId.json(); */
    return { obtenId };
  }
}
///////////////////

contenedor_listo.style.display = 'none'
finalizar_botones.style.display = 'none'

capturar.addEventListener('click', () => {
  videoGenerate()
  capturar.textContent = 'Creando Guifo'
  setTimeout(() => {
    contenedor_capturar.style.display = 'none'
    contenedor_listo.style.display = ''
  }, 1000);
  listo.addEventListener('click', () => {
    contenedor_listo.style.display = 'none'
    finalizar_botones.style.display = ''
  })
})
repetir_captura.addEventListener('click', () => {
  videoGenerate()
  finalizar_botones.style.display = 'none'
  contenedor_capturar.style.display = ''
  capturar.textContent = 'Creando Guifo'
  setTimeout(() => {
    contenedor_capturar.style.display = 'none'
    contenedor_listo.style.display = ''
  }, 1000);
  listo.addEventListener('click', () => {
    contenedor_listo.style.display = 'none'
    finalizar_botones.style.display = ''
  })
})


function videoGenerate() {
  navigator.mediaDevices
    .getUserMedia({
      video: { height: { max: 480 } },
      // audio: false
    })

    .then(async function (stream) {
      video.srcObject = stream;
      video.play();
      let recorder = RecordRTC(stream, {
        type: "gif",
        frameRate: 1,
        quality: 10,
        width: 360,
        hidden: 240,
        onGifRecordingStarted: function () {
          console.log("started");
        },
      });
      recorder.startRecording();
      listo.addEventListener('click', () => {
        recorder.stopRecording(function () {
          // let blob = recorder.getBlob();  // 1PERMITE DESCARGAR EL GIF
          // invokeSaveAsDialog(blob);       // 2PERMITE DESCARGAR EL GIF

          // TECER FASE -- GENERANDO ARCHIVO CAPTURA PARA SUBIR
          video.pause()
          let form = new FormData();
          let form2 = new FormData()

          form.append("file", recorder.getBlob(), "myGif.gif");
          console.log('Este es el blob', form.get("file"));
          /* form2.append("lastModified", recorder.getBlob(), "myGif.gif");
          console.log('lastModified', form2.get("file.lastModified")); */

          /* let url = URL.createObjectURL(recorder.getBlob())
          console.log('ESTA ES LA MALDITA URL', url); */
          let url = recorder.toURL()
          console.log('ESTA ES LA MALDITA URL', url);



          subir_gif.addEventListener('click', () => {
            let inst = new giphy();
            let key = "IJ7aSGsN2e6e1INt0JSAqYYwHPKFi58e"; //KEY OBTENIDO DE GIPHY
            inst.obtener(key, form)
              .then((resData) => {
                console.log(resData.data.id); // IMPRIME DEL ID QUE SITUA EN EL OBJETO
                const traer_gif =
                  fetch('https://api.giphy.com/v1/gifs/' + resData.data.id + '?api_key=' + 'IJ7aSGsN2e6e1INt0JSAqYYwHPKFi58e')
                    .then(response => response.json())
                    .then(resData3 => {
                      console.log('Otro intento mas ', resData3);
                      localStorage.setItem(`GIF ${resData3.data.id}`, JSON.stringify(resData3))
                      let gif_local = localStorage.getItem(`GIF ${resData3.data.id}`)
                      console.log('Antes del parse ', gif_local);
                      let nuevo_gif = JSON.parse(gif_local);
                      console.log('Después del parse ', nuevo_gif);
                      console.log(nuevo_gif.data.url);




                    })
                return traer_gif



                /* let captur = inst.getGifById(resData.data.id)
                console.log('Es es captur', captur); */
                /* console.log('Quiero morir 2', resData.url); */
                /* console.log(obtenId.PromiseValue); */

                /*  console.log('Este es resData ', resData.data);
 
                 localStorage.setItem(`GIF${resData.data.id}`, JSON.stringify(resData))
                 localStorage.getItem(`GIF${resData.data.id}`) */
              });
          })

          // CUARTA FASE - LOCAL STORAGE AGREGAR LOS ITEMS DE ID

          /*           localStorage.setItem("id", JSON.stringify(recorder));
                    localStorage.getItem("id"); */

        });
      })

    });
}
