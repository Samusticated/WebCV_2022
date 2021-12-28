const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  //Check if variable exist

  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      //Add show-menu to div with the nav__menu as a class
      nav.classList.toggle('show-menu')
    })
  }
}

showMenu('nav-toggle', 'nav-menu')

// remove menu mobile

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  // when each nav__link is clicked, show-menu class is removed
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Scroll sections active linkAction

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
  const sectionHeight = current.offsetHeight
  const sectionTop = current.offsetTop - 50;
  sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    document.queryselector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
  }else{
    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
  }
})
}
window.addEventListener('scroll', scrollActive)
