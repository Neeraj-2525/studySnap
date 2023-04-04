window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("header").style.padding = "10px 100px";
    document.getElementById("header").style.boxShadow = "rgba(0,0,0,0.2) 0px 2px 18px -5px";
  } 

  else {
    document.getElementById("header").style.padding = "20px 100px";
    document.getElementById("header").style.boxShadow = "rgba(0,0,0,0.1) 0px 2px 18px -5px";
  }
}