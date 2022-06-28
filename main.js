// const addBook = document.querySelector('.classBook');
// const title = document.querySelector('#bookTitle');
// const author = document.querySelector('#bookAuthor');
// const btn = document.querySelector('.submit');

// // empty library array for storing book as object
// const library = JSON.parse(localStorage.getItem('books') || '[]');

// // existing entries
// const existingEntries = JSON.parse(localStorage.getItem('books') || '[]');

// // Update User Interface dynamically

// const updateUI = () => {
//   addBook.innerHTML = '';
//   library.forEach((data, index) => {
//     const classBook = document.createElement('div');
//     classBook.classList.add('bookItem');
//     const newBookTitle = document.createElement('p');
//     newBookTitle.textContent = `${data.title}`;
//     const newBookAuthor = document.createElement('p');
//     newBookAuthor.textContent = `${data.author}`;
//     const button = document.createElement('button');
//     button.textContent = 'Remove';
//     const separator = document.createElement('hr');

//     // remove book function for remove button
//     const removeBook = function () {
//       library.splice(this, 1);
//       localStorage.setItem('books', JSON.stringify(library));
//       updateUI(library);
//     };

//     button.addEventListener('click', removeBook.bind(index));

//     classBook.appendChild(newBookTitle);
//     classBook.appendChild(newBookAuthor);
//     classBook.appendChild(button);
//     classBook.appendChild(separator);

//     addBook.appendChild(classBook);
//   });
// };

// updateUI();
// // add new books in the library and show updated library

// btn.addEventListener('click', (e) => {
//   e.preventDefault();

//   if (title.value && author.value) {
//     const book = { title: title.value, author: author.value };
//     library.push(book);
//     updateUI(library);
//     title.value = '';
//     author.value = '';
//     existingEntries.push(book);
//     localStorage.setItem('books', JSON.stringify(existingEntries));
//   }
// });


/********************IMPLEMENT USING CLASS START HERE ***************/


class ListOfBooks {
  constructor() {
    this.books = (localStorage.myBooks != null) ? JSON.parse(localStorage.myBooks) : [];
  }

  newBook() {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    if (title.value === '' || author.value === '') {
      alert('Please fill in all fields');
    } else {
      this.books.push({ title: title.value, author: author.value });
      this.updateLocalStorage();
    }
  }

  removeBook(id) {
    this.books.splice(id, 1);
    this.updateLocalStorage();
  }

  showBooks() {
    const books = document.getElementById('books');
    books.innerHTML = '';
    let id = 0;

    this.books.forEach((book) => {
      books.innerHTML += `
      <li>
        <p>${book.title}</p>
        <p>${book.author}</p>
        <button onClick="myBooks.removeBook(${id})">Remove</button>
      </li>`;
      id += 1;
    });
  }

  updateLocalStorage() {
    localStorage.myBooks = JSON.stringify(this.books);
    this.showBooks();
  }
}

const myBooks = new ListOfBooks();
