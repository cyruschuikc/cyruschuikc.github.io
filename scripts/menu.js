document.addEventListener('DOMContentLoaded', () => {
	const toggleButton = document.querySelector('.menu-toggle');
	const nav = document.querySelector('#top-nav');
	const homeLink = document.querySelector('#home-link');

	if (!toggleButton || !nav) return;

	/* Toggle menu */
	toggleButton.addEventListener('click', () => {
		const isOpen = nav.classList.toggle('active');
		toggleButton.setAttribute('aria-expanded', isOpen);
	});

	/* Close menu on any nav click */
	nav.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', () => {
			nav.classList.remove('active');
			toggleButton.setAttribute('aria-expanded', false);
		});
	});

	/* Home navigation */
	if (homeLink) {
		homeLink.addEventListener('click', (e) => {
			e.preventDefault();
			location.href = 'index.html';
		});
	}

	document.addEventListener('click', (e) => {
		if (!nav.contains(e.target) && !toggleButton.contains(e.target)) {
			nav.classList.remove('active');
			toggleButton.setAttribute('aria-expanded', false);
		}
	});

});
