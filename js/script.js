window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.querySelector("nav").style.height="70px"
    document.querySelector("nav").style.boxShadow ="0px 8px 16px 0px #00000033"
  } else {
    document.querySelector("nav").style.height="150px"
    document.querySelector("nav").style.boxShadow ="none"
  }
}