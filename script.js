//Burger menu
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
  const plusKnap = document.getElementById("plusKnp");

  document.getElementById("vaerdi").innerHTML = valueGk + 100;
  if (valueGk + 100 == 2500) {
    plusKnap.disabled = true;
  }
  else {
    plusKnap.disabled = false;
  }
}
function minus() {
    let valueGk = parseFloat(document.getElementById("vaerdi").innerHTML);

    document.getElementById("vaerdi").innerHTML = valueGk - 100 + ',-';
    console.log(valueGk);

    const minusKnap = document.getElementById("minusKnp");


    document.getElementById("vaerdi").innerHTML = valueGk - 100;
    if (valueGk - 100 == 100) {
        minusKnap.disabled = true;
      }
    else {
        minusKnap.disabled = false;
    }
  }

//Menukort


//Billede galleri
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// ----- Sprogvælger -----

select_element = document.getElementById("langSelect");
let sprog = ["DK", "EN", "DE",];


// Udvider option-boks baseret på antal sprog i array'et og sætter første sprog i array'et som det valgte
for (let i=0; i < sprog.length; i++) {
  let opt = sprog[i];
  if (i==0)
      select_element.innerHTML += "<option value=\""+ opt +"\" selected>"+ opt + "</option>";
  else
      select_element.innerHTML += "<option value=\""+ opt +"\">"+ opt + "</option>";
}

//Denne boolean tjekker hvilket sprog der er valgt i selectboksen, og viderdirigerer derefter brugeren
document.getElementById("langSelect").onchange = function(){
if (document.getElementById("langSelect").value == 'DK')
location.replace('index.html');
else if (document.getElementById("langSelect").value == 'EN')
location.replace('indexEn.html');
else
location.replace('indexDe.html')
}

//Find os - Signe
//array over punkter i find os
let findOsArray = ["<a href=''>Slotsgade 26a</a>", "5000 Odense", "Telefon: <a href=''>+45 38 42 55 </a>", "<a href=''>odense@frankiepizza.dk</a>", "CVR 42519790", "<a href=''>Kontrolrapport</a>"];

//for loop som printer hele arrayet
for(let i=0; i < findOsArray.length; i++) {
    document.getElementById("findos1").innerHTML += findOsArray[i] + "<br>";
}


//UR - Signe
//Tutorial af Adam Khoury

//variabler
let dato, timer, minutter, sekunder, timeRotation;

//sætter værdi på variablerne
let t = document.getElementById("timeur");
let m = document.getElementById("minutterur");
let s = document.getElementById("sekunderur");

//funktion til uret, tager datoen, timer, minutter og sekunder
//og sætter rotationen for de forskellige visere
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

//kalder funktionen hvert sekund
window.addEventListener("load", function(){
    setInterval(urTid, 1000);
});

//Besked over ur

//array over beskeder over ur
let hello = ["Godmorgen!", "Goddag!", "Godaften!"];

//variabler
let dato2, time, helloText;

//sætter værdi på variablerne
dato2 = new Date();
time = dato2.getHours();
helloText = document.getElementById("tekstur");

//if statement -> hvis klokken er under eller lig med 11 skriv "Godmorgen!"
//hvis klokken er over 11 og under eller lig med 17 så skriv "Goddag!"
//hvis klokken er under 17 og under eller lig med 24 så skriv "Godaften!"
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
