const newSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-links");
	const newLinks = document.querySelectorAll(".nav-links li");
	burger.addEventListener("click", () => {
		nav.classList.toggle("nav-active");
		newLinks.forEach((link, index) => {
			if(link.style.animation){
				link.style.animation="";
			} else {
				link.style.animation = `newLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
			}
			burger.classList.toggle("toggle");
		})
	})
}
newSlide();