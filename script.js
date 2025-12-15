//your JS code here. If required.
const incre = document.querySelector("#counter");
const incrbtn = document.querySelector("#increment");
incrbtn.addEventListener("click", ()=>{
	let currentValue= Number(incre.innerHTML);
	alert(currentValue);
	incre.innerText = currentValue+1;
})