//On cible les élément qui sont concerné 

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');


//Les Boutons

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');



//La reposition des images Horizontalement. tranform() permet d'éditer un élement css et translateX() repositionne horizontalement les images
let count = 1;
const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = 'translateX(' +(-size * count) + 'px)';

//Les événement. On cible les boutons qui agiront sur le slideshow. ils désignent le changement d'images

nextBtn.addEventListener('click',function(){
    if (count >= carouselImages.length -1) return;
    //Une animation pour que ça soit pas trop sec
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    //On avance d'une photo
    count++;
    //Test : console.log(count);
    carouselSlide.style.transform = 'translateX(' +(-size * count) + 'px)';
});

prevBtn.addEventListener('click',function(){
    if (count <= 0) return;
    //Une animation pour que ça soit pas trop sec
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    //On recule d'une photo
    count--;
    //Test : console.log(count);
    carouselSlide.style.transform = 'translateX(' +(-size * count) + 'px)';
});

//Mouvement Infini
carouselSlide.addEventListener('transitionend', function(){
    if (carouselImages[count].id === 'LastClone'){
        carouselSlide.style.transition = 'none';
        count = carouselImages.length -2;
        //mouvement
        carouselSlide.style.transform = 'translateX(' +(-size * count) + 'px)';
    }

    if (carouselImages[count].id === 'FirstClone'){
        carouselSlide.style.transition = 'none';
        count = carouselImages.length - count;
        //mouvement
        carouselSlide.style.transform = 'translateX(' +(-size * count) + 'px)';
    }

});
