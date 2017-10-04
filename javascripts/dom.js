"use strict";
const cats = require('./cats');

const createCatCard = (catData) => {
  let catString = '';
  for (let i = 0; i < catData.length; i++) {
    let newCat = `<div class="cat-card">
                    <div class="image-container">
                      <img src="${catData[i].imageURL}">
                    </div>
                    <div class="description-container">
                      <h3>Name: ${catData[i].name}</h3>
                      <p>Color: ${catData[i].color}</p>
                      <p>Skills: ${catData[i].specialSkill}</p>
                      <p class="disabled-cat"> Toes: ${catData[i].numberOfToes}</p>
                     </div>
                  </div>`;
    catString += newCat;
  }
  printToDom(catString);
};

const printToDom = (catString) => {
  $('#cat-container').html(catString);
};

module.exports = { printToDom, createCatCard };