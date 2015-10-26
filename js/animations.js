$(document).ready(function () {

	$('#tweet-controls').hide();

	$('.tweet-compose').on('click', function () {
		$(this).css('height', '5em');
		$('#tweet-controls').show();
	});

	// $('#tweet-submit').on('click', function () {
	// 	// $('.tweet-compose').css('height', '2.5em');
	// 	// // $('#tweet-controls').css('visibility', 'hidden');
	// 	var message = $('.tweet-compose').val();
	// 	$('#stream').prepend(message);
	// 	// $('.tweet').clone('#profile-summary').prepend('#stream');
	// });


	// $('.tweet-compose').on('keypress', function () {
	// 	var messageText = $(this).val().length;
	// 	var remainCount = $('#char-count') - messageText;
	// });
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
		var newTweet = $('.first-tweet').clone();
		newTweet.find('.fullname').text('John Doe');
		newTweet.find('.avatar').prop('src', 'img/alagoon.jpg');
		newTweet.find('.username').text('@kgreen');
		var newText = $('.tweet-compose').val();
		newTweet.find('.tweet-text').text(newText);
		$('#stream').prepend(newTweet);
	})





});