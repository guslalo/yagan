$(document).ready(function(){
	if ('ontouchstart' in document.documentElement) {
		document.addEventListener('touchstart', onTouchStart, {passive: true});
	}
});