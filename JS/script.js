const menu = document.getElementById('icone-menu-mobile');

function abrirMenu() {

    const menuSuspenso = document.querySelector('.teste');

    if (menuSuspenso.classList.contains('menu-suspenso') === true) {

        menuSuspenso.classList.remove('menu-suspenso');
    }
    else if(menuSuspenso.classList.contains('menu-suspenso') === false) {

        menuSuspenso.classList.add('menu-suspenso');
    }

menu.addEventListener('click', abrirMenu);