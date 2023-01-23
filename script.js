/* ******************** Бургер-меню ******************** */

const hamburgermenu = document.querySelector('.hamburger-menu');
const headermenu = document.querySelector('.header__menu');
const body = document.querySelector('body');

hamburgermenu.addEventListener('click', function() {
    headermenu.classList.toggle('active');
    hamburgermenu.classList.toggle('active');
    body.classList.toggle('lock');
});

/* ******************** Выпадашка состава бургера ******************** */

const compositionicon = document.querySelectorAll('.product__composition-icon');
const compositionlist = document.querySelectorAll('.product__composition-list');
const compositionclose = document.querySelectorAll('.product__composition-close');

compositionicon.forEach(function(icon) {
    icon.addEventListener('click', function() {
        compositionlist.forEach(function(look) {
            look.classList.add('look');
        });
        icon.style.backgroundColor = '#e35028';
    });
});

compositionclose.forEach(function(close) {
    close.addEventListener('click', function() {
        compositionlist.forEach(function(look) {
            look.classList.remove('look');
        });
        compositionicon.forEach(function(icon) {
            icon.style.backgroundColor = '#f08c33';
        });
    });
});


/* ******************** Аккордеон ******************** */

const accoItem = document.querySelectorAll('.team-acco__item');
const trigger = document.querySelectorAll('.team-acco__trigger');

//Вариант 1 Подсказал Никита
// const list = document.querySelector('.team-acco__list');

// list.addEventListener('click', function (e) {
//     const target = e.target;
//     e.preventDefault();
    
//     if (target.classList.contains('team-acco__trigger')) {
//         const liItem = target.closest('li');
//         if (liItem.classList.contains('team-acco__item-active')) {
//             liItem.classList.remove('team-acco__item-active');
//         } else {
//             for (let li of accoItem) {
//                 li.classList.remove('team-acco__item-active');
//             }
//             liItem.classList.add('team-acco__item-active');
//         };
//     };
// });


//Вариант 2 Сделал сам
trigger.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        if (item.offsetParent.classList.contains('team-acco__item-active')) {
            item.offsetParent.classList.remove('team-acco__item-active');
        } else {
            accoItem.forEach(function (liItem) {
                liItem.classList.remove('team-acco__item-active');
            });
            item.offsetParent.classList.add('team-acco__item-active');
        };
        
    });
});

/* *********************** Слайдер ******************** */

const arrowPrev = document.querySelector('.product-slider__arrow--direction--previous');
const arrowNext = document.querySelector('.product-slider__arrow--direction--next');
const productList = document.querySelector('.products__list');
const productItem =  Array.from(productList.children);

productItem.forEach(function (slide, index) {
	// Скрываем все слайды, кроме первого
	if (index !== 0) slide.classList.add('hidden');

	// Добавляем индексы
	slide.dataset.index = index;

	// Добавляем data атрибут active для первого / активного слайда
	productItem[0].setAttribute('data-active', '');

	// // Клик по слайдам
	// slide.addEventListener('click', function () {
	// 	showNextSlide('next');
	// });
});

arrowNext.onclick = function (e) {
    e.preventDefault();
	console.log('Next Slide');
	showNextSlide('next');
};

arrowPrev.onclick = function (e) {
    e.preventDefault();
	console.log('Prev Slide');
	showNextSlide('prev');
};

function showNextSlide(direction) {
	// Скрываем текущий слайд
	const currentSlide = productList.querySelector('[data-active]');
	const currentSlideIndex = +currentSlide.dataset.index;
	currentSlide.classList.add('hidden');
	currentSlide.removeAttribute('data-active');

	// Рассчитываем след индекс в зависимости от направления движения
	let nextSlideIndex;
	if (direction === 'next') {
		nextSlideIndex = currentSlideIndex + 1 === productItem.length ? 0 : currentSlideIndex + 1;
	} else if (direction === 'prev') {
		nextSlideIndex = currentSlideIndex === 0 ? productItem.length - 1 : currentSlideIndex - 1;
	}

	// Показываем след слайд
	const nextSlide = productList.querySelector(`[data-index="${nextSlideIndex}"]`);
	nextSlide.classList.remove('hidden');
	nextSlide.setAttribute('data-active', '');
}


/* ******************** Горизонтальный аккордеон ***************** */

const menuItemTrigger = document.querySelectorAll('.menu__item-trigger');
const menuItem = document.querySelectorAll('.menu__item');

menuItemTrigger.forEach(function(item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        
        if (item.offsetParent.classList.contains('menu__item-active')) {
            item.offsetParent.classList.remove('menu__item-active');
        } else {
            menuItem.forEach(function(content) {
                content.classList.remove('menu__item-active');
            });
            item.offsetParent.classList.add('menu__item-active');
        };
    });
});



