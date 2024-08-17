const swiper = new Swiper('.swiper', {
	loop: true,
	slidesPerView: 1.5,
	centeredSlides: true,
	
	autoplay: {
		delay: 4000,
		disableOnInteraction: true,
	},
	keyboard:{
		enabled: true,
		onlyInViewport: true,

	},
	speed: 800,
	slideShadows: true,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
})

