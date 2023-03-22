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
    
  //   content.appendChild(div);
  //   div.classList.add('post');
    
  //   const post = document.querySelector('.post');
  //   post.appendChild(div1);
  //   div1.classList.add('post-header', 'flex');
    
  //   post.appendChild(div2);
  //   div2.classList.add('post-main');
    
  //   const postHeader = document.querySelector('.post-header');
  //   postHeader.appendChild(div3);
  //   div3.classList.add('post-header-column-1')
  //   postHeader.appendChild(div4);
  //   div4.classList.add('post-header-column-2');
    
  //   const postHeaderColumn1 = document.querySelector('.post-header-column-1');
  //   postHeaderColumn1.appendChild(div5);
  //   div5.classList.add('user');
  //   postHeaderColumn1.appendChild(div6);
  //   div6.classList.add('username');
    
  //   const postHeaderColumn2 = document.querySelector('.post-header-column-2');
  //   postHeaderColumn2.appendChild(div7);
  //   div7.classList.add('date');
    
  //   const postMain = document.querySelector('.post-main');
  //   postMain.appendChild(div8);
  //   div8.classList.add('text');
  //   postMain.appendChild(div9);
  //   div9.classList.add('img');
    
  // inputFile.addEventListener('change', () => {
  //   const file = inputFile.files[0];
  //   const reader = new FileReader();
  //   reader.addEventListener('load', () => {
  //     const image = new Image();
  //     image.src = reader.result;
  //     div9.appendChild(image);
  //   });
  //   reader.readAsDataURL(file);
  // });
  
  // div8.innerHTML = text.value;
  // div9.innerHTML = inputFile.value;
    
  //   content.insertBefore(div, content.firstChild);
  // };

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
    postHeader.classList.add('post-header');
    postHeaderColumn1.classList.add('post-header-column-1');
    postHeaderColumn2.classList.add('post-header-column-2');
    user.classList.add('user');
    username.classList.add('username');
    postMain.classList.add('post-main');
    text.classList.add('text');
    image.classList.add('img');
    
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