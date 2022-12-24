const refs = {
  day: document.querySelector('.page-main__day-title'),
  date: document.querySelector('.page-main__day-of-month'),
  city: document.querySelector('.page-main__location-now'),
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

// const API_KEY = 'fec120b35dbf88575ec32786c3b642e3';

const promise = fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=Egypt&appid=${API_KEY}`
);

promise.then(response => response.json()).then(data => create(data));

function create(data) {
  data.weather.forEach(el => {
    console.log(el.icon);
  });

  const currentDate = new Date();
  const day = currentDate.getDay();

  refs.city.textContent = data.name;
  refs.day.textContent = dayArr[day];
  refs.date.textContent = `${currentDate.getDate()} ${dayArr[day].slice(
    0,
    3
  )} ${currentDate.getFullYear()}`;
}
