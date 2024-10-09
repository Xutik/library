
function Book() {
}

function addBookToLibrary() {
}

function displayBooks() {
    const bookContainer = document.getElementById('book-container');
    bookContainer.innerHTML = ''; // Clear existing content

    myLibrary.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const title = document.createElement('div');
        title.textContent = book.title;
        title.classList.add('book-title');

        const author = document.createElement('div');
        author.textContent = `Author: ${book.author}`;
        author.classList.add('book-author');

        const pages = document.createElement('div');
        pages.textContent = `Pages: ${book.pages}`;
        pages.classList.add('book-pages');

        const status = document.createElement('div');
        status.textContent = book.isRead ? "Read" : "Not read yet";
        status.classList.add('book-status', book.isRead ? 'read' : 'not-read');

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(status);

        bookContainer.appendChild(bookCard);
    });
}

window.onload = displayBooks;

const newBookBtn = document.getElementById('new-book-btn');
const bookDialog = document.getElementById('book-dialog');
const bookForm = document.getElementById('book-form');
const cancelBtn = document.getElementById('cancel-btn');

newBookBtn.addEventListener('click', () => {
  bookDialog.showModal();
});

cancelBtn.addEventListener('click', () => {
  bookDialog.close();
});

bookForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const isRead = document.getElementById('read').checked;

  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);

  displayBooks(); // Update the display with the new book
  bookDialog.close(); // Close the dialog
  bookForm.reset(); // Reset the form fields
});