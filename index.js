"use strict";

let closureVariable = false;

function resizeWidthOnly(elem) {
  let pastSize = [window.innerWidth];

  window.addEventListener("resize", () => {
    let currentSize = window.innerWidth;
    let arrLength = pastSize.length;

    pastSize.push(currentSize);
    if (pastSize[arrLength] !== pastSize[arrLength - 1]) {
      if (pastSize.length === 100) {
        pastSize.splice(0, pastSize.length - 1);
      }
      clearTimeout(performance);
      performance = setTimeout(elem, 500);
    }
  });
}

resizeWidthOnly(function () {
  const setText = document.querySelector(".div-test__text");

  const text = setText.textContent;

  setText.textContent = "ничего нормально не работает";

  if (!closureVariable) {
    closureVariable = true;
    setTimeout(() => {
      setText.textContent = text;
      closureVariable = false;
    }, 1000);
  }
});
