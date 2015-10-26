$(document).ready(function () {

	$('#tweet-controls').hide();

	$('.tweet-compose').on('click', function () {
		$(this).css('height', '5em');
		$('#tweet-controls').show();
	});


	var maxCharacters = 140;

	$('#char-count').text(maxCharacters);

	$('.tweet-compose').on('keyup keydown', function() {
	    var count = $('#char-count');
	    var characters = $(this).val().length;

	    if (characters  > 129) {
	        count.css('color', 'red');
	    } else if (characters < 130) {
	    		count.css('color', '#999');
	    }

	    if (characters > 140) {
	    	$('button').prop('disabled', true);
	    } else {
	    	$('button').prop('disabled', false);
	    }

	    count.text(maxCharacters - characters);
	});

	$('#tweet-submit').on('click', function() {
		var firstTweet = $('.first-tweet');
		var newTweet = firstTweet.clone();

		firstTweet.removeClass('first-tweet');

		newTweet.find('.fullname').text('John Doe');
		newTweet.find('.avatar').prop('src', 'img/alagoon.jpg');
		newTweet.find('.username').text('@kgreen');
		var newText = $('.tweet-compose').val();
		newTweet.find('.tweet-text').text(newText);

		$('.tweet-compose').val("");
		$('#stream').prepend(newTweet);
	})





});