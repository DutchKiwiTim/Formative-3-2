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

      // console.log(data.items);
       randomiseBook(data.items);
    });

e.preventDefault();
}


// RANDOMISE BOOK - STEP 2 - Randomise
function randomiseBook(r) {

  const randomBook = r[Math.floor(Math.random()*r.length)];
  console.log(randomBook);
  searchShowBooks(randomBook);
}


// RANDOMISE BOOK - STEP 3 - Prepare UI elements
function searchShowBooks(b) {
  // remove previous search results if any
  while (resultBody.firstChild) {
    resultBody.removeChild(resultBody.firstChild);
  }
  const bookTitle = b.volumeInfo.title;
  const BookAuthor = b.volumeInfo.authors;
  const BookThumb = b.volumeInfo.imageLinks.thumbnail;
  const BookPageCount = b.volumeInfo.pageCount;
  const BookLink = b.volumeInfo.canonicalVolumeLink;        
  let subtitle = b.volumeInfo.subtitle;
  let Bookdescription = b.volumeInfo.description;
  if (!subtitle) {
    subtitle = 'No subtitle found for this book.';
  }
  if (!Bookdescription) {
    Bookdescription = 'No description found for this book';
  }
  
  createModalContent(bookTitle, BookThumb, BookAuthor, Bookdescription, BookPageCount, BookLink, subtitle);
}

// RANDOMISE BOOK - STEP 4 - Create UI
function createModalContent(a, d, c, e, f, g, h) {

  const contentDiv = document.createElement('div');
  contentDiv.innerHTML = `
  <div class="result-container m-5 p-4">
    <div id="modal-book-details" class="row mb-3 mt-3">
      <div class="col">
            <ul class="list-group list-group-flush modal-content-list-titles mr-1">
              <li class="list-group-item"><h5>${a}</h5><p class="font-italic mb-0 mt-2">"${h}"</p></li>
              <li class="list-group-item"><span class="font-weight-bold">Author:</span> ${c}</li>
              <li class="list-group-item"><span class="font-weight-bold">Pages:</span> ${f}</li>
              <li class="list-group-item"><span class="font-weight-bold">Full Details:</span> <a href="${g}" target="_blank">Google Books</a></li>
              <li class="list-group-item"><span class="font-weight-bold">Buy From:</span> <a href="amazon.com" target="_blank">Amazon</a> | <a href="https://www.fishpond.co.nz" target="_blank">Fishpond</a> | <a href="https://www.mightyape.co.nz/books" target="_blank">Mighty Ape</a></li>
            </ul>
      </div>  
    <div class="col-md-4 col-lg-3 mt-4 mt-md-0">
      <img class="modal-content-thumbnail" src="${d}">
    </div>
    <div class="modal-content-description p-4 col-12">
      <p class="col-9 description">${e}</p>
    </div>
  </div>
  `;
  resultBody.appendChild(contentDiv);
}