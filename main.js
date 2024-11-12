import "./style.css";
import { setupCounter } from "./counter.js";

var topExpanded = false;
var topMiddleExpanded = false;
var botomMiddleExpanded = false;
var bottomExpanded = false;

document.getElementById("iceberg-top").addEventListener("click", function () {
  console.log("expanding");
  var topMiddleText = document.getElementById("iceberg-top-text");
  topMiddleText.classList.toggle("expanded");
});

document
  .getElementById("iceberg-top-middle")
  .addEventListener("click", function () {
    console.log("expanding");
    var topMiddleText = document.getElementById("iceberg-top-middle-text");
    topMiddleText.classList.toggle("expanded");
  });

document
  .getElementById("iceberg-bottom-middle")
  .addEventListener("click", function () {
    console.log("expanding");
    var topMiddleText = document.getElementById("iceberg-bottom-middle-text");
    topMiddleText.classList.toggle("expanded");
  });

document
  .getElementById("iceberg-bottom")
  .addEventListener("click", function () {
    console.log("expanding");
    var topMiddleText = document.getElementById("iceberg-bottom-text");
    topMiddleText.classList.toggle("expanded");
  });

setupCounter(document.querySelector("#counter"));
