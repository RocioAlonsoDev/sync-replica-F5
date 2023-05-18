window.onload = function () {
    const mobileMenuDropdown = document.querySelector("#mobileMenuDropdown");
    mobileMenuDropdown.addEventListener("click", () => {
        toggleMobileMenu()
    });
    
};

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.querySelector("nav").style.height="70px";
    document.querySelector("nav").style.boxShadow ="0px 8px 16px 0px #00000033";
    document.querySelector("main").style.paddingTop = "70px";
  } else {
    document.querySelector("nav").style.height="150px";
    document.querySelector("nav").style.boxShadow ="none";
    document.querySelector("main").style.paddingTop = "130px";
  }
}

function toggleMobileMenu(){
    let options = document.getElementById("options");
    if(options.style.display === 'none'){
        console.log("hello")
    }
}
