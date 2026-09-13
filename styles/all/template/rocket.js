(function () {
	function initRocketBackToTop() {
		var rocket = document.getElementById('rocket-top');

		if (!rocket) {
			return;
		}

		function getScrollTop() {
			return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		}

		function setRocketVisible(isVisible) {
			rocket.classList.toggle('show', isVisible);
			rocket.setAttribute('aria-hidden', isVisible ? 'false' : 'true');
			rocket.setAttribute('tabindex', isVisible ? '0' : '-1');
		}

		function updateRocketVisibility() {
			if (rocket.classList.contains('fly')) {
				return;
			}

			setRocketVisible(getScrollTop() > 160);
		}

		function isReducedMotion() {
			return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		}

		window.addEventListener('scroll', updateRocketVisibility);
		updateRocketVisibility();

		rocket.addEventListener('click', function () {
			launchRocket();
		});

		rocket.addEventListener('keydown', function (event) {
			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				launchRocket();
			}
		});

		rocket.classList.add('rocket-top--ready');

		function launchRocket() {
			if (rocket.classList.contains('fly')) {
				return;
			}

			var reduceMotion = isReducedMotion();

			rocket.classList.add('fly');

			window.scrollTo({
				top: 0,
				behavior: reduceMotion ? 'auto' : 'smooth'
			});

			setTimeout(function () {
				rocket.classList.remove('fly');
				if (document.activeElement === rocket) {
					rocket.blur();
				}
				updateRocketVisibility();
			}, reduceMotion ? 0 : 1100);
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initRocketBackToTop);
	} else {
		initRocketBackToTop();
	}
}());
