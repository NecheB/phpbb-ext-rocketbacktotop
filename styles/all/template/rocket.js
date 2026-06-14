document.addEventListener('DOMContentLoaded', function () {
	var rocket = document.getElementById('rocket-top');

	if (!rocket)
	{
		return;
	}

	var shownOnce = false;

	window.addEventListener('scroll', function () {
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

		if (scrollTop > 500 && !shownOnce)
		{
			rocket.classList.add('show');
			shownOnce = true;
		}

		if (scrollTop < 200)
		{
			rocket.classList.remove('show');
			shownOnce = false;
		}
	});

	rocket.addEventListener('click', function () {
		launchRocket();
	});

	rocket.addEventListener('keydown', function (event) {
		if (event.key === 'Enter' || event.key === ' ')
		{
			event.preventDefault();
			launchRocket();
		}
	});

	function launchRocket()
	{
		rocket.classList.add('fly');

		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});

		setTimeout(function () {
			rocket.classList.remove('fly');
			rocket.classList.remove('show');
		}, 1100);
	}
});
