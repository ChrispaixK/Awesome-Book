const addBook = document.querySelector('.classBook');
const title = document.querySelector('#bookTitle');
const author = document.querySelector('#bookAuthor');
const btn = document.querySelector('.submit');

// empty library array for storing book as object
const library = JSON.parse(localStorage.getItem('books') || '[]');

// existing entries
const existingEntries = JSON.parse(localStorage.getItem('books') || '[]');

// Update User Interface dynamically

const updateUI = () => {
  addBook.innerHTML = '';
  library.forEach((data, index) => {
    const classBook = document.createElement('div');
    classBook.classList.add('bookItem');
    const newBookTitle = document.createElement('p');
    newBookTitle.textContent = `${data.title}`;
    const newBookAuthor = document.createElement('p');
    newBookAuthor.textContent = `${data.author}`;
    const button = document.createElement('button');
    button.textContent = 'Remove';
    const separator = document.createElement('hr');

    // remove book function for remove button
    const removeBook = function () {
      library.splice(this, 1);
      localStorage.setItem('books', JSON.stringify(library));
      updateUI(library);
    };

    button.addEventListener('click', removeBook.bind(index));

    classBook.appendChild(newBookTitle);
    classBook.appendChild(newBookAuthor);
    classBook.appendChild(button);
    classBook.appendChild(separator);

    addBook.appendChild(classBook);
  });
};

updateUI();
// add new books in the library and show updated library

btn.addEventListener('click', (e) => {
  e.preventDefault();

  if (title.value && author.value) {
    const book = { title: title.value, author: author.value };
    library.push(book);
    updateUI(library);
    title.value = '';
    author.value = '';
    existingEntries.push(book);
    localStorage.setItem('books', JSON.stringify(existingEntries));
  }
});
