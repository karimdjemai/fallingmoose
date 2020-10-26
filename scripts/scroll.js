
window.onload = function() {
	headerElement = document.getElementById('header')
}

const threshold = 10

window.addEventListener('scroll', event => {
	if (window.scrollY >= threshold) {
		headerElement.classList.remove("big");
	} else {
		headerElement.classList.add("big");
	}
})

