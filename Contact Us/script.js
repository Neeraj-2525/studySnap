window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("header").style.padding = "10px 100px";
    document.getElementById("header").style.boxShadow =
      "rgba(0,0,0,0.2) 0px 2px 18px -5px";
  } else {
    document.getElementById("header").style.padding = "20px 100px";
    document.getElementById("header").style.boxShadow = "none";
  }
}

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
