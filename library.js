const newBookBtn = document.getElementById('new-book-btn');
const bookDialog = document.getElementById('book-dialog');
const bookForm = document.getElementById('book-form');
const cancelBtn = document.getElementById('cancel-btn');

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks(); 
}
function toggleReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks(); 
}
window.onload = displayBooks;

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  
    this.info = function() {
      let readStatus = this.read ? "read" : "not read";
      return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
    };
}

let myLibrary = [
    { 
        title: "Legitimizing the Euro- 'polity' and its 'Regime': The Normative Turn in EU Studies. European Journal of Political Theory", 
        author: "Bellamy, R. & Castiglione, D.", 
        pages: "27", 
        read: false,
        info:  function() {
            let readStatus = this.read ? "read" : "not read";
            return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
        },
        removeBook: removeBook,
        toggleReadStatus: toggleReadStatus,
    },
    { 
        title: "An externally constrained hybrid regime: Hungary in the European Union", 
        author: "Bozóki, A. & Hegedűs, D.", 
        pages: "16", 
        read: true,
        info:  function() {
            let readStatus = this.read ? "read" : "not read";
            return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
        },
        removeBook: removeBook,
        toggleReadStatus: toggleReadStatus,
    },
    { 
        title: "Survey Article: The Legitimacy Deficits of the European Union", 
        author: "Føllesdal, A.", 
        pages: "28", 
        read: true,
        info:  function() {
            let readStatus = this.read ? "read" : "not read";
            return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
        },
        removeBook: removeBook,
        toggleReadStatus: toggleReadStatus,
    },
    { 
        title: "Rebordering Europe in the Ukraine War: community building without capacity building", 
        author: "Freudlsperger, C. & Schimmelfennig, F.", 
        pages: "28", 
        read: true,
        info:  function() {
            let readStatus = this.read ? "read" : "not read";
            return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
        },
        removeBook: removeBook,
        toggleReadStatus: toggleReadStatus,
    },
    { 
        title: "Building strong executives and weak institutions: How European integration contributes to democratic backsliding ", 
        author: "Meyerrose, A. M.", 
        pages: "36", 
        read: true,
        info:  function() {
            let readStatus = this.read ? "read" : "not read";
            return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
        },
        removeBook: removeBook,
        toggleReadStatus: toggleReadStatus,
    },
    { 
        title: "The Community Trap: Liberal Norms, Rhetorical Action, and the Eastern Enlargement of the European Union", 
        author: "Schimmelfennig, F. ", 
        pages: "33", 
        read: false,
        info:  function() {
            let readStatus = this.read ? "read" : "not read";
            return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
        },
        removeBook: removeBook,
        toggleReadStatus: toggleReadStatus,
    }    
]
// console.log(myLibrary[1].info())

bookForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    displayBooks();
    bookDialog.close();
    bookForm.reset();
});

function displayBooks() {
    const bookContainer = document.getElementById('book-container');
    bookContainer.innerHTML = ''; 

    myLibrary.forEach((book, index) => {
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
        status.textContent = book.read ? "Read" : "Not read";
        status.classList.add('book-status', book.read ? 'read' : 'not-read');

        const toggleReadBtn = document.createElement('button');
        toggleReadBtn.textContent = 'Change Read Status';
        toggleReadBtn.classList.add('toggle-read-btn');
        toggleReadBtn.addEventListener('click', () => toggleReadStatus(index));

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
        removeButton.addEventListener('click', () => removeBook(index));

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(status);
        bookCard.appendChild(toggleReadBtn);
        bookCard.appendChild(removeButton);

        bookContainer.appendChild(bookCard);
    });
}

newBookBtn.addEventListener('click', () => {
  bookDialog.showModal();
});

cancelBtn.addEventListener('click', () => {
  bookDialog.close();
});