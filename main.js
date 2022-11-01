document.addEventListener('DOMContentLoaded', ()=>{
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true,
        noWrap: false
    });
})

function addClass() {
    document.body.classList.add("sent");
}

sendLetter.addEventListener("click", addClass);