const meuGitHub = document.querySelector("#github");
const contact = document.querySelector("#contact");
const hireMe = document.querySelector("#hire");
const instagram = document.querySelector("#insta");
const discord = document.querySelector("#discord");

meuGitHub.onclick = function() {
    window.location.href = "https://github.com/rlimazzz";
}

hireMe.onclick = function() {
    window.location.href = "https://www.linkedin.com/in/ryan-gabryel-99ba99283/";
}

instagram.onclick = function() {
    window.location.href = "https://www.instagram.com/ryan_gabr11/";
}

discord.onclick = function() {
    window.location.href = "https://discord.gg/SFsktZUK";
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("carousel-image");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Muda imagem a cada 2 segundos
}