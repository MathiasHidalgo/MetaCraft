(function(){

    const sliders = [...document.querySelectorAll('.members_body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    })

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    })

    const changePosition = (add)=>{
        const currentMember = document.querySelector('.members_body--show').dataset.id;
        value = Number(currentMember);
        value+= add;


        sliders[Number(currentMember)-1].classList.remove('members_body--show');
        if(value === sliders.length+1 || value ===   0) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('members_body--show');
    }

})();

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle('down', window.scrollY > 0);

    var logo = document.querySelector('.brand img');
    if(window.scrollY > 0){
        logo.setAttribute('src', 'img/RackLogoNegro.png')
    }else {
        logo.setAttribute('src', 'img/RacksLogoWhite.png')
    }
});

var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", function(){
    menu.classList.add('active');
})

closeBtn.addEventListener("click", function(){
    menu.classList.remove('active');
})





