const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlide= 0;
const banner = document.querySelector("#banner");
const bannerImage = banner.children.item(0);
const bannerTagLine = banner.children.item(1);

document.querySelector(".arrow_left").addEventListener("click", function () {
	bannerImage.src = "./assets/images/slideshow/" + slides[currentSlide].image ;
	bannerTagLine.innerHTML = slides[currentSlide].tagLine ;
	currentSlide-- ;
	if (currentSlide < 0) {
		currentSlide = slides.length -1;
	}
	bullet(currentSlide);
});

document.querySelector(".arrow_right").addEventListener("click", function () {
	bannerImage.src = "./assets/images/slideshow/" + slides[currentSlide].image ;
	bannerTagLine.innerHTML = slides[currentSlide].tagLine ;	
	currentSlide++ ;
	if (currentSlide >= slides.length) {
		currentSlide = 0;
	}
	bullet(currentSlide);
});


const dotContainer = document.querySelector('#js-dots');
const taille = slides.length - 1;

for (let i = 0; i <= taille; i++) {
	const newDot = document.createElement('span');
	newDot.classList.add('dot');
	dotContainer.appendChild(newDot);
};

const dots = document.querySelectorAll(".dot");

function bullet(current) {
    dots.forEach((item, index) => {
        if (index === current) {
          item.classList.add('dot_selected');
        } else {
          item.classList.remove('dot_selected');
        }
    });
}

bullet(currentSlide);
console.log(banner.children)