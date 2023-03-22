'use strict';

const user = document.querySelector('.user');
const userInfo = document.querySelector('.user-info');
const inputFile = document.querySelector('input[type=file]');
const output = document.querySelector('.file-name');
const textArea = document.querySelector('.text-area');
const button = document.querySelector('button');
const content = document.querySelector('.content');

inputFile.addEventListener('change', () => {
  const file = inputFile.files[0];
  const fileName = file.name;
  output.innerText = fileName;
});

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
  
  const file = inputFile.files[0];
  const reader = new FileReader();
  
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
  
  username.innerText = userAccount.name;
  date.innerText = new Date().toLocaleDateString();
  text.innerText = textArea.value;
  
  if (inputFile.files.length > 0) {
    reader.readAsDataURL(file);
    
    reader.addEventListener('load', () => {
      const img = document.createElement('img');
      img.src = reader.result;
      image.appendChild(img);
    });
  }
  
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

button.addEventListener('click', () => {
  if(textArea.value.length > 0 || inputFile.files.length > 0) {    
    createPost();
    
    textArea.value = '';
    inputFile.value = '';
    output.innerText = '';
  } else {
    return false;
  };
});

class User {
  #id;
  #name;
  #username;
  #email;
  
  constructor(id, name, username, email) {
    this.#id = id;
    this.#name = name;
    this.#username = username;
    this.#email = email;
  }
  
  get id() {return this.#id};
  get name() {return this.#name};
  get username() {return this.#username};
  get email() {return this.#email};
  
  getInfo() {
    return `ID: ${this.#id} <br> Name: ${this.#name} <br> User: ${this.#username} <br> E-mail: ${this.#email}`;
  }
};

class Subscriber extends User {
  #pages;
  #groups;
  #canMonetize;
  
  constructor(id, name, username, email, pages, groups, canMonetize) {
    super(id, name, username, email);
    this.#pages = pages;
    this.#groups = groups;
    this.#canMonetize = canMonetize;
  }
  
  get pages() {return this.#pages};
  get groups() {return this.#groups};
  get canMonetize() {return this.#canMonetize};
  
  getInfo() {
    return `${super.getInfo()} <br> Pages: ${this.#pages} <br> Groups: ${this.#groups} <br> Can Monetize: ${this.#canMonetize}`;
  }
};

const userAccount = new Subscriber(
  'U1999',
  'Taman Chi Chan',
  'tamanchichan',
  'tamanchichan@gmail.com',
  ['MapleStory', 'League of Legends', 'Valorant'],
  ['Software Developer', 'MITT', 'Winnipeg'],
  true
);

user.addEventListener('click', () => {
  if(userInfo.style.display === 'block') {
    userInfo.style.display = 'none';
  } else {
    userInfo.style.display = 'block';
  }
  userInfo.innerHTML = userAccount.getInfo();
});