$(function () {
	var $mwo = $('.marquee-with-options');
	$('.marquee').marquee();
	$('.marquee-with-options').marquee({
		//speed in milliseconds of the marquee
		speed: 2000,
		//gap in pixels between the tickers
		gap: 0,
		//gap in pixels between the tickers
		delayBeforeStart: 0,
		//'left' or 'right'
		direction: 'left',
		//true or false - should the marquee be duplicated to show an effect of continues flow
		duplicated: true,
		//on hover pause the marquee - using jQuery plugin https://github.com/tobia/Pause
		pauseOnHover: true
	});

	//Direction upward
	$('.marquee-vert').marquee({
		direction: 'up',
		speed: 1500
	});

	//pause and resume links
	$('.pause').click(function (e) {
		e.preventDefault();
		$mwo.trigger('pause');
	});
	$('.resume').click(function (e) {
		e.preventDefault();
		$mwo.trigger('resume');
	});
	//toggle
	$('.toggle').hover(function (e) {
		$mwo.trigger('pause');
	}, function () {
		$mwo.trigger('resume');
	})
	.click(function (e) {
		e.preventDefault();
	});


	$('.on-hover').hover(
		function () {
			var that = $(this);
			displayBoard(true, that)
		},
		function () {
			displayBoard(false)
		}
	);

	function displayBoard(isHovered, _that) {

		var $tspans = $('tspan');

		if (isHovered) {

			$tspans.each(function (i, item) {
				$(item)
					.addClass($(this).attr('id'))
					.html($(_that)
						.find(`.tspan-${$(this).attr('id')}`)
							.attr('textContent'));
			});

		} else {

			$tspans.each(function (i, item) {
				$(item)
					.html(String.EMPTY)
					.removeClass($(this).attr('id'))

					.stop(true).fadeIn();
			});
		}
	};

	var $elems = $('.elem-resize-btn'),
		$elemClass,
		$elemId,
		timer;

	$elems.on('click', function (event) {
		var that = this;

		console.log(event);
		event.preventDefault();

		if (timer && clearTimeout(timer));

		timer = setTimeout(function () {
			$elemId = $(that).attr('id');

			if ($elemClass && ($elemClass != $elemId)) {
				$(`.${$elemClass}`)
					.removeClass('toggle-zoomin');
				$(`.element:not(.${$elemClass})`)
					.removeClass('toggle-zoomout');
			}

			$(`.${$elemId}`).toggleClass('toggle-zoomin');
			$(`.element:not(.${$elemId})`).toggleClass('toggle-zoomout');
			$elemClass = $elemId;

		}, 250);

	});

	$elems.on('dblclick', function () {
		clearTimeout(timer);
		location.assign($(this).find('a').attr('href'));
	});


	//var Add = (function () {
	//	var counter = 0;
	//	return function () { return counter += 1; }
	//})();

	//Add();

	//$(document).ready(
	//	function () {
	//		alert("ready!");
	//	}
	//	);


});