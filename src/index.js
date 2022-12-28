import { refs } from './refs';
import { getFeatch } from './server-api';
import { createStaticWeatther } from './createApi';
import { userFetch } from './server-api';
import { createSearchUser } from './createApi';

getFeatch()
  .then(data => createStaticWeatther(data))
  .catch(err => console.log(err));

refs.btn.addEventListener('click', onInput);
function onInput() {
  let userInput = refs.input.value;
  userFetch(userInput)
    .then(createSearchUser)
    .catch(err => console.log(err));

  refs.input.value = '';
}
refs.btnArrow.addEventListener('click', onClickBtn);

// function onClickBtn() {
//   refs.list.forEach((el, i) => {});
//   console.log(refs.list[1]);
//   refs.list[1].classList.add('list-info__item--current');
// }
