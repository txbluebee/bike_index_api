import './assets/scss/app.scss';
import { bikeData } from './assets/js/bike'
import 'jquery';
import 'bootstrap'; // importing bootstrap.js

import 'bootstrap/scss/bootstrap.scss'; // bootstrap.scss

const list = document.querySelector('.list');

bikeData.then((response)=>{
  const bikes = response.bikes;
  let str = '';
  for(let i=0; i<bikes.length;i++){
    str += `<li>Title: ${bikes[i].title} Color:${bikes[i].frame_colors}</li>`
  }
  list.innerHTML = str;
}).catch((response)=>{
  list.innerHTML = response.error;
})
