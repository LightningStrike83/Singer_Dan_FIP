console.log ('Send your tastebuds into orbit!');

let button = document.querySelector("#burger_button");
let burgerCon = document.querySelector("#burger_con");

function hamburgerMenu() {
	burgerCon.classList.toggle("display");
};

button.addEventListener("click", hamburgerMenu);








