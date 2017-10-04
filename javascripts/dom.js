"use strict";
const cats = require('./cats');

const createCatCard = (catData) => {
  let catString = '';
  for (let i = 0; i < catData.length; i++) {
    var newCat = "";
    newCat += `<div class="cat-card col-md-4">`;
    newCat += `<div class="image-container">`;
    newCat += `<img src="${catData[i].imageUrl}">`;
    newCat += `</div>`;
    newCat += `<div class="description-container">`;
    newCat += `<div class="name"><h3> ${catData[i].name}</h3></div>`;
    newCat += `<p> Color: ${catData[i].color} </p>`;
    newCat += `<p> Skills: ${catData[i].specialSkill} </p>`;
    if (catData[i].numberOfToes >= 10) {
      newCat += `<p class="disabled-kitty">Toes: ${catData[i].numberOfToes}</p>`;
    } else {
      newCat += `<p>Toes: ${catData[i].numberOfToes}</p>`;
    }
    newCat += `</div>`;
    newCat += `</div>`;
    catString += newCat;
    printToDom(catString);
  }
};

const printToDom = (catString) => {
  $('#cat-container').html(catString);
};

module.exports = { printToDom, createCatCard };