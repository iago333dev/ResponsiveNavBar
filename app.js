const navSlide = ()=> {
    // Botão (Somente aparece quando responsivo)
    const burguer = document.querySelector('.burger');
    // DIV navbar
    const nav = document.querySelector('.nav-link');
    // Cada Link
    const NavLinks = document.querySelectorAll('.nav-link li');

    
    burguer.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        NavLinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = ``;
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards  ${index / 7 + 0.3}s`;
            }        
        });

    });

}

navSlide();