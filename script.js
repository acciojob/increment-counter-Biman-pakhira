document.addEventListener("DOMContentLoaded", () => {
  const counter = document.querySelector("#counter");
  const incrementBtn = document.querySelector("#incrementBtn");

  incrementBtn.addEventListener("click", () => {
    let currentValue = Number(counter.innerText);
    alert(currentValue);       
  });
});
