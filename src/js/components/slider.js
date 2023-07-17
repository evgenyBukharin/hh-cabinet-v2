import Swiper, { Navigation, Pagination, Thumbs } from "swiper";
Swiper.use([Navigation, Pagination, Thumbs]);

// задаем общее количество слайдов
const allItemsSpan = document.querySelector(".hero__text-all-value");
allItemsSpan.innerHTML = document.querySelectorAll(".hero__row").length;

// функционал кнопки для последней страницы
const slides = document.querySelectorAll(".swiper-slide");
const lastButton = document.querySelector(".hero__button-last");
lastButton.addEventListener("click", () => {
	slider.slideTo(slides.length - 1, 1000);
});

const bulletsSlider = new Swiper(document.querySelector(".hero__slider-pagination"), {
	slidesPerView: 3,
	speed: 600,
	spaceBetween: 26,
	clickable: true,
	centeredSlides: true,
	navigation: {
		nextEl: ".hero__button-next",
		prevEl: ".hero__button-prev",
	},
});

const slider = new Swiper(document.querySelector(".hero__body"), {
	slidesPerView: 1,
	speed: 600,
	pagination: {
		el: ".hero__pagination",
		clickable: true,
		bulletActiveClass: "hero__bullet-active",
		renderBullet: function (index, className) {
			return `<span class="hero__bullet swiper-slide ${className}">${index + 1}</span>`;
		},
	},
	navigation: {
		nextEl: ".hero__button-next",
		prevEl: ".hero__button-prev",
	},
	thumbs: {
		swiper: bulletsSlider,
	},
});
