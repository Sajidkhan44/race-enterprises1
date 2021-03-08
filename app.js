const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li')


    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
   
    navLinks.forEach(( link,index) =>{
        if(link.style.animation){
            link.style.animation = '';
        } else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 1.3}s`
        }
    });
    burger.classList.toggle('toggle')
});
}
navSlide();

function smoothAppear(){
    var introText = document.querySelector('.about');
    var introPosition = introText.getBoundingClientRect().top
    var screenPosition = window.innerHeight/1.5;

    if(introPosition < screenPosition){
        introText.classList.add('about-appear')
    }
    

}
window.addEventListener('scroll',smoothAppear)