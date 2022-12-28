import { refs } from './refs';
import { getFeatch } from './server-api';
import { create } from './createApi';
import { userFetch } from './server-api';
import { createSearchUser } from './createApi';

getFeatch()
  .then(data => create(data))
  .catch(err => console.log(err));

refs.btn.addEventListener('click', onInput);
function onInput() {
  let userInput = refs.input.value;
  userFetch(userInput)
    .then(createSearchUser)
    .catch(err => console.log(err));

  refs.input.value = '';
}
