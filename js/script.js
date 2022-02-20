// ==== MUDANDO A COR DO CIRCULO ==== //
let button = document.querySelector(".btn"); // SELECIONA A CLASSE DO BOTÃO E SALVA NA VARIÁVEL "button"

let circle =  document.querySelector(".circle"); // SELECIONA A CLASSE DO CIRCULO E SALVA NA VARIÁVEL "circle"

button.addEventListener("click", () => { // ADICIONA EVENTO DE CLICK NO BOTÃO

    circle.classList.toggle("circle-painted"); // ADICIONA UMA NOVA CLASSE AO ELEMENTO "<div class="circle"></div>"
});

// ==== ABRINDO A SIDEBAR ==== //
let buttonMenu = document.querySelector(".btn-menu"); // SELECIONA A CLASSE DO BOTÃO E SALVA NA VARIÁVEL "buttonMenu"

let sidebar = document.querySelector(".sidebar"); // SELECIONA A CLASSE DA SIDEBAR E SALVA NA VARIÁVEL "sidebar"

buttonMenu.addEventListener("click", () => { // ADICIONA EVENTO DE CLICK NO BOTÃO

    sidebar.classList.toggle("sidebar-open"); // ADICIONA UMA NOVA CLASSE AO ELEMENTO "<div class="sidebar"></div>"
});