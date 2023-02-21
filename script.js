//Burger menu - Ebbe
window.onload = function () {

  const menu_knp = document.querySelector('.hbmenu');

  menu_knp.addEventListener('klik', function () {
    menu_knp.classList.toggle('aktivnu');
  });
}

//Menukort


//Billede galleri


//Knapper 


//Ur - Signe
//Tutorial af Adam Khoury

let dato, timer, minutter, sekunder, timeRotation;

t = document.getElementById("timeur");
m = document.getElementById("minutterur");
s = document.getElementById("sekunderur");

function urTid() {
    dato = new Date();
    timer = dato.getHours();
    minutter = dato.getMinutes();
    sekunder = dato.getSeconds();
    timeRotation = timer*30 + minutter/2;
    t.style.transform = "rotate("+timeRotation+"deg)";
    m.style.transform = "rotate("+minutter*6+"deg)";
    s.style.transform = "rotate("+sekunder*6+"deg)";
}

window.addEventListener("load", function(){
    setInterval(urTid, 1000);
});





