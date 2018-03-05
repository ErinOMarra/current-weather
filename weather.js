var api = "http://api.openweathermap.org/data/2.5/weather?q=";
var celsius = "&units=metric";
var fahrenheit = "&units=imperial";
var city;
var key = "&appid=6643ed07a4e1379d6822d18532b1a914";
var button = document.getElementById("button");
var celsiusButton = document.getElementById("celsius");
var fahrenheitButton = document.getElementById("fahrenheit");

// Get city name from user input
function getCity(){
	city = document.getElementById("city").value;
}

// Celsius button pressed
celsiusButton.addEventListener("click", function(){
	getCity();
	var request = new XMLHttpRequest();
	request.open('GET', api + city + celsius + key);
	request.onload = function(){
		var weatherData = JSON.parse(request.responseText);
		printWeatherCelsius(weatherData);
	};
	request.send();
});

// Fahrenheit button pressed
fahrenheitButton.addEventListener("click", function(){
	getCity();
	var request = new XMLHttpRequest();
	request.open('GET', api + city + fahrenheit + key);
	request.onload = function(){
		var weatherData = JSON.parse(request.responseText);
		printWeatherFahrenheit(weatherData);
	};
	request.send();
});

// "Give me the weather!" button pressed
button.addEventListener("click", function(){
	getCity();
	var request = new XMLHttpRequest();
	request.open('GET', api + city + celsius + key);
	request.onload = function(){
		var weatherData = JSON.parse(request.responseText);
		printWeatherCelsius(weatherData);
	};
	request.send();
});

/* Celsius weather format:
City name, Icon, Weather condition, Current temperature, Wind (in meters/second), Humidity
*/
function printWeatherCelsius(weatherData){
	document.getElementById("cityName").innerHTML = weatherData.name + ", " + weatherData.sys.country;
	document.getElementById("conditions").innerHTML = weatherData.weather["0"].description.toUpperCase();
	document.getElementById("currentTemp").innerHTML = "Current Temperature: " + weatherData.main.temp + '&#8451';
	document.getElementById("wind").innerHTML = "Wind: " + weatherData.wind.speed + " meter/sec";
	document.getElementById("humidity").innerHTML = "Humidity: " + weatherData.main.humidity + "%";
	document.getElementById("icon").innerHTML = "<img src=\"http://openweathermap.org/img/w/" + weatherData.weather["0"].icon + ".png\" class=\"icon\">";
}

/* Fahrenheit weather format:
City name, Icon, Weather condition, Current temperature, Wind (in miles/hour), Humidity
*/
function printWeatherFahrenheit(weatherData){
	document.getElementById("cityName").innerHTML = weatherData.name + ", " + weatherData.sys.country;
	document.getElementById("conditions").innerHTML = weatherData.weather["0"].description.toUpperCase();
	document.getElementById("currentTemp").innerHTML = "Current Temperature: " + weatherData.main.temp + '&#8457';
	document.getElementById("wind").innerHTML = "Wind: " + weatherData.wind.speed + " miles/hour";
	document.getElementById("humidity").innerHTML = "Humidity: " + weatherData.main.humidity + "%";
	document.getElementById("icon").innerHTML = "<img src=\"http://openweathermap.org/img/w/" + weatherData.weather["0"].icon + ".png\" class=\"icon\">";
}