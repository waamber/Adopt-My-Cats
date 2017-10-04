'use strict';
const cats = require('./cats');
const dom = require('./dom');

$('#inputText').keypress((e) => {
  if (e.key === 'Enter') {
    let catInput = $('#inputText').val();
    cats.getCats(catInput);
    hideInput();
  }
});

$('#goBtn').click(() => {
  let catInput = $('#inputText').val();
  cats.getCats(catInput);
  hideInput();
});

$('#disableBtn').click(() => {
  $('.disabled-kitty').parent().parent().addClass('hidden');

});

const hideInput = () => {
  $('#inputText, #goBtn').addClass('hidden');
  $('#disableBtn').removeClass('hidden');
};

module.exports = { hideInput };



