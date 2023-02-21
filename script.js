//Burger menu - Ebbe
window.onload = function () {
	const menu_btn = document.querySelector('.hbmenu');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('er-aktiv');
		mobile_menu.classList.toggle('er-aktiv');
	});
}

//Menukort


//Billede galleri


//Knapper 


//Ur - Signe
//Tutorial af Adam Khoury

let dato, timer, minutter, sekunder, timeRotation;

let t = document.getElementById("timeur");
let m = document.getElementById("minutterur");
let s = document.getElementById("sekunderur");

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





