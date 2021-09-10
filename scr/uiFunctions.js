//open and close forms
function openPopup(id) {
	document.getElementById(id).style.display = 'block';
}

function closeForm(id) {
	document.getElementById(id).style.display = 'none';
}

function ChangeBackground(sunrise, sunset, weather, time, background) {
	console.log(sunrise, sunset, weather, time, background);
	if (
		// day sky clear colors
		time > sunrise + 1 * 3600 &&
		time < sunset - 1 * 3600 &&
		weather === 'clear'
	) {
		background.style.background =
			'linear-gradient(0deg, rgba(9,177,236,1) 20%, rgba(4,135,226,1) 55%, rgba(4,99,202,1) 91%)';
	}
	if (
		// day sky rain colors
		time > sunrise + 1 * 3600 &&
		time < sunset - 1 * 3600 &&
		weather !== 'clear'
	) {
		background.style.background =
			'linear-gradient(0deg, rgba(146,186,210,1) 20%, rgba(83,120,158,1) 55%, rgba(57,88,119,1) 91%)';
	}
	if (
		// sunrise clear colors
		time >= sunrise &&
		time <= sunrise + 1 * 3600 &&
		weather === 'clear'
	) {
		background.style.background =
			'linear-gradient(0deg, rgba(237,227,150,1) 20%, rgba(236,197,135,1) 55%, rgba(247,150,90,1) 91%)';
	}
	if (
		// sunrise rain colors
		time >= sunrise &&
		time <= sunrise + 1 * 3600 &&
		weather !== 'clear'
	) {
		background.style.background =
			'linear-gradient(0deg, rgba(218,185,158,1) 20%, rgba(149,174,172,1) 55%, rgba(74,97,86,1) 91%)';
	}
	if (
		// sunset clear colors
		time <= sunset &&
		time >= sunset - 1 * 3600 &&
		weather === 'clear'
	) {
		background.style.background =
			'linear-gradient(0deg, rgba(253,143,102,1) 20%, rgba(242,139,150,1) 55%, rgba(207,110,114,1) 91%)';
	}
	if (
		// sunset rain colors
		time <= sunset &&
		time >= sunset - 1 * 3600 &&
		weather !== 'clear'
	) {
		background.style.background =
			'linear-gradient(0deg, rgba(125,80,94,1) 20%, rgba(69,61,101,1) 55%, rgba(39,41,81,1) 91%)';
	}
	if (
		// night clear colors
		time > sunset &&
		weather === 'clear'
	) {
		background.style.background =
			'linear-gradient(0deg, rgba(24,80,136,1) 20%, rgba(8,30,99,1) 55%, rgba(0,10,38,1) 91%)';
	}
	if (
		// night rain colors
		time > sunset &&
		weather !== 'clear'
	) {
		background.style.background =
			'linear-gradient(0deg, rgba(31,45,97,1) 20%, rgba(18,25,46,1) 55%, rgba(0,0,0,1) 91%)';
	}
}
