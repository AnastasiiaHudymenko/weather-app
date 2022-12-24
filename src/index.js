const refs = {
  day: document.querySelector('.page-main__day-title'),
  date: document.querySelector('.page-main__day-of-month'),
  city: document.querySelector('.page-main__location-now'),
  currentTemp: document.querySelector('.page-main__degree'),
  currentStutusWth: document.querySelector('.page-main__status-weather'),
  cloudniness: document.querySelector('.list-decs__info--cld'),
  humidity: document.querySelector('.list-decs__info--hum'),
  wind: document.querySelector('.list-decs__info--wind'),
};

const dayArr = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const API_KEY = 'fec120b35dbf88575ec32786c3b642e3';
getFeatch()
  .then(response => response.json())
  .then(data => create(data));
function getFeatch() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kiev&appid=${API_KEY}`
  );
}

function create(data) {
  const currentDate = new Date();
  const day = currentDate.getDay();

  refs.city.textContent = data.name;
  refs.day.textContent = dayArr[day];
  refs.date.textContent = `${currentDate.getDate()} ${dayArr[day].slice(
    0,
    3
  )} ${currentDate.getFullYear()}`;
  refs.currentTemp.textContent = `${Math.round(data.main.temp)}°C`;
  data.weather.forEach(({ main }) => {
    refs.currentStutusWth.textContent = `${main}`;
  });
  refs.cloudniness.textContent = `${data.clouds.all} %`;
  refs.humidity.textContent = `${data.main.humidity} %`;
  refs.wind.textContent = `${(data.wind.speed * 3.6).toFixed(1)} km/h`;
}
