console.log ('Ready to select a flavour or product?');

let venusButton = document.querySelector("#venus_button");
let mercuryButton = document.querySelector("#mercury_button");
let gaiaButton = document.querySelector("#gaia_button");
let marsButton = document.querySelector("#mars_button");
let jupiterButton = document.querySelector("#jupiter_button");
let saturnButton = document.querySelector("#saturn_button");
let uranusButton = document.querySelector("#uranus_button");
let neptuneButton = document.querySelector("#neptune_button");
let singleButton = document.querySelector("#bottle_button");
let caseButton = document.querySelector("#case_button");
let partyButton = document.querySelector("#party_button");
let baggedButton = document.querySelector("#bagged_button");

let flavours = [
	{
		flavour : 'Vanilla Orange',
		description : 'A delicious blend of citrusy orange mixed with the smoothness of vanilla!',
		planet : 'Planet Association: Venus'
	},

	{
		flavour : 'Apple Pear Mango',
		description : 'A sweet blend of apples, pears, and mangos for this fruity delight!',
		planet : 'Planet Association: Mercury',
	},

	{
		flavour : 'Lemon Lime Peach',
		description : 'A sweet, citrusy taste with the sweetness enhanced by fresh peaches!',
		planet : 'Planet Association: Earth',
	},

	{
		flavour : 'Raspberry Citrus',
		description : 'The fresh, sweet taste of raspberries mixed with a refreshing citrus flavour!',
		planet : 'Planet Association: Mars',
	},

	{
		flavour : 'Plum Pomegranate Watermelon',
		description : 'A sweet burst combining fresh plums, pomegranates, and watermelons!',
		planet : 'Planet Association: Jupiter',
	},

	{
		flavour : 'Strawberry Grape',
		description : 'A classic and delicious combination of fresh grapes and fresh strawberries!',
		planet : 'Planet Association: Saturn',
	},

	{
		flavour : 'Pineapple Banana Cherry Coconut',
		description : 'Tangy, sweet, tarty, and smooth combine for this bold and delicious beverage!',
		planet : 'Planet Association: Uranus',
	},

	{
		flavour : 'Black Currant Berry',
		description : 'A refreshing beverage featuring the sweet taste of black currant berries!',
		planet : 'Planet Association: Neptune',
	},
	
]

let product = [
    {
        text : 'A single bottle of any of our thirst-quenching drinks. Available at vending machines and checkout lanes everywhere!'
    },

    {
        text : 'A case containing six bottles of a single flavour of any of our delicious drinks! Perfect for those who prefer to stick with what they love!'
    },

    {
        text : 'A special deal for those who love variety or wish to share with others; 8 bottles for the price of 6! Every flavour is included in this special bundle!'
    },

    {
        text : 'A Canadian classic! Our sweet and fruity drinks come in environmental friendly bags! Each bag comes with 6 little bags of one of delicious flavours. Exclusive to grocery stores and online purchases.'
    }
]

function textChange() {
	let flavourBeverage = this.dataset.member;

	document.querySelector('.flavour_name').textContent = flavours[flavourBeverage].flavour;
	document.querySelector('.flavour_description').textContent = flavours[flavourBeverage].description;
	document.querySelector('.flavour_planet').textContent = flavours[flavourBeverage].planet;
}

function protextChange() {
    let textDescription = this.dataset.member;

    document.querySelector('#product_text').textContent = product[textDescription].text;
}

function venusChange() {
	var venusImage = document.getElementById("current_bottle");
	venusImage.src = "images/venus_product.png";

	var title = document.querySelector(".flavour_name");
	title.style.textShadow = '2px 2px #FFB62A'
}

function mercuryChange() {
	var mercuryImage = document.getElementById("current_bottle");
	mercuryImage.src = "images/mercury_product.png";

	var title = document.querySelector(".flavour_name");
	title.style.textShadow = '2px 2px #FF317A'
}

function gaiaChange() {
	var gaiaImage = document.getElementById("current_bottle");
	gaiaImage.src = "images/gaia_product.png";

	var title = document.querySelector(".flavour_name");
	title.style.textShadow = '2px 2px #31AC28'

}

function marsChange() {
	var marsImage = document.getElementById("current_bottle");
	marsImage.src = "images/mars_product.png";

	var title = document.querySelector(".flavour_name");
	title.style.textShadow = '2px 2px #D22222'
}

function jupiterChange() {
	var jupiterImage = document.getElementById("current_bottle");
	jupiterImage.src = "images/jupiter_product.png";

	var title = document.querySelector(".flavour_name");
	title.style.textShadow = '2px 2px #AC27B8'
}

function saturnChange() {
	var saturnImage = document.getElementById("current_bottle");
	saturnImage.src = "images/saturn_product.png";

	var title = document.querySelector(".flavour_name");
	title.style.textShadow = '2px 2px #8A28C8'
}

function uranusChange() {
	var uranusImage = document.getElementById("current_bottle");
	uranusImage.src = "images/uranus_product.png";

	var title = document.querySelector(".flavour_name");
	title.style.textShadow = '2px 2px #E0DE2B'
}

function neptuneChange() {
	var neptuneImage = document.getElementById("current_bottle");
	neptuneImage.src = "images/neptune_product.png";

	var title = document.querySelector(".flavour_name");
	title.style.textShadow = '2px 2px #414AFF'
}

function singleChange() {
    var singleImage = document.getElementById("current_product");
    singleImage.src = "images/five_bottles.png";
}

function caseChange() {
    var caseImage = document.getElementById("current_product");
    caseImage.src = "images/6_pack.png";
}

function partyChange() {
    var partyImage = document.getElementById("current_product");
    partyImage.src = "images/8_pack.png";
}

function baggedChange() {
    var partyImage = document.getElementById("current_product");
    partyImage.src = "images/bagged.png";
}

venusButton.addEventListener("click", textChange);
venusButton.addEventListener("click", venusChange);
mercuryButton.addEventListener("click", textChange);
mercuryButton.addEventListener("click", mercuryChange);
gaiaButton.addEventListener("click", textChange);
gaiaButton.addEventListener("click", gaiaChange);
marsButton.addEventListener("click", textChange);
marsButton.addEventListener("click", marsChange);
jupiterButton.addEventListener("click", textChange);
jupiterButton.addEventListener("click", jupiterChange);
saturnButton.addEventListener("click", textChange);
saturnButton.addEventListener("click", saturnChange);
uranusButton.addEventListener("click", textChange);
uranusButton.addEventListener("click", uranusChange);
neptuneButton.addEventListener("click", textChange);
neptuneButton.addEventListener("click", neptuneChange);
singleButton.addEventListener("click", protextChange);
singleButton.addEventListener("click", singleChange);
caseButton.addEventListener("click", protextChange);
caseButton.addEventListener("click", caseChange);
partyButton.addEventListener("click", protextChange);
partyButton.addEventListener("click", partyChange);
baggedButton.addEventListener("click", protextChange);
baggedButton.addEventListener("click", baggedChange);