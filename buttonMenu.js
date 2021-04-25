const menu = document.querySelector('.menu')
const ButtonMenu_Open = document.querySelector('.buttonMenuOpen')
const ButtonMenu_close = document.querySelector('.buttonMenuclose')

ButtonMenu_Open.addEventListener('click', function(){
    menu.classList.add('menuOpen')
})

ButtonMenu_close.addEventListener('click', function(){
    menu.classList.remove('menuOpen')
})
