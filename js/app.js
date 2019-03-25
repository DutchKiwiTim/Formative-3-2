// 1. Input search query
// 2. Return X amount of books (max 40)
// 3. Loop through results and filter by: pagecount, published date, 


const resultBody = document.querySelector('.result-body');
const searchBook = document.getElementById('searchBook');
const searchBookInput = document.getElementById('searchBookInput');
let currentBookInModal;


// EVENT LISTENERS
searchBook.addEventListener('submit', searchFindBooks);


// RANDOMISE BOOK - STEP 1 - Get max amount of books from api
function searchFindBooks(e) {
  const searchTerm = searchBookInput.value;
  fetch('https://www.googleapis.com/books/v1/volumes?q=' + searchTerm + '&maxResults=40', {
      method: 'get',
    })
    .then(response => { return response.json(); })
    .then(data => {

      const resultsArr = data.items;
      // console.log(data.items)
      filterResults(resultsArr);
    });

e.preventDefault();
}


// RANDOMISE BOOK - STEP 2 - Filter array
function filterResults(r) {
  r.forEach(result => {


  const filteredArr = r;
    
  });
  randomiseBook(filteredArr);
}


// RANDOMISE BOOK - STEP 3 - Randomise
function randomiseBook(r) {

  const randomBook = r[Math.floor(Math.random()*r.length)];
  console.log(randomBook);
}


// RANDOMISE BOOK - STEP 4 - Prepare UI elements
function searchShowBooks() {
  // remove previous search results if any
  while (searchResults.firstChild) {
    searchResults.removeChild(searchResults.firstChild);
  }
  const bookTitle = volumeInfo.title;
  const BookAuthor = volumeInfo.authors[0];
  const BookThumb = volumeInfo.imageLinks.thumbnail;
  const BookPageCount = volumeInfo.pageCount;
  const BookLink = volumeInfo.canonicalVolumeLink;        
  let subtitle = volumeInfo.subtitle;
  let Bookdescription = volumeInfo.description;
  if (!subtitle) {
    subtitle = 'No subtitle found for this book.';
  }
  if (!Bookdescription) {
    Bookdescription = 'No description found for this book';
  }
  
  createModalContent(bookTitle, BookAuthor, isbn, BookThumb, Bookdescription, BookPageCount, BookLink, subtitle);
}


// RANDOMISE BOOK - STEP 5 - Create UI
function createModalContent(a, b, c, d, e, f, g, h) {

  const contentDiv = document.createElement('div');
  contentDiv.innerHTML = `
  <div id="modal-book-details" class="row mb-3">
    <div class="col">
          <ul class="list-group list-group-flush modal-content-list-titles mr-1">
            <li class="list-group-item"><h5>${a}</h5><p class="font-italic mb-0 mt-2">"${h}"</p></li>
            <li class="list-group-item"><span class="font-weight-bold">Author:</span> ${b}</li>
            <li class="list-group-item"><span class="font-weight-bold">ISBN:</span> ${c}</li>
            <li class="list-group-item"><span class="font-weight-bold">Pages:</span> ${f}</li>
            <li class="list-group-item"><span class="font-weight-bold">Full Details:</span> <a href="${g}" target="_blank">Google Books</a></li>
            <li class="list-group-item"><span class="font-weight-bold">Buy From:</span> <a href="amazon.com" target="_blank">Amazon</a> | <a href="https://www.fishpond.co.nz" target="_blank">Fishpond</a> | <a href="https://www.mightyape.co.nz/books" target="_blank">Mighty Ape</a></li>
          </ul>
    </div>  
  <div class="col-md-4 col-lg-3 mt-4 mt-md-0">
    <img class="modal-content-thumbnail" src="${d}">
  </div>
  <div class="modal-content-description p-4">
    <p>${e}</p>
  </div>
  `;
  resultBody.appendChild(contentDiv);
}
