const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  //Check if variable exist

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      //Add show-menu to div with the nav__menu as a class
      nav.classList.toggle('show-menu')
    })
  }
}

showMenu('nav-toggle','nav-menu')

// remove menu mobile

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // when each nav__link is clicked, show-menu class is removed
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Scroll sections active linkAction

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.queryselector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

// Show Scroll Top

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

// Dark/Light Theme

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// Validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, ask what the issue was to know if dark is activated
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Reduce size and print on A4 sheet
function scaleCv(){
  document.body.classList.add('scale-cv')
}

//Remove the size when cv is downloaded

function removeScale(){
  document.body.classList.remove('scale-cv')
}

//Generate PDF
let areaCv = document.getElementById('area-cv')
//PDF Generated area
let resumeButton = document.getElementById('resume-button')

//html2pdf options
let opt = {
  margin: 0,
  filename: 'Resume_SamuWarinowski.pdf',
  image: {type: 'jpeg', quality: 0.98},
  html2canas: {scale: 4},
  jsPDF: { format: 'a4', orientation: 'portrait'}
}
//Function to call areaCv and HTML2PDF
function generateResume(){
  html2pdf(areaCv, opt)
}


resumeButton.addEventListener('click', () =>{
// 1. The class .scale-cv is added to body, where it reduces the size
  scaleCv()

  // 2. PDF is Generated
  generateResume()

  // 3. Remove .scale-cv class
  setTimeout(removeScale, 5000)
})
