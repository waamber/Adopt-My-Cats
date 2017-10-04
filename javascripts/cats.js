'use strict';
const dom = require('./dom');
let catData = [];

const getCats = (catInput) => {
  $.get(`https://random-dogs-api.herokuapp.com/cats/${catInput}`)
    .done((data) => {
      catData = data.cats;
      dom.createCatCard(catData);
    })
    .fail((error) => {
      console.log(error);
    });
};

module.exports = { getCats };