$(document).ready(function(){

	const owl = $('.owl-carousel');
	owl.owlCarousel({
		center: true,
		loop:true,
		margin: 30,
		startPosition: 1,
		items: 3,
	});
	$('.slider__btn--next').click(function() {
		owl.trigger('next.owl.carousel');
	})
	$('.slider__btn--prev').click(function() {
		owl.trigger('prev.owl.carousel', [300]);
	})

	const logo = document.querySelector(".header__title");
	logo.addEventListener('click', ()=>{
		logo.classList.toogle('larg');
	})
 });