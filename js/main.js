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
	});

	const dest = document.querySelector(".destinations__title");
	dest.addEventListener('click', ()=>{
		dest.classList.toggle('larg');
	});
 });