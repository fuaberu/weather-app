// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ipMtw":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4e5dac8afe405db7";
module.bundle.HMR_BUNDLE_ID = "9dd39888c4ecee60";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}]},["ipMtw"], null, "parcelRequirebbde")
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
const windDirection = document.querySelector('#wind');
const windValue = document.querySelector('#wind-value');
const humidity = document.querySelector('#humidity');
const uv = document.querySelector('#uv');
const visibility = document.querySelector('#visibility');
const feelsLike = document.querySelector('.feels-like');
// main
const main = document.querySelector('.main');
//loader
const loader = document.getElementById('loader');
// form values
// variables
// global variables
let temperature = 'celsius';
let wind = 'km/h';
let visibilityCheck = 'km';
let timeCheck = '24h';
let currentLat = 0;
let currentLon = 0;
//converter
function cToF(value) {
    return value * 9 / 5 + 32;
}
//-------API fetch------//
//get the weather data
async function getData(lat, lon) {
    loader.style.opacity = 1;
    loader.style.display = 'block';
    console.log('trying');
    currentLon = lon;
    currentLat = lat;
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=ac42c7f77039422737761129cd9e34f8`, {
            mode: 'cors'
        });
        const data = await response.json();
        takeScroll();
        displayWeather(data);
        setTimeout(()=>{
            loader.style.opacity = 0;
            loader.style.display = 'none';
        }, 1000);
    } catch (error) {
        alert('Sorry, there was an error on the weather data. Please try again later.');
    }
}
//get city name from geolocation
async function getCity(lat, lon) {
    try {
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=ac42c7f77039422737761129cd9e34f8`, {
            mode: 'cors'
        });
        const cityName = await response.json();
        //display the city name
        displayCity.innerText = `${cityName[0].name}, ${cityName[0].country}`;
    } catch (error) {
        alert('Sorry, there was an error on the city name data. Please try again later.');
    }
}
// site load
getData(51.5098, -0.118);
//-------functions------//
// settings form data
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('settingsForm').addEventListener('submit', handleSettingsForm);
    document.getElementById('city-location-input').addEventListener('submit', handleCityNameForm);
});
// settings input
function handleSettingsForm(e) {
    e.preventDefault(); //stop the page reloading
    //console.dir(ev.target);
    let myForm = e.target;
    let settingsData = new FormData(myForm);
    let dataArray = [];
    // look at all the contents
    for (let key of settingsData.keys())dataArray.push(settingsData.get(key));
    convertValue(dataArray);
}
// city name from city input form
function handleCityNameForm(e) {
    e.preventDefault(); //stop the page reloading
    //console.dir(ev.target);
    let myForm = e.target;
    let cityData = new FormData(myForm);
    let dataName = '';
    // look at all the contents
    for (let key of cityData.keys())dataName = cityData.get(key);
    getCityCoordinates(dataName);
}
// form settings data change
function convertValue(value) {
    temperature = value[0];
    wind = value[1];
    visibilityCheck = value[2];
    timeCheck = value[3];
}
// form city name convert to geolocation
async function getCityCoordinates(city) {
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=ac42c7f77039422737761129cd9e34f8`, {
        mode: 'cors'
    });
    const cityCoordinates = await response.json();
    console.log(cityCoordinates);
    //display the city name
    takeScroll();
    getData(cityCoordinates[0].lat, cityCoordinates[0].lon);
}
// icons function
function icon(code, time, sunset, sunrise) {
    if (time > sunset || time < sunrise) return `wi-owm-night-${code}`;
    else if (time < sunset && time > sunrise) return `wi-owm-day-${code}`;
}
// get user current location
function userLocation() {
    if (navigator.geolocation) navigator.geolocation.getCurrentPosition((position)=>{
        getData(position.coords.latitude, position.coords.longitude);
    });
    else alert('Geolocation is not supported by this browser.');
}
// convert time
function convertTime(isoTime) {
    let hours = parseInt(isoTime.substring(0, 2), 10);
    let minutes = isoTime.substring(3, 5);
    let ampm = 'AM';
    if (hours == 12) ampm = 'PM';
    else if (hours == 0) hours = 12;
    else if (hours > 12) {
        hours -= 12;
        ampm = 'PM';
    }
    if (minutes < 1) return hours + ' ' + ampm;
    return hours + ':' + minutes + ' ' + ampm;
}
// display current weather
function displayCurrent(data) {
    //display icon
    currentIcon.classList.add(icon(data.current.weather[0].id, data.current.dt, data.current.sunset, data.current.sunrise));
    //diaplay current temperature
    currentTempreture.innerText = temperature === 'celsius' ? ` ${Math.round(data.current.temp)}` : ` ${Math.round(cToF(data.current.temp))}`;
    //display current min and max temperature
    maxMin.innerText = `${data.current.weather[0].main} ${Math.round(temperature === 'celsius' ? `${Math.round(data.daily[0].temp.max)}` : `${Math.round(cToF(data.daily[0].temp.max))}`)}\xb0 / ${Math.round(temperature === 'celsius' ? `${Math.round(data.daily[0].temp.min)}` : `${Math.round(cToF(data.daily[0].temp.min))}`)}\xb0`;
}
//-------display each day of the week------//
function dayWeek(data) {
    //day of the week
    for(let i = 0; i < todayDay.length; i++){
        const weekday = [
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thur',
            'Fri',
            'Sat'
        ];
        let day = new Date().getDay();
        todayDay[i].innerText = i === 0 ? 'Today' : weekday[day + i > 6 ? day + i - 7 : day + i];
    }
    //day date
    for(let i1 = 0; i1 < todayDate.length; i1++){
        let date = new Date().toString().slice(4, 10);
        todayDate[i1].innerText = date.slice(0, -2) + (parseInt(date.slice(-1)) + i1);
    }
    //day discription
    for(let i2 = 0; i2 < todayDiscription.length; i2++)todayDiscription[i2].innerText = data.daily[i2].weather[0].description;
    // scroll effect
    scrollDiscription();
    //day max min
    for(let i3 = 0; i3 < todayMaxMin.length; i3++)todayMaxMin[i3].innerText = `${Math.round(temperature === 'celsius' ? data.daily[i3].temp.max : cToF(data.daily[i3].temp.max))}\xb0 / ${Math.round(temperature === 'celsius' ? data.daily[i3].temp.min : cToF(data.daily[i3].temp.min))}\xb0`;
    //weekday icon
    for(let i4 = 0; i4 < weekdayIcon.length; i4++)weekdayIcon[i4].classList.add(icon(data.daily[i4].weather[0].id, data.daily[i4].dt, data.daily[i4].sunset, data.daily[i4].sunrise));
}
//-------display hours------//
function hourly(data) {
    const now = new Date();
    const utc = now.toISOString();
    const utcTimeStamp = Date.parse(utc);
    const cityTime = utcTimeStamp + data.timezone_offset * 1000;
    for(let i = 0; i < hour.length; i++){
        let date = cityTime + i * 3600000;
        let hourDisplay = new Date(date).toISOString().slice(11, -11);
        hour[i].innerText = timeCheck === '12h' ? convertTime(hourDisplay) : hourDisplay;
    }
    for(let i1 = 0; i1 < hourTemp.length; i1++)hourTemp[i1].innerText = `${Math.round(temperature === 'celsius' ? data.hourly[i1].temp : cToF(data.hourly[i1].temp))}\xb0`;
    // hour icon
    for(let i2 = 0; i2 < hourlyIcon.length; i2++)hourlyIcon[i2].classList.add(icon(data.hourly[i2].weather[0].id, data.hourly[i2].dt, data.current.sunset, data.current.sunrise));
}
//-------display general information------//
function generalInformatio(data) {
    //Precipitation Probability
    probabPrecipitation.innerText = Math.round(data.daily[0].pop * 100) + ' %';
    //display current feeling temperature
    feelsLike.innerText = `${Math.round(temperature === 'celsius' ? data.current.feels_like : cToF(data.current.feels_like))}\xb0`;
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
    const angle = Math.round(0);
    windDirection.innerText = directionsArray[angle % 16];
    //wind Value
    function windConverter(value) {
        switch(wind){
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
    visibility.innerText = visibilityCheck === 'km' ? data.current.visibility > 1000 ? data.current.visibility / 1000 + ' km' : data.current.visibility + ' m' : Math.round(data.current.visibility / 1.609) + ' mi';
}
//-------display data in the ui------//
function displayWeather(data) {
    // time
    const now = new Date();
    const utc = now.toISOString();
    const utcTimeStamp = Date.parse(utc);
    const cityTime = utcTimeStamp + data.timezone_offset * 1000;
    //-------display city name------//
    getCity(data.lat, data.lon);
    //-------display current------//
    // update every 1 sec
    let clockInterval = setInterval(()=>{
        //display the time
        const now1 = new Date();
        const utc1 = now1.toISOString();
        const utcTimeStamp1 = Date.parse(utc1);
        const cityOffset = utcTimeStamp1 + data.timezone_offset * 1000;
        const cityTimeUtc = new Date(cityOffset).toISOString();
        if (timeCheck === '12h') displayTime.innerText = convertTime(cityTimeUtc.slice(11, -5));
        else if (timeCheck === '24h') displayTime.innerText = cityTimeUtc.slice(11, -8);
    }, 1000);
    displayCurrent(data);
    dayWeek(data);
    hourly(data, cityTime);
    generalInformatio(data);
    // stop interval
    function stopInterval() {
        clearInterval(clockInterval);
    }
    //-------Event Listener------//
    document.getElementById('my-location').addEventListener('click', ()=>{
        userLocation();
        stopInterval();
    });
    document.getElementById('city-search-btn').addEventListener('click', ()=>{
        stopInterval();
    });
    // background color
    ChangeBackground(data.current.sunrise, data.current.sunset, data.current.weather[0].main, data.current.dt, main);
}
function update() {
    getData(currentLat, currentLon);
}

//# sourceMappingURL=index.c4ecee60.js.map
