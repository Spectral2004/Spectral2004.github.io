'use strict';
let votonSi = window.document.getElementById('yes');
let votonNo = window.document.getElementById('no');

let partner = prompt('🥰 Por favor tu lindo nombre aquí 🥰');
document.querySelector('.contenedor__titulo').innerHTML += partner + ' 💞';

const TEAMOOOO = () => {
  // alert('💙Ahora estarás conmigo por siempre💙 ' + ${partner} + '💞');
  alert(`💞No tienes idea de todo lo que te amo y todo lo que deseo que hagamos, en muy poco tiempo te has vuelto una niña muy especial para mí, y pese a que no pensemos igual o no estemos de acuerdo en algunas cosas yo te sigo amando y demasiado. ${partner} 💞`);
  alert('💙Espero que te haya gustado, este es un pequeño detalle que quise hacerte y que te mereces! TE AMO💙');
  location.href = "https://youtu.be/zp4zKw7P9as";
};

const ebitarKCRompaMyBobo = () => {
  votonNo.style.position = 'absolute';
  votonNo.style.top = (Math.random() * window.innerHeight) + 'px';
  votonNo.style.left = (Math.random() * window.innerWidth) + 'px';
};

votonSi.addEventListener('click', TEAMOOOO);
votonNo.addEventListener('mouseover', ebitarKCRompaMyBobo);