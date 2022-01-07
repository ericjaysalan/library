const newBook = document.getElementById('new-book-btn');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('form-modal');
const closeButton = document.getElementById('close-form');

let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary(name, author, pages, read) {
  // do stuff here
}

function closeForm() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

function openForm() {
  modal.classList.add('active');
  overlay.classList.add('active');
}

newBook.addEventListener('click', openForm);
overlay.addEventListener('click', closeForm);
closeButton.addEventListener('click', closeForm);
