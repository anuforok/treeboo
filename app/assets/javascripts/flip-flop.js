// Author Ali Asghar
$(document).ready(function () {
	var height = $(document).height(); // returns height of browser viewport
	var width = $(document).width(); // returns width of browser viewport
	$("#container").css('height', height);
	$("#container").css('width', width);
	$('.flipper').append('<!--Start front--> <div class="front"><div class="drawcircle"></div></div> <!--End front--> ');
	$('.front').append('<div id="loading">loading ...</div>');
	$('#yellow-div').html('<!--clouds--><div class="cloud"> </div><div class="cloud2"></div><div class="cloud3"></div> <!--End second cloud-->');
	
});

/* onload window move clouds and flip twitter div */
$(window).load(function () {

	var width = $(document).width() - 415; // returns width of browser viewport
	setTimeout(function () {
		$('.flipper').transition({
			perspective: '100px',
			rotateY: '-180deg'
		}, 1000);

	}, 2000);
	function movecloud(firstCloud, time) {
		$(firstCloud).animate({
			opacity: 0.75,
			right: '+=' + width

		}, time, function () {
			// Animation complete.
			$(firstCloud).animate({
				opacity: 1,
				right: "-=" + width
			}, time);
			movecloud(firstCloud, time);
		});
	}
	function moveleftcloud(secondCloud,time) {
		$(secondCloud).animate({
			opacity: 0.75,
			left: '+=' + width
		}, time, function () {
			// Animation complete.
			$(secondCloud).animate({
				opacity: 1,
				left: "-=" + width
			}, time);
			moveleftcloud(secondCloud,time);
		});
	}
	movecloud('.cloud',30000);
	movecloud('.cloud2',40000);
	moveleftcloud('.cloud3',60000);
});