$(document).ready(function () {
	$('body').on('keypress', '.tweet-compose', function () {
		$(this).css('height', '5em');
		$('#tweet-controls').css('visibility', 'visible');


	});

	$('body').on('click', '#tweet-submit', function () {
		$('.tweet-compose').css('height', '2.5em');
		$('#tweet-controls').css('visibility', 'hidden');
	});
	
	
	$('body').on('keypress', '.tweet-compose', function () {

		if (this.value.length > 140) {
			return false;
		}
		$("#char-count").html("Remaining characters : " + (140 - this.value.length));
	});


});