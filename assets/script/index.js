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

const textarea = document.querySelector('textarea');
const button = document.querySelector('button');
const content = document.querySelector('.content');

// button.addEventListener('click', () => {  
//   function createPost() {
//     const post = document.createElement('div');
//     const header = document.createElement('div');
//     const user = document.createElement('div');
//     const username = document.createElement('div');
//     const date = document.createElement('div');
//     const content = document.createElement('div');
//     const text = document.createElement('div');
//     const image = document.createElement('div');
    
//     post.classList.add('post');
//     header.classList.add('post-header');
//     user.classList.add('user');
//     username.classList.add('username');
//     date.classList.add('date');
//     content.classList.add('post-main');
//     text.classList.add('text');
//     image.classList.add('img');
    
//     header.appendChild(user);
//     header.appendChild(date);
//     user.appendChild(username);
//     post.appendChild(header);
//     post.appendChild(content);
//     content.appendChild(text);
//     content.appendChild(image);
    
//     username.textContent = 'Username'; // replace with actual username
//     date.textContent = new Date().toLocaleDateString(); // current date
    
//     content.innerHTML = `
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum tempor erat eget molestie. Vivamus in est vel magna tincidunt blandit.</p>
//       <img src="https://picsum.photos/200" alt="Placeholder image">
//     `;
    
//     const container = document.querySelector('.container'); // replace with the appropriate container element
//     container.insertBefore(post, container.firstChild);
//   }
  
//   createPost();
// });

button.addEventListener('click', () => {
  function createPost() {
    const post = document.createElement('div');
    const postHeader = document.createElement('div');
    const postHeaderColumn1 = document.createElement('div');
    const user = document.createElement('div');
    const username = document.createElement('div');
    const postHeaderColumn2 = document.createElement('div');
    const date = document.createElement('div');
    const postMain = document.createElement('div');
    const text = document.createElement('div');
    const image = document.createElement('div');
    
    
    
    post.classList.add('post');
    postHeader.classList.add('post-header', 'flex');
    postHeaderColumn1.classList.add('post-header-column-1');
    user.classList.add('user');
    username.classList.add('username');
    postHeaderColumn2.classList.add('post-header-column-2');
    date.classList.add('date');
    postMain.classList.add('post-main');
    text.classList.add('text');
    image.classList.add('img');
    
    date.innerHTML = new Date().toDateString().slice(4);
    
    content.appendChild(post);
    post.appendChild(postHeader);
    post.appendChild(postMain);
    postHeader.appendChild(postHeaderColumn1);
    postHeaderColumn1.appendChild(user);
    postHeaderColumn1.appendChild(username);
    postHeader.appendChild(postHeaderColumn2);
    postHeaderColumn2.appendChild(date);
    postMain.appendChild(text);
    postMain.appendChild(image);
    
    content.insertBefore(post, content.firstChild);
  };
  createPost();
});