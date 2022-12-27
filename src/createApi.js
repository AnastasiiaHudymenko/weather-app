import { dayArr } from './refs';
import { refs } from './refs';

export function create(data) {
  data.weather.forEach(el => {
    if (el.main === 'Clouds') {
      refs.icSv.href.baseVal = `/symbol-defs.a8b2e413.svg#icon-cloude`;
      refs.icCvCurrent.href.baseVal = '/symbol-defs.a8b2e413.svg#icon-cloude';
      refs.svgCurIc.style.fill = 'rgb(45, 44, 44)';
    }
    if (el.main === 'Clear') {
      refs.icSv.href.baseVal = `/symbol-defs.a8b2e413.svg#icon-Sun`;
      refs.icCvCurrent.href.baseVal = `/symbol-defs.a8b2e413.svg#icon-Sun`;
    }
    if (el.main === 'Rain') {
      refs.icSv.href.baseVal = `/symbol-defs.a8b2e413.svg#icon-bi_cloud-rain`;
      refs.icCvCurrent.href.baseVal = `/symbol-defs.a8b2e413.svg#icon-bi_cloud-rain`;
    }
  });

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
  refs.currentDaymini.textContent = ` ${dayArr[day].slice(0, 3)}`;
  refs.currentDegree.textContent = `${Math.round(data.main.temp)}°C`;
}
