import './assets/scss/app.scss';
import { Bike } from './assets/js/bike'
import 'jquery';
import 'bootstrap'; // importing bootstrap.js

import 'bootstrap/scss/bootstrap.scss'; // bootstrap.scss

const list = document.querySelector('.list');

let bikeData = new Bike();
const defaultBikeData = bikeData.getBikeData('Trek');


function  displayBikeData(response){
  response.then((response)=>{
    const bikes = response.bikes;
    let str = '';
    bikes.forEach((bike)=>{
      str += `<li>Title: ${bike.title}</li> Make: ${bike.manufacturer_name}`
    });
    list.innerHTML = str;
  }).catch((response)=>{
    list.innerHTML = response.error;
  })
}

displayBikeData(defaultBikeData);
