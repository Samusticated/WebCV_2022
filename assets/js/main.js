const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  //Check if variable exist

  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      //Add show-menu to div with the nav__menu as a class
      nav.classlist.toggle('show-menu')
    })
  }
}

showMenu('nav-toggle', 'nav-menu')
