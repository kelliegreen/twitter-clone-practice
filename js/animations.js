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

		if (this.value.length > 139) {
			return false;
		}
		$("#char-count").html("Remaining characters : " + (139 - this.value.length));
	});

	$('body').on('keypress', '.tweet-compose', function() {
		if (this.value.length <= 128) {
			return true;
		}
		$('#char-count').css('color', 'red');
	});
});