const myLibrary = [];

function Book(title, author, pages, read, info) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return title + " by " + author + ", " + pages + ", " + "read? " + read; 
    }
}

function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.querySelector('input[name="read-radio"]:checked').value;
    console.log(title + " " + author + " " + pages + " " + read);

    const book = new Book(title, author, pages, read);
    myLibrary.push(book);

    const displayNewBook = myLibrary.slice(-1);
    const table = document.querySelector('.book-table');
    displayNewBook.forEach((b) => {
        const row = document.createElement('tr');
        
        const titleCell = document.createElement('td');
        const authorCell = document.createElement('td');
        const pagesCell = document.createElement('td');
        const readCell = document.createElement('td');

        titleCell.textContent = b.title;
        row.appendChild(titleCell);

        authorCell.textContent = b.author;
        row.appendChild(authorCell);

        pagesCell.textContent = b.pages;
        row.appendChild(pagesCell);

        readCell.textContent = b.read;
        row.appendChild(readCell);
        table.appendChild(row);
    })
}

function displayBooks() {
    const table = document.querySelector('.book-table');
    myLibrary.forEach((b) => {
        const row = document.createElement('tr');
        
        const titleCell = document.createElement('td');
        const authorCell = document.createElement('td');
        const pagesCell = document.createElement('td');
        const readCell = document.createElement('td');

        titleCell.textContent = b.title;
        row.appendChild(titleCell);

        authorCell.textContent = b.author;
        row.appendChild(authorCell);

        pagesCell.textContent = b.pages;
        row.appendChild(pagesCell);

        readCell.textContent = b.read;
        row.appendChild(readCell);
        table.appendChild(row);
    })
}

const form = document.getElementById('form');
form.addEventListener("submit", (e) => {
    addBookToLibrary();
})


const addBook = document.querySelector('.add-book');
const showForm = document.getElementById('show-form');

addBook.addEventListener("click", () => {
    showForm.showModal();
})

const book1 = new Book("The Hobbit", "J.R. Tolkien", 295, "yes");
const book2 = new Book("The Hobbit", "J.R. Tolkien", 295, "yes");
const book3 = new Book("The Hobbit", "J.R. Tolkien", 295, "yes");
const book4 = new Book("The Hobbit", "J.R. Tolkien", 295, "yes");
const book5 = new Book("The Hobbit", "J.R. Tolkien", 295, "yes");

console.log(typeof book1);
console.log(book1.title);

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);
myLibrary.push(book5);

displayBooks();