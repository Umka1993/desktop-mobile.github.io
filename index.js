const raz = document.querySelector('#raz');
document.addEventListener('click', (evt) => {
    
    if (!evt.target.closest('.header__head--nav')) {   
         raz.checked = false;
    };
});

// Скрипт slick (слайдер)
$(".slider-block").slick({
  dots: true,
	autoplay: false,
	infinite : false,
	arrows   : true,
	slidesToShow : 1,
  slidesToScroll : 1,

});





