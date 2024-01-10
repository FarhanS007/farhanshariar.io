window.onload = function () {

	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});
}


var typed = new Typed(".typing-text", {
    strings: ["Student", "Programmer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 75,
    backDelay: 500,
});


