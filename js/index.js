// находим чекбокс
  const raz = document.querySelector('#raz');
  
// находим фотки
const imgPowerOn = document.querySelector(`#text`);
const imgPowerOff = document.querySelector(`#img`);
// скрываем правый значек
imgPowerOff.style.display = `none`;

// добавляем обработчик событий! (отслеживаем клики)
document.addEventListener('click', (evt) => {
  // Если клик был мимо .header__head--nav, 
  if (!evt.target.closest('.header__head--nav')) {   
    // то скрываем меню
    raz.checked = false;
  }

  // Запускаем функцию проверки чекбокса
  checkedCheckbox();
});

// функцию проверки чекбокса
function checkedCheckbox() {
  // Если чекбокс = true
  if (raz.checked) {
    // то скрываем одну фоку показываем другую
    imgPowerOff.style.display = `block`;
    imgPowerOn.style.display = `none`;
    
  } else { // Если чекбокс = false

    // то скрываем одну фоку показываем другую
    imgPowerOff.style.display = `none`;
    imgPowerOn.style.display = `block`;
  }
}



// Скрипт slick (слайдер)
$(".slider-block").slick({
  dots: true,
	autoplay: false,
	infinite : false,
	arrows   : true,
	slidesToShow : 1,
  slidesToScroll : 1,

});





