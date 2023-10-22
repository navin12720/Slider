document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".wrapper");
  const indic = [...document.querySelectorAll(".indicators button")];
  let currenti = 0;
  indic.forEach((button, index) => {
    button.addEventListener("click", () => {
      indic[currenti].classList.remove("active");
      wrapper.style.marginLeft = `-${100 * index}%`;
      button.classList.add("active");
      currenti = index;
    });
  });
});
