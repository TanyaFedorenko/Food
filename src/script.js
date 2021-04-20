import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc' ;
import forms from './modules/forms';
import slider from './modules/slider';


window.addEventListener('DOMContentLoaded', () => {


tabs();
modal();
timer();
cards();
calc();
forms();
slider();


     /* //Применение библиотеки axios
axios.get('http://localhost:3000/menu')
.then(data => {
data.data.forEach(function ({
img,
altimg,
title,
descr,
price
}) {
new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
});
});*/
     //form-server Form DATA/JSON
     //form



/*/  fetch(' http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));

*/


});