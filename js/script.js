let optionsAreShown = false;

window.onload = function () {
    const mobileMenuDropdown = document.getElementById("mobileMenuDropdown");
    const options = document.getElementById("options");
    
    mobileMenuDropdown.addEventListener("click", () => {
        toggleMobileMenu()
    });
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
