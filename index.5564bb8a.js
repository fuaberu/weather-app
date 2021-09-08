const displayCity=document.querySelector(".display-city"),displayTime=document.querySelector(".display-time"),currentTempreture=document.querySelector(".current-tempreture"),maxMin=document.querySelector(".max-min"),currentWeather=document.querySelector(".current-weather"),currentIcon=document.querySelector(".current-icon"),todayDay=document.querySelectorAll(".day-week"),todayDate=document.querySelectorAll(".date-of-the-day"),todayDiscription=document.querySelectorAll(".today-discription"),todayMaxMin=document.querySelectorAll(".today-max-min"),weekdayIcon=document.querySelectorAll(".weekday-icon"),hour=document.querySelectorAll(".hour"),hourTemp=document.querySelectorAll(".hour-temp"),hourlyIcon=document.querySelectorAll(".hourly-icon"),probabPrecipitation=document.querySelector("#probab-precipitation"),volumePrecipitation=document.querySelector("#precipitation-volume"),windDirection=document.querySelector("#wind"),windValue=document.querySelector("#wind-value"),humidity=document.querySelector("#humidity"),uv=document.querySelector("#uv"),visibility=document.querySelector("#visibility"),feelsLike=document.querySelector(".feels-like");let isUserLocation=!1;async function getData(e,t){const r=await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${e}&lon=${t}&exclude=minutely&units=metric&appid=ac42c7f77039422737761129cd9e34f8`,{mode:"cors"}),n=await r.json();displayWeather(n),console.log(n)}function icon(e,t,r,n){return t>r||t<n?`wi-owm-night-${e}`:t<r&&t>n?`wi-owm-day-${e}`:void 0}function userLocation(){isUserLocation=!0,navigator.geolocation?navigator.geolocation.getCurrentPosition((e=>{getData(e.coords.latitude,e.coords.longitude)})):alert("Geolocation is not supported by this browser.")}function convertTime(e){var t=parseInt(e.substring(0,2),10),r="AM";return 12==t?r="PM":0==t?t=12:t>12&&(t-=12,r="PM"),t+":"+e.substring(3,5)+" "+r}function openPopup(e){document.getElementById(e).style.display="block"}function closeForm(e){document.getElementById(e).style.display="none"}function displayWeather(e){const t=(new Date).toISOString(),r=Date.parse(t)+1e3*e.timezone_offset;let n=setInterval((()=>{const t=(new Date).toISOString(),r=Date.parse(t)+1e3*e.timezone_offset,n=new Date(r).toISOString();console.log(convertTime(n.slice(11,-5))),displayTime.innerText=convertTime(n.slice(11,-5))}),1e3);currentIcon.classList.add(icon(e.current.weather[0].id,e.current.dt,e.current.sunset,e.current.sunrise)),currentTempreture.innerText=`${Math.round(e.current.temp)}°`,maxMin.innerText=`${e.current.weather[0].main} ${Math.round(e.daily[0].temp.max)}° / ${Math.round(e.daily[0].temp.min)}°`;for(let e=0;e<todayDay.length;e++){const t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];let r=(new Date).getDay();todayDay[e].innerText=0===e?"Today":t[r+e>6?r+e-7:r+e]}for(let e=0;e<todayDate.length;e++){let t=(new Date).toString().slice(4,10);todayDate[e].innerText=t.slice(0,-2)+(parseInt(t.slice(-1))+e)}for(let t=0;t<todayDiscription.length;t++)todayDiscription[t].innerText=e.daily[t].weather[0].description;for(let t=0;t<todayMaxMin.length;t++)todayMaxMin[t].innerText=`${Math.round(e.daily[t].temp.max)}° / ${Math.round(e.daily[t].temp.min)}°`;for(let t=0;t<weekdayIcon.length;t++)weekdayIcon[t].classList.add(icon(e.daily[t].weather[0].id,e.daily[t].dt,e.daily[t].sunset,e.daily[t].sunrise));for(let e=0;e<hour.length;e++){let t=new Date(r+36e5*e).toISOString().slice(11,-11);hour[e].innerText=t}for(let t=0;t<hourTemp.length;t++)hourTemp[t].innerText=`${Math.round(e.hourly[t].temp)}°`;for(let t=0;t<hourlyIcon.length;t++)hourlyIcon[t].classList.add(icon(e.hourly[t].weather[0].id,e.hourly[t].dt,e.current.sunset,e.current.sunrise));probabPrecipitation.innerText=Math.round(100*e.daily[0].pop)+" %",feelsLike.innerText=`${Math.round(e.current.feels_like)}°`;const o=Math.round(0);windDirection.innerText=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"][o%16],windValue.innerText=`${e.current.wind_speed} km/h`,humidity.innerText=e.current.humidity+" %";uv.innerText=["Low","Low","Low","Modarate","Modarate","Modarate","High","High","Very High","Very High","Very High","Extreme","Extreme","Extreme","Extreme","Extreme"][e.current.uvi],visibility.innerText=e.current.visibility>1e3?e.current.visibility/1e3+" km":e.current.visibility+" m",document.getElementById("my-location").addEventListener("click",(()=>{userLocation(),clearInterval(n)}))}getData(51.5074,.1278);
//# sourceMappingURL=index.5564bb8a.js.map