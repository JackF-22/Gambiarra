function menuDrop() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.mobilemenu');
    burger.classList.toggle('active');
    menu.classList.toggle('active');
}

var intervalId = window.setInterval(function(){
    checkMenu();
  }, 100);

function checkMenu() {
    const menu = document.querySelector('.mobilemenu');
    var w = document.documentElement.clientWidth || window.innerWidth;
    if (w >= 800 && menu.classList.contains('active')) {
        menuDrop();
    }
}