const form = document.getElementById("movieForm");
const titleInput = document.getElementById("movieNameInput");
const directorInput = document.getElementById("movieDirectorInput");
const bannerInput = document.getElementById("movieBannerInput");
const cardBody = document.querySelectorAll(".card-body")[2];
const clearButton = document.getElementById("clearMoviesButton");

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addMovie);
  document.addEventListener("DOMContentLoaded", function () {
    let movies = Storage.getMoviesFromStorage();

    UI.loadAllMovies(movies);
  });
  cardBody.addEventListener("click", deleteMovie);
  clearButton.addEventListener("click", clearMovies);
}
function addMovie(e) {
  const title = titleInput.value.trim();
  const director = directorInput.value.trim();
  const banner = bannerInput.value.trim();

  if (title === "" || director === "" || banner === "") {
    UI.showAlert("Please fill in all fields in the form!", "danger");
  } else {
    const newMovie = new Movie(title, director, banner);
    UI.addMovieToUi(newMovie);
    Storage.addMovieToStorage(newMovie);
    UI.showAlert("New movie added to the list!", "success");
  }
  UI.clearInputs(titleInput, directorInput, bannerInput);
  e.preventDefault();
}
function deleteMovie(e) {
  if (e.target.id === "deleteMovieButton") {
    UI.deleteMovieFromUi(e.target.parentElement.parentElement);
    Storage.deleteMovieFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling.textContent.trim()
    );
    UI.showAlert("Movie deleted from the list!", "success");
  }
}
function clearMovies(e) {
  if (confirm("Are you sure you want to clear the whole list?")) {
    UI.clearMoviesFromUi();
    Storage.clearMoviesFromStorage();
    UI.showAlert("The movie list is cleared!", "success");
  }
}
