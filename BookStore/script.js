const books = [
    {
        id: 1,
        title: "The Great Algorithm",
        author: "Ada Lovelace",
        price: 24.99,
        category: "Technology",
        image: "https://placehold.co/400x600/2c3e50/white?text=Algorithm"
    },
    {
        id: 2,
        title: "Design Systems 101",
        author: "Dieter Rams",
        price: 39.50,
        category: "Design",
        image: "https://placehold.co/400x600/e67e22/white?text=Design"
    },
    {
        id: 3,
        title: "Cosmic Horizons",
        author: "Carl Sagan",
        price: 18.75,
        category: "Science",
        image: "https://placehold.co/400x600/8e44ad/white?text=Cosmos"
    },
    {
        id: 4,
        title: "The Silent Ocean",
        author: "Rachel Carson",
        price: 15.00,
        category: "Nature",
        image: "https://placehold.co/400x600/27ae60/white?text=Ocean"
    },
    {
        id: 5,
        title: "Future Cities",
        author: "Zaha Hadid",
        price: 45.00,
        category: "Architecture",
        image: "https://placehold.co/400x600/34495e/white?text=Cities"
    },
    {
        id: 6,
        title: "Mastering JS",
        author: "Brendan Eich",
        price: 29.99,
        category: "Technology",
        image: "https://placehold.co/400x600/f1c40f/black?text=JS"
    }
];

const bookListRow = document.getElementById('book-list-row');

function displayBooks() {
    bookListRow.innerHTML = '';

    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        
        const colDiv = document.createElement('div');
        colDiv.className = 'col-12 col-md-6 col-lg-4';

        colDiv.innerHTML = `
            <div class="card border-0 shadow-sm">
                <img src="${book.image}" class="card-img-top book-cover" alt="${book.title}">
                <div class="card-body d-flex flex-column">
                    <div class="mb-2">
                        <span class="badge bg-secondary">${book.category}</span>
                    </div>
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">By ${book.author}</p>
                    <div class="mt-auto d-flex justify-content-between align-items-center">
                        <span class="price-tag">$${book.price.toFixed(2)}</span>
                        <button class="btn btn-primary btn-sm">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;

        bookListRow.appendChild(colDiv);
    }
}

document.addEventListener('DOMContentLoaded', displayBooks);