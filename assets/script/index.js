'use strict';

const inputFile = document.querySelector('input[type=file]');
const output = document.querySelector('.file-name');

inputFile.addEventListener('change', () => {
  const file = inputFile.files[0];
  const fileName = file.name;
  output.innerText = fileName;
})