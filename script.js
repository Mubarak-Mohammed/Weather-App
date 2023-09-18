const apikey = "1b23630f5b249a6de593c7da7da1516c";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humigity");
const wind = document.querySelector(".wind");
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherTab = document.querySelector(".weather");
const error = document.querySelector(".error");
console.log(weatherTab);

async function ckeckWeather(_cityName) {
  const respons = await fetch(`${apiurl}${_cityName} &appid=${apikey}`);
  if(respons.status == 404){
    weatherTab.style.display = "none";
    error.style.display ="block" 
    return ;
  }
  let data = await respons.json();
  city.innerHTML = data.name;
  temp.innerHTML = `${Math.round(data.main.temp)}°C`;
  humidity.innerHTML = `${data.main.humidity}%`;
  wind.innerHTML = `${data.wind.speed} Km/h`;
  error.style.display = "none"; 
  weatherTab.style.display = "block";
  switch (data.weather[0].main) {
    case "Clear":
      weatherIcon.src = "images/clear.png";
      break;
    case "Clouds":
      weatherIcon.src = "images/clouds.png";
      break;
    case "Drizzle":
      weatherIcon.src = "images/drizzle.png";
      break;
    case "Snow":
      weatherIcon.src = "images/snow.png";
      break;
    case "Wind":
      weatherIcon.src = "images/wind.png";
      break;
    case "Mist":
      weatherIcon.src = "images/mist.png";
      break;
    case "Rain":
      weatherIcon.src = "images/rain.png";
      break;
    default:
      weatherIcon.src = "images/clear.png";
  }
}

searchbtn.addEventListener("click", () => {
  ckeckWeather(searchbox.value);
});
