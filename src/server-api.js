const key = '3d258d8aad0e40d181470018222812';
const BASE_URL = 'http://api.weatherapi.com/v1';

export function getFeatch() {
  return fetch(`${BASE_URL}/forecast.json?key=${key}&q=Kiev&days=3`).then(
    resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      } else {
        return resp.json();
      }
    }
  );
}

export function userFetch(search) {
  return fetch(`${BASE_URL}/forecast.json?key=${key}&q=${search}&days=3`).then(
    resp => {
      if (!resp.ok) {
        new Error(resp.statusText);
      } else {
        return resp.json();
      }
    }
  );
}
