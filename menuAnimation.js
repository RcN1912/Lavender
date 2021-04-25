const links = document.querySelectorAll('.menu li');
links.forEach(link =>{ 
    link.addEventListener('click',function(){
        menu.classList.remove('menuOpen')
    })
})