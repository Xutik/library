let myLibrary = [
    { title: "Legitimizing the Euro- 'polity' and its 'Regime': The Normative Turn in EU Studies. European Journal of Political Theory", 
        author: "Bellamy, R. & Castiglione, D.", 
        pages: "27", 
        read: false },
    { title: "An externally constrained hybrid regime: Hungary in the European Union", 
        author: "Bozóki, A. & Hegedűs, D.", 
        pages: "16", 
        read: true },
    { title: "Survey Article: The Legitimacy Deficits of the European Union", 
        author: "Føllesdal, A.", 
        pages: "28", 
        read: true },
    { title: "Rebordering Europe in the Ukraine War: community building without capacity building", 
        author: "Freudlsperger, C. & Schimmelfennig, F.", 
        pages: "28", 
        read: true },
    { title: "Building strong executives and weak institutions: How European integration contributes to democratic backsliding ", 
        author: "Meyerrose, A. M.", 
        pages: "36", 
        read: true },
    { title: "The Community Trap: Liberal Norms, Rhetorical Action, and the Eastern Enlargement of the European Union", 
        author: "Schimmelfennig, F. ", 
        pages: "33", 
        read: false },    
];
console.log(myLibrary[1].info())

function generateBookStyles() {
    let styles = '';
    books.forEach((book, index) => {
      styles += `
        .book-${index + 1} {
          --title: "${book.title}";
          --author: "${book.author}";
          --pages: "${book.pages}";
        }
      `;
    });
    return styles;
}

const styleElement = document.createElement('style');
styleElement.textContent = generateBookStyles();
document.head.appendChild(styleElement);

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  
    this.info = function() {
      let readStatus = this.isRead ? "read" : "not read yet";
      return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
    };
}
  


