import { dayArr } from './refs';
import { refs } from './refs';

export function createStaticWeatther(data) {
  createWeatherAll(data);
}

export function createSearchUser(data) {
  createWeatherAll(data);
}

function createWeatherAll({
  location: { name },
  current: {
    temp_c,
    wind_kph,
    humidity,
    feelslike_c,
    condition: { icon, text },
  },
  forecast: { forecastday: dayOfday },
}) {
  refs.list[0].classList.add('list-info__item--current');
  const temp = temp_c.toFixed();
  const currentDate = new Date();
  const day = currentDate.getDay();
  refs.day.textContent = dayArr[day];
  refs.date.textContent = `${currentDate.getDate()} ${dayArr[day].slice(
    0,
    3
  )} ${currentDate.getFullYear()}`;

  refs.city.textContent = `${name}`;
  refs.currentTemp.textContent = `${temp} °C`;
  refs.img.src = `${icon}`;
  refs.currentStutusWth.textContent = `${text}`;

  refs.feelslike.textContent = `${feelslike_c.toFixed()} °C`;
  refs.humidity.textContent = `${humidity}%`;
  refs.wind.textContent = `${wind_kph} km/h`;

  dayOfday.forEach((el, i) => {
    const date = new Date(`${el.date}`);
    const day = date.getDay();
    refs.currentDaymini[i].textContent = `${dayArr[day].slice(0, 3)}`;
    refs.currentDegree[i].textContent = `${el.day.avgtemp_c.toFixed()} °C`;
    refs.imgCurrentMini[i].src = `${el.day.condition.icon}`;
  });
}
