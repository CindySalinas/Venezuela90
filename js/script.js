$(function() {
	window.mySwipe = new Swipe(document.getElementById('slider'), {
	  startSlide: 0,
	  speed: 400,
	  auto: 3000,
	  continuous: true,
	  disableScroll: false,
	  stopPropagation: false,
	  callback: function(index, elem) {},
	  transitionEnd: function(index, elem) {}
	});


$( ".toggle-menu" ).click(function() {
  $( ".site-header nav ul" ).fadeToggle( "slow", "linear" );
});

})