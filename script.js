const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

if (counter && incrementBtn) {
  incrementBtn.addEventListener("click", () => {
    const currentValue = Number(counter.innerText);
    alert(currentValue); 
    counter.innerText = currentValue + 1;
  });
}
