let nav = document.querySelector('nav');
let bar = document.querySelectorAll('.bar');
let slideMenu = document.querySelector('.slide-menu');


nav.addEventListener('click', function() {
    console.log('hello');
    slideMenu.classList.toggle('active');
    //span.classList.toggle('active');


    for (let i = 0; i < bar.length; i++) {
       bar[i].classList.toggle('active');
        
    }
})

//faqのところ
let big = document.querySelectorAll('.big');
let small = document.querySelectorAll('.small');

for (let i = 0; i < big.length; i++) {
    big[i].addEventListener('click', function() {

        console.log('hello');

        for (let j = 0; j < small.length; j++) {
           small[i].classList.toggle('click');
            
        }
    })
    
}