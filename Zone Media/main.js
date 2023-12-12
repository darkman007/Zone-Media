function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    const top30vh = viewHeight * 0.2; 
  
    return !(rect.bottom < 0 || rect.top - top30vh >= 0);
  }
document.addEventListener('DOMContentLoaded', function() {
    const abouttaglink = document.getElementById('abouttaglink');

    const element = document.getElementById('abouts');
    const hometag = document.getElementById('hometag');
    const offerstag = document.getElementById('offerstag');
    const videotag = document.getElementById('videotag');
    const galerytag = document.getElementById('galerytag');
    const contacttag = document.getElementById('contacttag');
    
    const home = document.getElementById('home');
    const offers = document.getElementById('offers');
    const video = document.getElementById('video');
    const galery = document.getElementById('galery');
    const contact = document.getElementById('contact');
    console.log(galery)
  
    if (element) {  
      window.addEventListener('scroll', function() {

        if (isElementInViewport(element)) {

          abouttaglink.classList.add('active');
          hometag.classList.remove('active');
          offerstag.classList.remove('active');
          videotag.classList.remove('active');
          galerytag.classList.remove('active');
          contacttag.classList.remove('active');
        } else if (isElementInViewport(home)) {

          abouttaglink.classList.remove('active');
          hometag.classList.add('active');
          offerstag.classList.remove('active');
          videotag.classList.remove('active');
          galerytag.classList.remove('active');
          contacttag.classList.remove('active');
        } else if (isElementInViewport(offers)) {

          abouttaglink.classList.remove('active');
          hometag.classList.remove('active');
          offerstag.classList.add('active');
          videotag.classList.remove('active');
          galerytag.classList.remove('active');
          contacttag.classList.remove('active');
        } else if (isElementInViewport(video)) {

          abouttaglink.classList.remove('active');
          hometag.classList.remove('active');
          offerstag.classList.remove('active');
          videotag.classList.add('active');
          galerytag.classList.remove('active');
          contacttag.classList.remove('active');
        }  else if (isElementInViewport(galery)) {

          abouttaglink.classList.remove('active');
          hometag.classList.remove('active');
          offerstag.classList.remove('active');
          videotag.classList.remove('active');
          galerytag.classList.add('active');
          contacttag.classList.remove('active');
        } else if (isElementInViewport(contact)) {

          abouttaglink.classList.remove('active');
          hometag.classList.remove('active');
          offerstag.classList.remove('active');
          videotag.classList.remove('active');
          galerytag.classList.remove('active');
          contacttag.classList.add('active');
        } 
      }
      )
    }
  });

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){

  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

sr.reveal('.section__title',{}); 
sr.reveal('.services__h3',{}); 
sr.reveal('.services__fa-solid fa-briefcase',{interval: 200}); 
sr.reveal('.services__box',{delay: 600});

sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

sr.reveal('.work__img',{interval: 200}); 

sr.reveal('.contact__input',{interval: 200}); 




