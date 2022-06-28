/** ******************IMPLEMENT USING CLASS START HERE ************** */

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
      title.value = '';
      author.value = '';
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

  // load books if local storage not empty
  bookOnLoad() {
    const books = document.getElementById('books');
    books.innerHTML = '';
    let id = 0;
    if (localStorage.length > 0) {
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
  }
}

const myBooks = new ListOfBooks();

// load already existing books in the local storage

myBooks.bookOnLoad();