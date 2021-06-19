const api_key = 'e7509ab58947f5bf7e54d71f6cd9c4e4'


const button = document.getElementById('searchBttn');
button.addEventListener('click', searchMovie)

function searchMovie() {
  const query = document.getElementById('searchBox').value

  const url = `https://api.themoviedb.org/3/search/movie/?api_key=${api_key}&query=${query}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    getResults(data.results)
  })
}

function getResults(results) {
  
  for (let i = 0; i < results.length; i++) {
    const movie = results[i]

    showResults(movie)
  }
}

function showResults(movie) {
  const offcanvas = document.querySelector('.offcanvas-body') 
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
  <a href="https://www.themoviedb.org/movie/${movie.id}" target="_blank" rel="noopener noreferrer">
    <h5 class="card-header">${movie.original_title}</h5>
    <div class="row card-body">
      <div class="col-4">
        <img src="${checkPoster(movie.poster_path)}" alt="${movie.original_title}" srcset="">
      </div>
      <div class="col-8">
        <p class="card-text">${movie.overview}</p>
      </div>
    </div>
  </a>`

  function checkPoster(path) {
    if (path == null) {
      const placeholder = 'https://placehold.jp/372x558.png'

      return placeholder
    } else {
      return `https://www.themoviedb.org/t/p/w1280/${path}`
    }
  }

  offcanvas.appendChild(card)
}

const closeBtt = document.getElementById('closeBttn')

closeBtt.addEventListener('click', () => {
  const offcanvas = document.querySelector('.offcanvas-body')
  const cards = offcanvas.querySelectorAll('.card')

  for (const card of cards) {
    card.parentNode.removeChild(card)
  }
})