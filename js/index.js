console.log ('Select A Flavour!');

let venusButton = document.querySelector("#venus_button_index");
let mercuryButton = document.querySelector("#mercury_button_index");
let gaiaButton = document.querySelector("#gaia_button_index");
let marsButton = document.querySelector("#mars_button_index");
let jupiterButton = document.querySelector("#jupiter_button_index");
let saturnButton = document.querySelector("#saturn_button_index");
let uranusButton = document.querySelector("#uranus_button_index");
let neptuneButton = document.querySelector("#neptune_button_index");
let leavesButton = document.querySelector("#leaves");
let prohibitButton = document.querySelector("#prohibited");
let recycleButton = document.querySelector("#recycle");
// let firstBubble = document.querySelector("#slider_indicator");
// let secondBubble = document.querySelector("#slider_indicator2");
let arrows = document.querySelector(".arrows_info");
let arrows2 = document.querySelector(".arrows_info2");
let videoBox = document.querySelector("#information");
let charityBox = document.querySelector("#information2");

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

let info = [
    {
        text1 : 'Made with real fruit!',
        text2 : '100% natural flavour!',
    },

    {
        text1 : 'Peanut and nut free!',
        text2 : 'Gluten and fat free!',
    },

    {
        text1 : 'All Orbitz products are recyclable!',
        text2 : 'Refund where applicable.',
    },
]

function textChange() {
	let flavourBeverage = this.dataset.member;

	document.querySelector('.flavour_name').textContent = flavours[flavourBeverage].flavour;
	document.querySelector('.flavour_description').textContent = flavours[flavourBeverage].description;
	document.querySelector('.flavour_planet').textContent = flavours[flavourBeverage].planet;
}

function venusChange() {
	var venusImage = document.getElementById("flavour_index_current");
	venusImage.src = "images/venus_index.png";

	var title = document.querySelector(".flavour_name");
	title.style.textShadow = '2px 2px #FFB62A';

    var boxShadow = document.querySelector("#flavours_text");
    boxShadow.style.boxShadow = '10px 10px #FFB62A';
}

function mercuryChange() {
	var mercuryImage = document.getElementById("flavour_index_current");
	mercuryImage.src = "images/mercury_index.png";

	var title = document.querySelector(".flavour_name");
	title.style.textShadow = '2px 2px #FF317A'

    var boxShadow = document.querySelector("#flavours_text");
    boxShadow.style.boxShadow = '10px 10px #FF317A';

}

function gaiaChange() {
	var gaiaImage = document.getElementById("flavour_index_current");
	gaiaImage.src = "images/gaia_index.png";

	var title = document.querySelector(".flavour_name");
	title.style.textShadow = '2px 2px #31AC28';

    var boxShadow = document.querySelector("#flavours_text");
    boxShadow.style.boxShadow = '10px 10px #31AC28';
}

function marsChange() {
	var marsImage = document.getElementById("flavour_index_current");
	marsImage.src = "images/mars_index.png";

	var title = document.querySelector(".flavour_name");
	title.style.textShadow = '2px 2px #D22222';

    var boxShadow = document.querySelector("#flavours_text");
    boxShadow.style.boxShadow = '10px 10px #D22222';
}

function jupiterChange() {
	var jupiterImage = document.getElementById("flavour_index_current");
	jupiterImage.src = "images/jupiter_index.png";

	var title = document.querySelector(".flavour_name");
	title.style.textShadow = '2px 2px #AC27B8';

    var boxShadow = document.querySelector("#flavours_text");
    boxShadow.style.boxShadow = '10px 10px #AC27B8';
}

function saturnChange() {
	var saturnImage = document.getElementById("flavour_index_current");
	saturnImage.src = "images/saturn_index.png";

	var title = document.querySelector(".flavour_name");
	title.style.textShadow = '2px 2px #8A28C8';

    var boxShadow = document.querySelector("#flavours_text");
    boxShadow.style.boxShadow = '10px 10px #8A28C8';
}

function uranusChange() {
	var uranusImage = document.getElementById("flavour_index_current");
	uranusImage.src = "images/uranus_index.png";

	var title = document.querySelector(".flavour_name");
	title.style.textShadow = '2px 2px #E0DE2B';

    var boxShadow = document.querySelector("#flavours_text");
    boxShadow.style.boxShadow = '10px 10px #E0DE2B';
}

function neptuneChange() {
	var neptuneImage = document.getElementById("flavour_index_current");
	neptuneImage.src = "images/neptune_index.png";

	var title = document.querySelector(".flavour_name");
	title.style.textShadow = '2px 2px #414AFF';

    var boxShadow = document.querySelector("#flavours_text");
    boxShadow.style.boxShadow = '10px 10px #414AFF';
}

function infoDisplay() {
    let infoText = this.dataset.member

    document.querySelector('.info_1').textContent = info[infoText].text1;
    document.querySelector('.info_2').textContent = info[infoText].text2;
}

function displayChange() {
    videoBox.classList.toggle("infoinactive");
    charityBox.classList.toggle("infoinactive");
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
leavesButton.addEventListener("click", infoDisplay);
prohibitButton.addEventListener("click", infoDisplay);
recycleButton.addEventListener("click", infoDisplay);
arrows.addEventListener("click", displayChange);
arrows2.addEventListener("click", displayChange)
// firstBubble.addEventListener("click", displayChange);
// secondBubble.addEventListener("click", displayChange);