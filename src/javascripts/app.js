$(document).ready(function(){

	$(document).on('click', '.context-1', function(event) {
		$('body').toggleClass('zoomed-out');
	});

	$(document).on('click', '.context-2', function(event) {
		$('body').toggleClass('section-2');
		$('body').toggleClass('zoomed-out');
	});

	$(document).on('click', '.context-3', function(event) {
		$('body').toggleClass('section-3');
		$('body').toggleClass('zoomed-out');
	});

	$(document).on('click', '.context-4', function(event) {
		$('body').toggleClass('section-4');
		$('body').toggleClass('zoomed-out');
	});

	$(document).on('click', '.context-5', function(event) {
		$('body').toggleClass('section-5');
		$('body').toggleClass('zoomed-out');
	});

	$(document).on('click', '.btn-2', function(event) {
		$(this).addClass('active');
		$(this).siblings('a').removeClass('active');
		$('body').addClass('section-2');
		$('body').removeClass('zoomed-out');
		$('body').removeClass('section-1');
		$('body').removeClass('section-3');
	});

	$(document).on('click', '.btn-1', function(event) {
		$(this).addClass('active');
		$(this).siblings('a').removeClass('active');
		$('body').addClass('section-1');
		$('body').removeClass('zoomed-out');
		$('body').removeClass('section-2');
		$('body').removeClass('section-3');
	});

	$(document).on('click', '.btn-3', function(event) {
		$(this).addClass('active');
		$(this).siblings('a').removeClass('active');
		$('body').addClass('section-3');
		$('body').removeClass('zoomed-out');
		$('body').removeClass('section-1');
		$('body').removeClass('section-2');
	});

});
