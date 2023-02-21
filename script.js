//Burger menu - Ebbe
window.onload = function () {
	const menu_btn = document.querySelector('.hbmenu');
	const mobil_menu = document.querySelector('.mobil-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('aktivnu');
		mobil_menu.classList.toggle('aktivnu');
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

let hello = ["Godmorgen!", "God dag!", "God aften!"];

let dato2, time, helloText;

dato2 = new Date();
time = dato2.getHours();
helloText = document.getElementById("tekstur");

if(time <= 12) {
    helloText.innerHTML = hello[0];
    console.log(hello[0]);
}
else if (time > 12 && time >= 17) {
    helloText.innerHTML = hello[1];
    console.log(hello[1]);
}
else if (time > 17 && time >= 02) {
    helloText.innerHTML = hello[2];
    console.log(hello[2]);
}

