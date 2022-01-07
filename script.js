const newBook = document.getElementById('new-book-btn');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('form-modal');
const form = modal.querySelector('#form-body form');
const formTitle = document.querySelector('form #title');
const formAuthor = document.getElementById('author');
const formPages = document.getElementById('pages');
const formRadio = document.getElementById('radio');
const closeButton = document.getElementById('close-form');

let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function closeForm() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

function openForm() {
  modal.classList.add('active');
  overlay.classList.add('active');
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  console.log(myLibrary);
}

function getInput(e) {
  e.preventDefault();

  const title = formTitle.value;
  const author = formAuthor.value;
  const pages = formPages.value;
  let read = radio.firstElementChild.firstElementChild.checked ? true : false;

  const book = new Book(title, author, pages, read);
  addBookToLibrary(book);
}

newBook.addEventListener('click', openForm);
overlay.addEventListener('click', closeForm);
closeButton.addEventListener('click', closeForm);
form.addEventListener('submit', getInput);
