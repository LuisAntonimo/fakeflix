window.onload = () => {
  const api_key = 'e7509ab58947f5bf7e54d71f6cd9c4e4'

  const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}&language=pt-BR&page=1`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    const movies = Array.from(data.results).slice(0, 4)

    for (let i = 0; i < movies.length; i++) {
      const movie = movies[i];
      
      createCard(movie);
    }
  })

}

function createCard(movie) {
  const filmCards = document.querySelector('.film_cards')

  const card = document.createElement('div');
  card.className = 'col-12 col-sm-12 col-md-3 col-lg-3 card-transparent';

  card.innerHTML = `
  <a href="https://www.themoviedb.org/movie/${movie.id}" target="_blank" rel="noopener noreferrer">
  <img class="card-img" src="https://www.themoviedb.org/t/p/w1280/${movie.poster_path}" alt="${movie.original_title}">
  </a>`
  
  filmCards.appendChild(card)
}

