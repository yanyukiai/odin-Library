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
  // Clear current display to avoid duplicate books in screen
  while (locAtPage.firstChild) {
    locAtPage.removeChild(locAtPage.firstChild);
  }
  // Display all books in library
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

// Initial Library
const book1 = new Book("River Town", "Peter Hessler", 432, "Yes");
const book2 = new Book("Oracle", "Peter Hessler", 500, "Yes");
addBookToLibrary(book1);
addBookToLibrary(book2);

// Display initial library
const bookInLibrary = document.querySelector("#bookInLibrary");
displayBooks(myLibrary, bookInLibrary);

// Open new book dialog
const newBookDialog = document.querySelector("#newBookDialog");
const newBookBtn = document.querySelector("#newBookBtn");
const confirmNewBookBtn = newBookDialog.querySelector("#confirmNewBookBtn");
const cancelNewBookBtn = newBookDialog.querySelector("#cancelNewBookBtn");

const bookTitle = document.querySelector("#bookTitle");
const bookAuthor = document.querySelector("#bookAuthor");
const bookPages = document.querySelector("#bookPages");
const bookRead = document.querySelector("#bookRead");

newBookBtn.addEventListener("click", () => {
  // Clear current inputs
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = 0;
  bookRead.value = "No";
  // Open the dialog to input new book info
  newBookDialog.showModal();
});

// Confirm to add a new book
confirmNewBookBtn.addEventListener("click", (e) => {
  if (bookTitle.value !== "" && bookAuthor.value !== "") {
    e.preventDefault(); // No need to submit the form
    const newBook = new Book(
      bookTitle.value,
      bookAuthor.value,
      bookPages.value,
      bookRead.value
    );
    // Add book to myLibrary
    addBookToLibrary(newBook);
    // Display library
    displayBooks(myLibrary, bookInLibrary);
    newBookDialog.close(); // close the dialog
  }
});

cancelNewBookBtn.addEventListener("click", (e) => {
  newBookDialog.close(); // bypass the validation check
});

// Unit Test
// function displayArray(arrayToShow) {
//   arrayToShow.forEach((item) => console.log(item));
// }
// console.log("Initial Library:");
// displayArray(myLibrary);

// book1.info();

// console.log("Current Library:");
// displayArray(myLibrary);
