const newBook = document.getElementById('new-book-btn');
const library = document.getElementById('library');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('form-modal');
const form = modal.querySelector('#form-body form');
const formTitle = document.querySelector('form #title');
const formAuthor = document.getElementById('author');
const formPages = document.getElementById('pages');
const formRadio = document.getElementById('radio');
const closeButton = document.getElementById('close-form');

let libraryObjects = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  static cardCounter = 0;

  createCard() {
    const card = document.createElement('div');

    const firstDiv = document.createElement('div');
    const secondDiv = document.createElement('div');
    const thirdDiv = document.createElement('div');

    const titleDiv = document.createElement('div');
    const deleteButton = document.createElement('button');

    const titleHeading = document.createElement('h3');
    const authorHeading = document.createElement('h3');
    const pagesHeading = document.createElement('h3');

    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');

    const label1 = document.createElement('label');
    const label2 = document.createElement('label');
    const radio1 = document.createElement('input');
    const radio2 = document.createElement('input');

    card.className = 'book';

    firstDiv.className = 'top-div';
    secondDiv.className = 'author';
    thirdDiv.className = 'pages';

    titleHeading.innerText = 'Title';
    authorHeading.innerText = 'Author';
    pagesHeading.innerText = 'Pages';

    title.innerText = this.title;
    author.innerText = this.author;
    pages.innerText = this.pages;

    titleDiv.className = 'title';
    deleteButton.className = 'delete-book';
    deleteButton.innerHTML = '&times;';

    label1.setAttribute('for', `read${Book.cardCounter}`);
    label2.setAttribute('for', `not-read${Book.cardCounter}`);

    radio1.setAttribute('type', 'radio');
    radio1.setAttribute('id', `read${Book.cardCounter}`);
    radio1.setAttribute('name', `read-book${Book.cardCounter}`);

    radio2.setAttribute('type', 'radio');
    radio2.setAttribute('id', `not-read${Book.cardCounter}`);
    radio2.setAttribute('name', `read-book${Book.cardCounter}`);

    if (this.read) radio1.setAttribute('checked', true);
    else radio2.setAttribute('checked', true);

    firstDiv.appendChild(titleDiv);
    titleDiv.appendChild(titleHeading);
    titleDiv.appendChild(title);
    firstDiv.appendChild(deleteButton);
    secondDiv.appendChild(authorHeading);
    secondDiv.appendChild(author);
    thirdDiv.appendChild(pagesHeading);
    thirdDiv.appendChild(pages);

    label1.appendChild(radio1);
    label2.appendChild(radio2);
    label1.appendChild(document.createTextNode(' Read'));
    label2.appendChild(document.createTextNode(' Not Read'));

    card.appendChild(firstDiv);
    card.appendChild(secondDiv);
    card.appendChild(thirdDiv);
    card.appendChild(label1);
    card.appendChild(label2);

    library.appendChild(card);
    Book.cardCounter++;

    deleteButton.addEventListener('click', () => {
      const thisIndex = libraryObjects.findIndex((obj) => obj === this);
      libraryObjects.splice(thisIndex, 1);
      card.remove();
    });

    radio1.addEventListener('click', () => (this.read = true));
    radio2.addEventListener('click', () => (this.read = false));
  }
}

function resetForm() {
  formTitle.value = '';
  formAuthor.value = '';
  formPages.value = '';
  formRadio.firstElementChild.firstElementChild.checked = true;
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
  libraryObjects.push(book);
  book.createCard();
}

function getInput(e) {
  e.preventDefault();

  const title = formTitle.value;
  const author = formAuthor.value;
  const pages = formPages.value;
  let read = radio.firstElementChild.firstElementChild.checked ? true : false;

  const book = new Book(title, author, pages, read);
  addBookToLibrary(book);
  resetForm();
  closeForm();
}

newBook.addEventListener('click', openForm);
overlay.addEventListener('click', closeForm);
closeButton.addEventListener('click', closeForm);
form.addEventListener('submit', getInput);
