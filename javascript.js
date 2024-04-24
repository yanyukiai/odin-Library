console.log("Check JS file link");

const myLibrary = []; // Array to store books

// Constructor
function Book(title, author, numOfPages, readStatus) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.readStatus = readStatus;
  this.info = function () {
    console.log(
      this.title +
        " " +
        this.author +
        " " +
        this.numOfPages +
        " " +
        this.readStatus
    );
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks(library, locAtPage) {
  for (const item of library) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");

    // Add book title
    const bookTitle = document.createElement("div");
    bookTitle.classList.add("bookTitle");
    bookTitle.textContent = "Title: " + item.title;
    bookCard.appendChild(bookTitle);

    // Add book author
    const bookAuthor = document.createElement("div");
    bookAuthor.classList.add("bookAuthor");
    bookAuthor.textContent = "Author: " + item.author;
    bookCard.appendChild(bookAuthor);

    // Add book pages
    const bookPages = document.createElement("div");
    bookPages.classList.add("bookPages");
    bookPages.textContent = "Pages: " + item.numOfPages;
    bookCard.appendChild(bookPages);

    // Add book read status
    const bookRead = document.createElement("div");
    bookRead.classList.add("bookRead");
    bookRead.textContent = "Read: " + item.readStatus;
    bookCard.appendChild(bookRead);

    locAtPage.appendChild(bookCard);
  }
}

// Unit Test
function displayArray(arrayToShow) {
  arrayToShow.forEach((item) => console.log(item));
}
console.log("Initial Library:");
displayArray(myLibrary);
const book1 = new Book("River Town", "Peter Hessler", 432, true);
// book1.info();
addBookToLibrary(book1);
console.log("Current Library:");
displayArray(myLibrary);

const bookInLibrary = document.querySelector("#bookInLibrary");
displayBooks(myLibrary, bookInLibrary);
