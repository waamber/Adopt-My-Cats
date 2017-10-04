'use strict';
const cats = require('./cats');
const dom = require('./dom');
//create hide input


$('#inputText').keypress((e) => {
  if (e.key === 'Enter') {
    let catInput = $('#inputText').val();
    cats.getCats(catInput);
  }

});

$('#goBtn').click(() => {
  let catInput = $('#inputText').val();
  cats.getCats(catInput);
});

module.exports = {};



