function Storage() {}
Storage.prototype.addMovieToStorage = function (newMovie) {
  let movies = this.getMoviesFromStorage();

  movies.push(newMovie);
  localStorage.setItem("movies", JSON.stringify(movies));
};
Storage.prototype.getMoviesFromStorage = function () {
  let movies;

  if (localStorage.getItem("movies") === null) {
    movies = [];
  } else {
    movies = JSON.parse(localStorage.getItem("movies"));
  }
  return movies;
};
Storage.prototype.deleteMovieFromStorage = function (deleteMovie) {
  let movies = this.getMoviesFromStorage();

  movies.forEach((movie, index) => {
    if (movie.title.trim() === deleteMovie) {
      movies.splice(index, 1);
    }
  });
  localStorage.setItem("movies", JSON.stringify(movies));
};
Storage.prototype.clearMoviesFromStorage = function () {
  localStorage.removeItem("movies");
};
