"use strict";

const button = document.querySelector("#opener");
const main = document.querySelector("#main");

button.addEventListener("click", function () {
  console.log("버튼클릭햇음");
  main.style.transform = "translateX(0px)";
});
