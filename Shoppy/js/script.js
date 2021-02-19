function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});
$(function () {

	var header = $(".to-top"),
		introH = $(".to-top__on").innerHeight(),
		scrollOffset = $(window);

	checkScroll(scrollOffset);

	$(window).on("scroll", function () {
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);


	});
	function checkScroll(scrollOffset) {
		if (scrollOffset >= introH) {
			header.addClass("to-top--active");
		} else {
			header.removeClass("to-top--active")
		}
	}
	//var initSlider = $('.card-slider__nav').slick('setPosition');

	$('.card-slider__nav').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: false,
		//adaptiveHeight: true,
		infinite: true,
		//useTransform: true,
		speed: 400,
		vertical: true,
		verticalSwiping: true,
		cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
		nextArrow: '<button class="slick-next slick-arrow"><img src="img/arrow-left.svg" alt=""></button>',
		prevArrow: '<button class="slick-prev slick-arrow"><img src="img/arrow-right.svg" alt=""></button>',
		responsive: [{
			breakpoint: 979,
			settings: {

				arrows: false
			}
		}, {
			breakpoint: 351,
			settings: {
				arrows: false,
				dots: true,
				verticalSwiping: false,
				swipe: true,


			}

		}]
	});

	$('.card-slider__big').on('init', function (event, slick) {
		$('.card-slider__big .slick-slide.slick-current').addClass('is-active');
	})
		.slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
			focusOnSelect: false,
			infinite: false,
			//responsive: [{
			//	breakpoint: 1024,
			//	settings: {

			//		slidesToScroll: 5,
			//	}
			//}, {
			//	breakpoint: 640,
			//	settings: {
			//		slidesToShow: 4,
			//		slidesToScroll: 4,
			//	}
			//}, {
			//	breakpoint: 420,
			//	settings: {
			//		slidesToShow: 3,
			//		slidesToScroll: 3,
			//	}
			//}]
		});

	$('.card-slider__nav').on('afterChange', function (event, slick, currentSlide) {
		$('.card-slider__big').slick('slickGoTo', currentSlide);
		var currrentNavSlideElem = '.card-slider__big .slick-slide[data-slick-index="' + currentSlide + '"]';
		$('.card-slider__big .slick-slide.is-active').removeClass('is-active');
		$(currrentNavSlideElem).addClass('is-active');
	});

	$('.card-slider__big').on('click', '.slick-slide', function (event) {
		event.preventDefault();
		var goToSingleSlide = $(this).data('slick-index');

		$('.card-slider__nav').slick('slickGoTo', goToSingleSlide);
	});








	$('.hero__slider').slick({
		dots: true,
		arrows: false,
		//autoplay: true,
		//autoplaySpeed: 1500,
	});



	$('.tab').on('click', function (e) {
		e.preventDefault(); //выключает ссылку
		$($(this).siblings()).removeClass('tab--active');
		$($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

		$(this).addClass('tab--active');
		$($(this).attr('href')).addClass('tabs-content--active');
	});

});
$('.product__item-favorite').on('click', function () {
	$(this).toggleClass('product__item-favorite--active');
})
$('.header-burger').on('click', function () {
	$('.header-burger').toggleClass('header-burger--active');
	//$('body').toggleClass('lock');
	$('.menu-list').toggleClass('menu-list--active');
});


$('.drop__mobile').on('click', function () {
	$(this).toggleClass('drop__mobile--active');
	$(this).next().slideToggle('200');
});

$('.drop__content').hide();
$('.drop').on('click', function () {
	$(this).toggleClass('drop--active');
	$(this).next().slideToggle('200').toggleClass('drop__content--active');
});
$('.drop-all').on('click', function () {
	$('.drop').removeClass('drop--active');
	$('.drop__content').removeClass('drop__content--active');
	$('.drop__content').hide('200');
});

$('.choice-grid__btn--three').on('click', function () {
	if ($(this)) {
		$('.choice-grid__btn').removeClass('choice-grid__btn--active');
		$(this).addClass('choice-grid__btn--active');
		$('.product__item').removeClass('product__item--four');
		$('.product__item').removeClass('product__item--five');
		$('.product__item').addClass('product__item--three');
	}
});
$('.choice-grid__btn--four').on('click', function () {
	if ($(this)) {
		$('.choice-grid__btn').removeClass('choice-grid__btn--active');
		$(this).addClass('choice-grid__btn--active');
		$('.product__item').removeClass('product__item--five');
		$('.product__item').removeClass('product__item--three');
		$('.product__item').addClass('product__item--four');
	}
});
$('.choice-grid__btn--five').on('click', function () {
	if ($(this)) {
		$('.choice-grid__btn').removeClass('choice-grid__btn--active');
		$(this).addClass('choice-grid__btn--active');
		$('.product__item').removeClass('product__item--three');
		$('.product__item').removeClass('product__item--four');
		$('.product__item').addClass('product__item--five');
	}
});
$('.first-slider').slick({
	arrows: true,
	dots: true,
	prevArrow: '<button class="first-slider__btn first-slider__btn-prev"><img src="img/arrow-left.svg" alt=""></button>',
	nextArrow: '<button class="first-slider__btn first-slider__btn-next"><img src="img/arrow-right.svg" alt=""></button>',
	responsive: [
		{
			breakpoint: 800,
			settings: {
				arrows: false,
			}
		}
	]
});
$('.similar-slider').slick({
	arrows: false,
	dots: true,
	slidesToShow: 4,
	slidesToScroll: 4,
	responsive: [
		{
			breakpoint: 700,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		}, {
			breakpoint: 500,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		}, {
			breakpoint: 400,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
	]
});
//$('.catalog-filter').hide();
$('.catalog-inner__show-btn').on('click', function () {
	$(this).toggleClass('catalog-inner__show-btn--active');
	$('.catalog-filter').slideToggle('200');

});


$("#rateYo").rateYo({

	ratedFill: "#03d607",
	normalFill: "#cccccc"
});

$('.color-select__btn').on('click', function () {
	if ($(this)) {
		$('.color-select__btn').removeClass('color-select__btn--active');
		$(this).addClass('color-select__btn--active');
		dataColor = $(this).attr('data-color');
		$('.color-select__selected-color').text(dataColor);
	}

});


$('.size-select__btn').on('click', function () {

	$(this).addClass('size-select__btn--active');

	if ($(this).hasClass('size-select__btn--active')) {
		dataSize = $(this).attr('data-size');
		$('.size-select__selected-size').append(dataSize + ' ');
	}

});

$('.size-select__btn').dblclick(function () {
	$(this).removeClass('size-select__btn--active');
	if ($('.size-select__selected-size').hasAttr(dataSize)) {


	}
});
$('.tab').on('click', function (e) {
	e.preventDefault(); //выключает ссылку
	$($(this).siblings()).removeClass('tab--active');
	$($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

	$(this).addClass('tab--active');
	$($(this).attr('href')).addClass('tabs-content--active');
});



function slowScroll(id) {
	var offset = 0;
	$('html, body').animate({
		scrollTop: $(id).offset().top - offset
	}, 900);
	return false;
}