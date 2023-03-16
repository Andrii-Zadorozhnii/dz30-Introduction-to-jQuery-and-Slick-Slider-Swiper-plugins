let guitars = [{
        "picture": "./images/guitars/guitar-1.jpg",
        "name": "Hagstrom Alvar Limited Edition",
        "price": "€2.990,00",
        "inStock": true
    },
    {
        "picture": "./images/guitars/guitar-2.jpg",
        "name": "Hagstrom Tremar Viking Deluxe Cloudy Seas",
        "price": "€1.300.00",
        "inStock": true
    },
    {
        "picture": "./images/guitars/guitar-3.jpg",
        "name": "Gibson Les Paul Standard 60s",
        "price": "€3.749,00",
        "inStock": false
    },
    {
        "picture": "./images/guitars/guitar-4.jpg",
        "name": "Suhr Standard Plus Trans Blue Denim",
        "price": "€3.449,00",
        "inStock": true
    },
    {
        "picture": "./images/guitars/guitar-5.jpg",
        "name": "Fender Telecaster Black Paisley Limited Edition",
        "price": "€1.499,00",
        "inStock": true
    },
    {
        "picture": "./images/guitars/guitar-1.jpg",
        "name": "Hagstrom Alvar Limited Edition",
        "price": "€2.990,00",
        "inStock": true
    },
    {
        "picture": "./images/guitars/guitar-2.jpg",
        "name": "Hagstrom Tremar Viking Deluxe Cloudy Seas",
        "price": "€1.300.00",
        "inStock": true
    },
    {
        "picture": "./images/guitars/guitar-3.jpg",
        "name": "Gibson Les Paul Standard 60s",
        "price": "€3.749,00",
        "inStock": false
    },
    {
        "picture": "./images/guitars/guitar-4.jpg",
        "name": "Suhr Standard Plus Trans Blue Denim",
        "price": "€3.449,00",
        "inStock": true
    },
    {
        "picture": "./images/guitars/guitar-5.jpg",
        "name": "Fender Telecaster Black Paisley Limited Edition",
        "price": "€1.499,00",
        "inStock": true
    },
    {
        "picture": "./images/guitars/guitar-1.jpg",
        "name": "Hagstrom Alvar Limited Edition",
        "price": "€2.990,00",
        "inStock": true
    },
    {
        "picture": "./images/guitars/guitar-2.jpg",
        "name": "Hagstrom Tremar Viking Deluxe Cloudy Seas",
        "price": "€1.300.00",
        "inStock": true
    },
    {
        "picture": "./images/guitars/guitar-3.jpg",
        "name": "Gibson Les Paul Standard 60s",
        "price": "€3.749,00",
        "inStock": false
    },
    {
        "picture": "./images/guitars/guitar-4.jpg",
        "name": "Suhr Standard Plus Trans Blue Denim",
        "price": "€3.449,00",
        "inStock": true
    },
    {
        "picture": "./images/guitars/guitar-5.jpg",
        "name": "Fender Telecaster Black Paisley Limited Edition",
        "price": "€1.499,00",
        "inStock": true
    }
];

let guitarSlider = document.querySelector(".main__slider-guitar");

//header
let guitarHeader = document.createElement("h2");
guitarHeader.innerHTML = "new arrivals";

//main DIV
let swiperWindow = document.createElement("div");
swiperWindow.classList.add("swiper");

let swiperWrapper = document.createElement("div");
swiperWrapper.classList.add("swiper-wrapper");

let swiperButtonNext = document.createElement("div");
swiperButtonNext.classList.add("swiper-button-next");

let swiperButtonPrev = document.createElement("div");
swiperButtonPrev.classList.add("swiper-button-prev");

let newButton = document.createElement("button");
newButton.classList.add("new-button");
newButton.innerHTML = "view more";




// create element for slider
let swiperSlider;
let swiperSliderImage;
let swiperSliderName;
let swiperSliderPrice;
let swiperSliderInStock;

for (let i = 0; i < guitars.length; i++) {
    swiperSlider = document.createElement("div");
    swiperSlider.classList.add("swiper-slide");

    swiperSliderImage = document.createElement("img");
    swiperSliderImage.classList.add("swiper-slide-image");
    swiperSliderImage.src = guitars[i].picture;

    swiperSliderName = document.createElement("p");
    swiperSliderName.classList.add("swiper-slide-name");
    swiperSliderName.innerHTML = guitars[i].name;

    swiperSliderPrice = document.createElement("p");
    swiperSliderPrice.classList.add("swiper-slide-price");
    swiperSliderPrice.innerHTML = guitars[i].price;

    swiperSliderInStock = document.createElement("p");
    swiperSliderInStock.classList.add("swiper-slide-inStock");
    swiperSliderInStock.innerHTML = guitars[i].inStock ? "IN STOCK" : "SOLD";
    swiperSliderInStock.innerHTML = guitars[i].inStock ? "IN STOCK" : "SOLD";
    swiperSliderInStock.style.headekgroundColor = guitars[i].inStock ? "#F16A50" : "#F8F1EA";
    swiperSliderInStock.style.color = guitars[i].inStock ? "#F8F1EA" : "black";



    swiperSlider.appendChild(swiperSliderInStock)
    swiperSlider.appendChild(swiperSliderImage);
    swiperSlider.appendChild(swiperSliderName);
    swiperSlider.appendChild(swiperSliderPrice);
    swiperWrapper.appendChild(swiperSlider);

}

//Create slass for elements
guitarHeader.classList.add("main__slider-guitar_header");

// Append elements to DOM
guitarSlider.appendChild(guitarHeader);
guitarSlider.appendChild(swiperWindow);
guitarSlider.appendChild(newButton);
swiperWindow.appendChild(swiperWrapper);
swiperWindow.appendChild(swiperButtonPrev);
swiperWindow.appendChild(swiperButtonNext);


swiperButtonPrev.onclick = function () {
    console.log("prev");
}
swiperButtonNext.onclick = function () {
    console.log("next");
}


// Initialize swiper
let swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    direction: getDirection(),
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        }
    }
});

function getDirection() {
    let windowWidth = window.innerWidth;
    let direction = windowWidth <= 760 ? "vertical" : "horizontal";
    return direction;
}