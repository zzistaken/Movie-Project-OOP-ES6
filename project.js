const form = document.getElementById("movieForm");
const titleInput = document.getElementById("movieNameInput");
const directorInput = document.getElementById("movieDirectorInput");
const bannerInput = document.getElementById("movieBannerInput");
const cardBody = document.querySelectorAll(".card-body")[2];
const clearButton = document.getElementById("clearMoviesButton");
//  UI Object
const ui = new UI();
// Storage Onject
const storage = new Storage();
// Load All Events
eventListeners();

function eventListeners() {
  form.addEventListener("submit", addMovie);
  document.addEventListener("DOMContentLoaded", function () {
    let movies = storage.getMoviesFromStorage();

    ui.loadAllMovies(movies);
  });
  cardBody.addEventListener("click", deleteMovie);
  clearButton.addEventListener("click", clearMovies);
}
function addMovie(e) {
  const title = titleInput.value.trim();
  const director = directorInput.value.trim();
  const banner = bannerInput.value.trim();

  if (title === "" || director === "" || banner === "") {
    // Error
    ui.showAlert("Please fill in all fields in the form!", "danger");
  } else {
    // New Movie
    const newMovie = new Movie(title, director, banner);
    ui.addMovieToUi(newMovie);
    storage.addMovieToStorage(newMovie);
    ui.showAlert("New movie added to the list!", "success");
  }
  ui.clearInputs(titleInput, directorInput, bannerInput);
  e.preventDefault();
}
function deleteMovie(e) {
  if (e.target.id === "deleteMovieButton") {
    ui.deleteMovieFromUi(e.target.parentElement.parentElement);
    storage.deleteMovieFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling.textContent.trim()
    );
    ui.showAlert("Movie deleted from the list!", "success");
  }
}
function clearMovies(e) {
  if (confirm("Are you sure you want to clear the whole list?")) {
    ui.clearMoviesFromUi();
    storage.clearMoviesFromStorage();
    ui.showAlert("The movie list is cleared!", "success");
  }
}
