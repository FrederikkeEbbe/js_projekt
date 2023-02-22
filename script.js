//Burger menu - Ebbe
window.onload = function () {
	const menu_btn = document.querySelector('.hbmenu');
	const mobil_menu = document.querySelector('.mobil-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('aktivnu');
		mobil_menu.classList.toggle('aktivnu');
	});
}

//Gavekort funktion
function plus() {
  let valueGk = parseFloat(document.getElementById("vaerdi").innerHTML);

  document.getElementById("vaerdi").innerHTML = valueGk + 100 + ',-';
  console.log(valueGk);
}


function minus() {
    let valueGk = parseFloat(document.getElementById("vaerdi").innerHTML);
  
    document.getElementById("vaerdi").innerHTML = valueGk - 100 + ',-';
    console.log(valueGk);
  }
//Menukort


//Billede galleri


// ----- Sprogvælger -----

select_element = document.getElementById("langSelect");
let sprog = ["DK", "EN", "DE",];


// Udvider option-boks baseret på antal sprog i array'et
for (let i=0; i < sprog.length; i++) {
let opt = sprog[i];
select_element.innerHTML += "<option value=\" "+ opt +"\">"+ opt + "</option";
}

//
document.getElementById("langSelect").onchange = function(){
if (document.getElementById("langSelect").value == ' DK')
location.replace('index.html');
else if (document.getElementById("langSelect").value == ' EN')
location.replace('indexEn.html');
else
location.replace('indexDe.html')
}

document.getElementById("langSelect").selectedIndex = 1;

//Find os - Signe
let findOsArray = ["<a href=''>Slotsgade 26a</a>", "5000 Odense", "Telefon: <a href=''>+45 38 42 55 </a>", "<a href=''>odense@frankiepizza.dk</a>", "CVR 42519790", "<a href=''>Kontrolrapport</a>"];

for(let i=0; i < findOsArray.length; i++) {
    document.getElementById("findos1").innerHTML += findOsArray[i] + "<br>";
}


//UR - Signe
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

//Besked over ur
let hello = ["Godmorgen!", "Goddag!", "Godaften!"];

let dato2, time, helloText;

dato2 = new Date();
time = dato2.getHours();
helloText = document.getElementById("tekstur");


if(time <= 11) {
    helloText.innerHTML = hello[0];
    console.log(hello[0]);
}
else if (time > 11 && time <= 17) {
    helloText.innerHTML = hello[1];
    console.log(hello[1]);
}
else if (time > 17 && time <= 24) {
    helloText.innerHTML = hello[2];
    console.log(hello[2]);
}

