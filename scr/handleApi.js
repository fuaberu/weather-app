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

// functions
function icon(code, time, sunset, sunrise) {
	if (time > sunset || time < sunrise) {
		return `wi-owm-night-${code}`;
	} else if (time < sunset && time > sunrise) {
		return `wi-owm-day-${code}`;
	}
}

async function getData(lat, lon) {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=ac42c7f77039422737761129cd9e34f8`,
		{ mode: 'cors' }
	);
	const data = await response.json();

	//-------display current------//

	//display the time
	let time = new Date(data.current.dt * 1000).toISOString();
	displayTime.innerText = time;

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
	maxMin.innerText = `${Math.round(data.daily[0].temp.max)}\xB0 / ${Math.round(
		data.daily[0].temp.min
	)}\xB0`;

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
		let date = new Date(data.hourly[i].dt * 1000);
		hour[i].innerText = date.toLocaleString('en-Us', {
			hour: 'numeric',
			hour12: true,
		});
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
	probabPrecipitation.innerText = data.daily[0].pop * 100 + ' %';

	//display current feeling temperature
	feelsLike.innerText = `${Math.round(data.current.feels_like)}\xB0`;

	//wind direction
	windDirection.innerText = data.current.wind_deg;

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

	console.log(data);
}
getData(51.5074, 0.1278);
