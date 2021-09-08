// display
const displayCity = document.querySelector('.display-city');
const displayTime = document.querySelector('.display-time');
const currentTempreture = document.querySelector('.current-tempreture');
const maxMin = document.querySelector('.max-min');
const currentWeather = document.querySelector('.current-weather');
const currentIcon = document.querySelector('.current-icon');

// days of the week
const todayDay = document.querySelectorAll('.day-week');
const todayDate = document.querySelectorAll('.date-of-the-day');
const todayDiscription = document.querySelectorAll('.today-discription');
const todayMaxMin = document.querySelectorAll('.today-max-min');
const weekdayIcon = document.querySelectorAll('.weekday-icon');

// hours
const hour = document.querySelectorAll('.hour');
const hourTemp = document.querySelectorAll('.hour-temp');
const hourlyIcon = document.querySelectorAll('.hourly-icon');

// general information
const probabPrecipitation = document.querySelector('#probab-precipitation');
const volumePrecipitation = document.querySelector('#precipitation-volume');
const windDirection = document.querySelector('#wind');
const windValue = document.querySelector('#wind-value');
const humidity = document.querySelector('#humidity');
const uv = document.querySelector('#uv');
const visibility = document.querySelector('#visibility');
const feelsLike = document.querySelector('.feels-like');

// variables
let isUserLocation = false;

//-------API fetch------//
async function getData(lat, lon) {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=ac42c7f77039422737761129cd9e34f8`,
		{ mode: 'cors' }
	);
	const data = await response.json();
	displayWeather(data);
	console.log(data);
}

// site load
getData(51.5074, 0.1278);

// functions
// icons function
function icon(code, time, sunset, sunrise) {
	if (time > sunset || time < sunrise) {
		return `wi-owm-night-${code}`;
	} else if (time < sunset && time > sunrise) {
		return `wi-owm-day-${code}`;
	}
}

// get user current location
function userLocation() {
	isUserLocation = true;
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			getData(position.coords.latitude, position.coords.longitude);
		});
	} else {
		alert('Geolocation is not supported by this browser.');
	}
}

// convert time
function convertTime(isoTime) {
	var hours = parseInt(isoTime.substring(0, 2), 10),
		minutes = isoTime.substring(3, 5),
		ampm = 'AM';

	if (hours == 12) {
		ampm = 'PM';
	} else if (hours == 0) {
		hours = 12;
	} else if (hours > 12) {
		hours -= 12;
		ampm = 'PM';
	}

	return hours + ':' + minutes + ' ' + ampm;
}

//open and close forms
function openPopup(id) {
	document.getElementById(id).style.display = 'block';
}

function closeForm(id) {
	document.getElementById(id).style.display = 'none';
}

//-------display data in the ui------//

function displayWeather(data) {
	// city values
	const now = new Date();
	const utc = now.toISOString();
	const utcTimeStamp = Date.parse(utc);
	const cityTime = utcTimeStamp + data.timezone_offset * 1000;

	//-------display current------//

	//display the city name
	// displayCity.innerText =

	//display the time
	let clockInterval = setInterval(() => {
		const now = new Date();
		const utc = now.toISOString();
		const utcTimeStamp = Date.parse(utc);
		const cityOffset = utcTimeStamp + data.timezone_offset * 1000;
		const cityTimeUtc = new Date(cityOffset).toISOString();
		console.log(convertTime(cityTimeUtc.slice(11,-5)));
		displayTime.innerText = convertTime(cityTimeUtc.slice(11, -5));
	}, 1000);

	// stop interval
	function stopInterval() {
		clearInterval(clockInterval);
	}

	//display icon
	currentIcon.classList.add(
		icon(
			data.current.weather[0].id,
			data.current.dt,
			data.current.sunset,
			data.current.sunrise
		)
	);

	//diaplay current temperature
	currentTempreture.innerText = `${Math.round(data.current.temp)}\xB0`;

	//display current min and max temperature
	maxMin.innerText = `${data.current.weather[0].main} ${Math.round(
		data.daily[0].temp.max
	)}\xB0 / ${Math.round(data.daily[0].temp.min)}\xB0`;

	//-------display each day of the week------//

	//day of the week
	for (let i = 0; i < todayDay.length; i++) {
		const weekday = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];
		let day = new Date().getDay();
		todayDay[i].innerText =
			i === 0 ? 'Today' : weekday[day + i > 6 ? day + i - 7 : day + i];
	}

	//day date
	for (let i = 0; i < todayDate.length; i++) {
		let date = new Date().toString().slice(4, 10);
		todayDate[i].innerText = date.slice(0, -2) + (parseInt(date.slice(-1)) + i);
	}

	//day discription
	for (let i = 0; i < todayDiscription.length; i++) {
		todayDiscription[i].innerText = data.daily[i].weather[0].description;
	}

	//day max min
	for (let i = 0; i < todayMaxMin.length; i++) {
		todayMaxMin[i].innerText = `${Math.round(
			data.daily[i].temp.max
		)}\xB0 / ${Math.round(data.daily[i].temp.min)}\xB0`;
	}

	//weekday icon
	for (let i = 0; i < weekdayIcon.length; i++) {
		weekdayIcon[i].classList.add(
			icon(
				data.daily[i].weather[0].id,
				data.daily[i].dt,
				data.daily[i].sunset,
				data.daily[i].sunrise
			)
		);
	}

	//-------display hours------//
	for (let i = 0; i < hour.length; i++) {
		let date = cityTime + i * 3600000;
		let hourDisplay = new Date(date).toISOString().slice(11, -11);
		hour[i].innerText = hourDisplay;
	}

	for (let i = 0; i < hourTemp.length; i++) {
		hourTemp[i].innerText = `${Math.round(data.hourly[i].temp)}\xB0`;
	}

	// hour icon
	for (let i = 0; i < hourlyIcon.length; i++) {
		hourlyIcon[i].classList.add(
			icon(
				data.hourly[i].weather[0].id,
				data.hourly[i].dt,
				data.current.sunset,
				data.current.sunrise
			)
		);
	}

	//-------display general information------//
	//Precipitation Probability
	probabPrecipitation.innerText = Math.round(data.daily[0].pop * 100) + ' %';

	//display current feeling temperature
	feelsLike.innerText = `${Math.round(data.current.feels_like)}\xB0`;

	//wind direction
	const directionsArray = [
		'N',
		'NNE',
		'NE',
		'ENE',
		'E',
		'ESE',
		'SE',
		'SSE',
		'S',
		'SSW',
		'SW',
		'WSW',
		'W',
		'WNW',
		'NW',
		'NNW',
		'N',
	];
	const angle = Math.round(0 / 22.5);
	windDirection.innerText = directionsArray[angle % 16];

	//wind Value
	windValue.innerText = `${data.current.wind_speed} km/h`;

	//humidity
	humidity.innerText = data.current.humidity + ' %';

	//uv
	const uvIndex = [
		'Low',
		'Low',
		'Low',
		'Modarate',
		'Modarate',
		'Modarate',
		'High',
		'High',
		'Very High',
		'Very High',
		'Very High',
		'Extreme',
		'Extreme',
		'Extreme',
		'Extreme',
		'Extreme',
	];

	uv.innerText = uvIndex[data.current.uvi];
	//visibility
	visibility.innerText =
		data.current.visibility > 1000
			? data.current.visibility / 1000 + ' km'
			: data.current.visibility + ' m';

	//-------Event Listener------//
	document.getElementById('my-location').addEventListener('click', () => {
		userLocation();
		stopInterval();
	});
}
