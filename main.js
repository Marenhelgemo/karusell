const nextButton = document.querySelector('.carousel__btn--right');
const prevButton = document.querySelector('.carousel__btn--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const imgCarousel = [
'img/prototype-folk.PNG',
'img/prototype2-folk.PNG',
'img/prototype3-folk.PNG',
];

const firstImage = 0;
const lastImage = imgCarousel.length -1;

let i = 0;
let time = 9000;

// Next button
nextButton.addEventListener('click', () => {
        i++;
        if (i >= lastImage) {
            i = 2;
        }
        //imageTag.src = imgCarousel[currentImage];
    });

// Previous button
prevButton.addEventListener('click', () => {
    i--;
    if(i <= firstImage){
    i = 0;
    }
   // imageTag.src = imgCarousel[currentImage];
});

// Automatic slideshow
function setImage() {
    document.getElementById("carousel-image").src = imgCarousel[i];
    if(i < imgCarousel.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("setImage()", time);
}

window.onload=setImage;