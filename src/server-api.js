export const API_KEY = 'fec120b35dbf88575ec32786c3b642e3';
export function getFeatch() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=kiev&appid=${API_KEY}`
  );
}

export function userFetch(search) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${search}&appid=${API_KEY}`
  );
}
