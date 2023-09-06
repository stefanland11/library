const myLibrary = [];

function Book(title, author, pages, read, info, toggleRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return title + " by " + author + ", " + pages + ", " + "read? " + read; 
    }
    this.toggleRead = function() {
        if(this.read === 'Yes') {
            this.read = 'No';
        }

        else if(this.read === 'No') {
            this.read = 'Yes';
        }
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
    
    clearTable();
    displayBooks();
}

function displayBooks() {
    const table = document.querySelector('.book-table');
    myLibrary.forEach((b, index) => {
        const row = document.createElement('tr');
        row.classList.add('book-row');
        
        const titleCell = document.createElement('td');
        const authorCell = document.createElement('td');
        const pagesCell = document.createElement('td');
        const readCell = document.createElement('td');
        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        const readToggleCell = document.createElement('td');
        const readToggleButton = document.createElement('button');

        titleCell.textContent = b.title;
        row.appendChild(titleCell);

        authorCell.textContent = b.author;
        row.appendChild(authorCell);

        pagesCell.textContent = b.pages;
        row.appendChild(pagesCell);

        readCell.textContent = b.read;
        row.appendChild(readCell);

        readToggleButton.textContent = 'Read?';
        readToggleButton.setAttribute('data-index-number', index);
        readToggleButton.addEventListener('click', () => {
            const index = readToggleButton.getAttribute('data-index-number');
            myLibrary[index].toggleRead();
            clearTable();
            displayBooks();
        })

        row.appendChild(readToggleCell);
        readToggleCell.appendChild(readToggleButton);

        deleteButton.textContent = 'Delete Book';
        deleteButton.setAttribute('data-index-number', index);
        deleteButton.addEventListener('click', () => {
            deleteBook(deleteButton.getAttribute('data-index-number'));
        })
        row.appendChild(deleteCell);
        
        deleteCell.appendChild(deleteButton);
        table.appendChild(row);
    })
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    console.log(myLibrary);
    clearTable();
    displayBooks();
}

function clearTable() {
   document.querySelectorAll('.book-row').forEach(e => e.remove());
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

const book1 = new Book("The Hobbit1", "J.R. Tolkien", 295, "Yes");
const book2 = new Book("The Hobbit2", "J.R. Tolkien", 295, "No");
const book3 = new Book("The Hobbit3", "J.R. Tolkien", 295, "Yes");
const book4 = new Book("The Hobbit4", "J.R. Tolkien", 295, "No");
const book5 = new Book("The Hobbit5", "J.R. Tolkien", 295, "Yes");

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);
myLibrary.push(book5);

displayBooks();

