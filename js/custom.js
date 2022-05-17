let nav_a = document.querySelectorAll("nav ul li ");

nav_a.forEach((link) => {
	link.addEventListener("click", function () {
		nav_a.forEach((link_remove) => {
			link_remove.classList.remove("active");
		});
		link.classList.add("active");
	});
});
