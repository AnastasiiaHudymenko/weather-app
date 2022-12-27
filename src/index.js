import { refs } from './refs';
import { API_KEY } from './server-api';
import { getFeatch } from './server-api';
import { create } from './createApi';
import { userFetch } from './server-api';

getFeatch()
  .then(response => response.json())
  .then(data => create(data));

refs.btn.addEventListener('click', onInput);
function onInput() {
  let userInput = refs.input.value;
  userFetch(userInput)
    .then(res => res.json())
    .then(create);
  refs.input.value = '';
}
