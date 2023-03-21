'use strict';

const inputFile = document.querySelector('input[type=file]');
const output = document.querySelector('.file-name');

// inputFile.addEventListener('change', () => {
//   const file = inputFile.files[0];
//   const reader = new FileReader();
//   reader.addEventListener('load', () => {
//     const image = new Image();
//     image.src = reader.result;
//     document.body.appendChild(image); // Append the image to the body
//   });
//   reader.readAsDataURL(file);
// });

inputFile.addEventListener('change', () => {
  const file = inputFile.files[0];
  const fileName = file.name;
  output.innerText = fileName;
});

const text = document.querySelector('textarea');
const button = document.querySelector('button');
const content = document.querySelector('.content');

const div = document.createElement('div');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');
const div5 = document.createElement('div');
const div6 = document.createElement('div');
const div7 = document.createElement('div');
const div8 = document.createElement('div');
const div9 = document.createElement('div');

button.addEventListener('click', () => {
  function createPost() {
    // const div = document.createElement('div');
    // const div1 = document.createElement('div');
    // const div2 = document.createElement('div');
    // const div3 = document.createElement('div');
    // const div4 = document.createElement('div');
    // const div5 = document.createElement('div');
    // const div6 = document.createElement('div');
    // const div7 = document.createElement('div');
    // const div8 = document.createElement('div');
    // const div9 = document.createElement('div');
    
    content.appendChild(div).classList.add('post');
    
    const post = document.querySelector('.post');
    post.appendChild(div1).classList.add('post-header', 'flex');
    post.appendChild(div2).classList.add('post-main');
    
    const postHeader = document.querySelector('.post-header');
    postHeader.appendChild(div3).classList.add('post-header-column-1')
    postHeader.appendChild(div4).classList.add('post-header-column-2');
    
    const postHeaderColumn1 = document.querySelector('.post-header-column-1');
    postHeaderColumn1.appendChild(div5).classList.add('user');
    postHeaderColumn1.appendChild(div6).classList.add('username');
    
    const postHeaderColumn2 = document.querySelector('.post-header-column-2');
    postHeaderColumn2.appendChild(div7).classList.add('date');
    
    const postMain = document.querySelector('.post-main');
    postMain.appendChild(div8).classList.add('text');
    postMain.appendChild(div9).classList.add('img');
    
    inputFile.addEventListener('change', () => {
      const file = inputFile.files[0];
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        const image = new Image();
        image.src = reader.result;
        div9.appendChild(image); // Append the image to the body
      });
      reader.readAsDataURL(file);
    });
    
    div8.innerHTML = text.value;
    div9.innerHTML = inputFile.value;
    
    content.insertBefore(div, content.firstChild);
  };
  createPost();
});

// function createPost() {
//   const div = document.createElement('div');
//   const div1 = document.createElement('div');
//   const div2 = document.createElement('div');
//   const div3 = document.createElement('div');
//   const div4 = document.createElement('div');
//   const div5 = document.createElement('div');
//   const div6 = document.createElement('div');
//   const div7 = document.createElement('div');
//   const div8 = document.createElement('div');
//   const div9 = document.createElement('div');
  
//   content.appendChild(div).classList.add('post');
  
//   const post = document.querySelector('.post');
//   post.appendChild(div1).classList.add('post-header', 'flex');
//   post.appendChild(div2).classList.add('post-main');
  
//   const postHeader = document.querySelector('.post-header');
//   postHeader.appendChild(div3).classList.add('post-header-column-1')
//   postHeader.appendChild(div4).classList.add('post-header-column-2');
  
//   const postHeaderColumn1 = document.querySelector('.post-header-column-1');
//   postHeaderColumn1.appendChild(div5).classList.add('user');
//   postHeaderColumn1.appendChild(div6).classList.add('username');
  
//   const postHeaderColumn2 = document.querySelector('.post-header-column-2');
//   postHeaderColumn2.appendChild(div7).classList.add('date');
  
//   const postMain = document.querySelector('.post-main');
//   postMain.appendChild(div8).classList.add('text');
//   postMain.appendChild(div9).classList.add('img');
  
//   div8.innerHTML = text.value;
//   div9.innerHTML = new FileReader(inputFile);
  
//   content.insertBefore(div, content.firstChild);
// };

// button.addEventListener('click', createPost);