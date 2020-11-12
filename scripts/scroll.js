
window.onload = function() {
	window.headerElement = document.getElementById('header')
}

const threshold = 2

window.addEventListener('scroll', event => {
	if (window.scrollY > threshold) {
		window.headerElement.classList.remove("big");
	} else {
		window.headerElement.classList.add("big");
	}
})

