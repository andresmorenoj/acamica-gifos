/* let desplegar = function () {
  if (document.getElementById('desplegarMenu')) {
    document.getElementById('desplegar').classList.add('desplegar')
    document.getElementById('desplegar2').classList.add('desplegar2')
  }
}
 */
let menu = document.getElementById('desplegarMenu');
let menu2 = document.getElementById('desplegar2');
/* let li = document.getElementById('item--tema'); */


let text = menu.addEventListener('click', function () {
  document.getElementById('desplegar').classList.add('desplegar')
  document.getElementById('desplegar2').classList.add('desplegar')
})

let img = menu2.addEventListener('click', function () {
  document.getElementById('desplegar').classList.add('desplegar')
  document.getElementById('desplegar2').classList.add('desplegar')
})
/* 
let img = menu2.addEventListener('click', function () {
  document.getElementById('desplegar2').classList.add('desplegar')
}) */

function ocultar() {
  document.getElementById('desplegar').classList.remove('desplegar')
  document.getElementById('desplegar2').classList.remove('desplegar')
}

/* if (li) {
  text = document.getElementById('desplegar').classList.remove('desplegar')

  img = document.getElementById('desplegar2').classList.remove('desplegar')
} */

/* function desplegar() {
  let texto = document.getElementById('desplegar').classList.add('desplegar')
  let img = document.getElementById('desplegar2').classList.add('desplegar')
} */
/* else {
 menu.removeEventListener('click', hide)
 menu2.removeEventListener('click', hide)
 function hide() {
   document.getElementById('desplegar').classList.remove('desplegar')
   document.getElementById('desplegar2').classList.remove('desplegar')
 }
} */

/* while (menu && menu2) {
  menu.addEventListener('click', desplegar)
  menu2.addEventListener('click', desplegar)
  function desplegar() {
    document.getElementById('desplegar').classList.add('desplegar')
    document.getElementById('desplegar2').classList.add('desplegar2')
  }
  function hide() {
    document.getElementById('desplegar').classList.remove('desplegar')
    document.getElementById('desplegar2').classList.remove('desplegar2')
  }
}

hide(); */