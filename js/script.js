let optionsAreShown = false;

window.onload = function () {
    const mobileMenuDropdown = document.getElementById("mobileMenuDropdown");
    const options = document.getElementById("options");
    
    const icons = document.getElementById("icons");
    const description = document.getElementById("description");
    const features = document.getElementById("features");
    const screens = document.getElementById("screens");



    const linkDescription = document.getElementById("linkDescription");
    const linkFeatures = document.getElementById("linkFeatures");
    const linkScreens = document.getElementById("linkScreens");
    
    
    mobileMenuDropdown.addEventListener("click", () => {toggleMobileMenu()});
};

window.onscroll = function() {scrollFunction()}

window.onresize = function(){resizeFunction()}

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.querySelector("nav").style.height="70px";
    document.querySelector("nav").style.boxShadow ="0px 8px 16px 0px #00000033";
    if(window.innerWidth < 768){
      options.style.display='none';
      optionsAreShown=false;
    }else{
      options.style.display='flex';
      optionsAreShown=true;
    }
  } else {
    document.querySelector("nav").style.height="150px";
    document.querySelector("nav").style.boxShadow ="none";
  }

  const menuOptions = document.getElementsByClassName("menuOptions");
  if(window.scrollY > (icons.offsetTop + icons.offsetHeight) && window.scrollY < (description.offsetTop + description.offsetHeight)){
    linkFeatures.classList.remove('active')
    linkScreens.classList.remove('active')
    menuOptions[0].className += ' active';
  }else if(window.scrollY > (description.offsetTop + description.offsetHeight) && window.scrollY < (features.offsetTop + features.offsetHeight)){
    linkScreens.classList.remove('active')
    linkDescription.classList.remove('active')
    menuOptions[1].className += ' active';
  }else if(window.scrollY > (features.offsetTop + features.offsetHeight) && window.scrollY < (screens.offsetTop + screens.offsetHeight)){
    linkDescription.classList.remove('active')
    linkFeatures.classList.remove('active')
    menuOptions[2].className += ' active';
  }else{
    menuOptions.className.remove('active')
  }

}

function resizeFunction(){
  if(window.innerWidth>767){
      options.style.display='flex';
      optionsAreShown=true;
      options.style.animation='none';
      options.style.marginTop='0px';
  }else{
      options.style.display='none';
      optionsAreShown=false;
  }
}

function toggleMobileMenu(){
    if(optionsAreShown){
      options.style.display='none';
      optionsAreShown=false
    }else if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
      options.style.display='flex';
      options.style.animation='mobileMenuDropdown 0.7s ease-in-out';
      options.style.marginTop='50px';
      optionsAreShown=true;
    }else{
      options.style.display='flex';
      options.style.animation='mobileMenuDropdown 0.7s ease-in-out';
      options.style.marginTop='50px';
      optionsAreShown=true;
    }
}
