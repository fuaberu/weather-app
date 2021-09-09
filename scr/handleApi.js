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

// form values

// variables
// global variables
let temperature = 'celsius';
let wind = 'km/h';
let precipitation = 'mm';
let visibilityCheck = 'km';
let timeCheck = '24h';

//converter
function cToF(value) {
	return (value * 9) / 5 + 32;
}
//-------API fetch------//
//get the weather data
async function getData(lat, lon) {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=ac42c7f77039422737761129cd9e34f8`,
		{ mode: 'cors' }
	);
	const data = await response.json();
	displayWeather(data);
}

//get city name from geolocation
async function getCity(lat, lon) {
	const response = await fetch(
		`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=ac42c7f77039422737761129cd9e34f8`,
		{ mode: 'cors' }
	);
	const cityName = await response.json();
	//display the city name
	displayCity.innerText = `${cityName[0].name}, ${cityName[0].country}`;
}

// site load
getData(51.5098, -0.118);

//-------functions------//
// settings form data
document.addEventListener('DOMContentLoaded', () => {
	document
		.getElementById('settingsForm')
		.addEventListener('submit', handleForm);
});
function handleForm(e) {
	e.preventDefault(); //stop the page reloading
	//console.dir(ev.target);
	let myForm = e.target;
	let settingsData = new FormData(myForm);
	let dataArray = [];
	// look at all the contents
	for (let key of settingsData.keys()) {
		dataArray.push(settingsData.get(key));
		// console.log(key, settingsData.get(key));
	}
	convertValue(dataArray);
}

// form data change
function convertValue(value) {
	temperature = value[0];
	wind = value[1];
	precipitation = value[2];
	visibilityCheck = value[3];
	timeCheck = value[4];
}

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
	let hours = parseInt(isoTime.substring(0, 2), 10);
	let minutes = isoTime.substring(3, 5);
	let ampm = 'AM';

	if (hours == 12) {
		ampm = 'PM';
	} else if (hours == 0) {
		hours = 12;
	} else if (hours > 12) {
		hours -= 12;
		ampm = 'PM';
	}
	if (minutes < 1) {
		return hours + ' ' + ampm;
	}
	return hours + ':' + minutes + ' ' + ampm;
}

// display current
function displayCurrent(data) {
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
	currentTempreture.innerText =
		temperature === 'celsius'
			? `${Math.round(data.current.temp)}`
			: `${Math.round(cToF(data.current.temp))}`;

	//display current min and max temperature
	maxMin.innerText = `${data.current.weather[0].main} ${Math.round(
		temperature === 'celsius'
			? `${Math.round(data.daily[0].temp.max)}`
			: `${Math.round(cToF(data.daily[0].temp.max))}`
	)}\xB0 / ${Math.round(
		temperature === 'celsius'
			? `${Math.round(data.daily[0].temp.min)}`
			: `${Math.round(cToF(data.daily[0].temp.min))}`
	)}\xB0`;
}

//-------display each day of the week------//

function dayWeek(data) {
	//day of the week
	for (let i = 0; i < todayDay.length; i++) {
		const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
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
			temperature === 'celsius'
				? data.daily[i].temp.max
				: cToF(data.daily[i].temp.max)
		)}\xB0 / ${Math.round(
			temperature === 'celsius'
				? data.daily[i].temp.min
				: cToF(data.daily[i].temp.min)
		)}\xB0`;
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
}

//-------display hours------//

function hourly(data, cityTime) {
	for (let i = 0; i < hour.length; i++) {
		let date = cityTime + i * 3600000;
		let hourDisplay = new Date(date).toISOString().slice(11, -11);
		hour[i].innerText =
			timeCheck === '12h' ? convertTime(hourDisplay) : hourDisplay;
	}

	for (let i = 0; i < hourTemp.length; i++) {
		hourTemp[i].innerText = `${Math.round(
			temperature === 'celsius'
				? data.hourly[i].temp
				: cToF(data.hourly[i].temp)
		)}\xB0`;
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
}

//-------display general information------//

function generalInformatio(data) {
	//Precipitation Probability
	probabPrecipitation.innerText = Math.round(data.daily[0].pop * 100) + ' %';

	//display current feeling temperature
	feelsLike.innerText = `${Math.round(
		temperature === 'celsius'
			? data.current.feels_like
			: cToF(data.current.feels_like)
	)}\xB0`;

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
	function windConverter(value) {
		switch (wind) {
			case 'm/s':
				windValue.innerText = `${(value / 3.6).toFixed(2)}m/s`;
				break;
			case 'ft/s':
				windValue.innerText = `${(value / 1.097).toFixed(2)} ft/s`;
				break;
			case 'mi/h':
				windValue.innerText = `${(value / 1.609).toFixed(2)} mi/h`;
				break;
			case 'kts':
				windValue.innerText = `${(value / 1.852).toFixed(2)} kts`;
				break;
			case 'km/h':
				windValue.innerText = `${value} km/h`;
				break;
			default:
				windValue.innerText = `${value} km/h`;
				break;
		}
	}
	windConverter(data.current.wind_speed);

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

	uv.innerText = uvIndex[Math.round(data.current.uvi)];
	//visibility
	visibility.innerText =
		visibilityCheck === 'km'
			? data.current.visibility > 1000
				? data.current.visibility / 1000 + ' km'
				: data.current.visibility + ' m'
			: Math.round(data.current.visibility / 1.609) + ' mi';
}

//-------display data in the ui------//

function displayWeather(data) {
	// city values
	// time
	const now = new Date();
	const utc = now.toISOString();
	const utcTimeStamp = Date.parse(utc);
	const cityTime = utcTimeStamp + data.timezone_offset * 1000;

	//-------display city name------//
	getCity(data.lat, data.lon);

	//-------display current------//

	// update every 1 sec
	let clockInterval = setInterval(() => {
		//display the time
		const now = new Date();
		const utc = now.toISOString();
		const utcTimeStamp = Date.parse(utc);
		const cityOffset = utcTimeStamp + data.timezone_offset * 1000;
		const cityTimeUtc = new Date(cityOffset).toISOString();
		if (timeCheck === '12h') {
			displayTime.innerText = convertTime(cityTimeUtc.slice(11, -5));
		} else if (timeCheck === '24h') {
			displayTime.innerText = cityTimeUtc.slice(11, -8);
		}
		//update the ui every 1 sec to change settings
		displayCurrent(data);
		dayWeek(data);
		hourly(data, cityTime);
		generalInformatio(data);
	}, 1000);

	// stop interval
	function stopInterval() {
		clearInterval(clockInterval);
	}

	//-------Event Listener------//
	document.getElementById('my-location').addEventListener('click', () => {
		userLocation();
		stopInterval();
	});
}
