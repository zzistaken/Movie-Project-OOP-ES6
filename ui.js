class UI {
  static addMovieToUi(newMovie) {
    const list = document.getElementById("movieList");

    list.innerHTML += `<tr>
      <td>
          <img
              style="max-width: 100px; border-radius: 0.5rem; border: 2px solid gray;"
              src="${newMovie.banner}"
              alt="${newMovie.title}"
          />
      </td>
      <td>${newMovie.title}</td>
      <td>${newMovie.director}</td>
      <td>
          <i id="deleteMovieButton" class="fa-regular fa-trash-can text-danger" style="cursor: pointer;"></i>
      </td>
     </tr>`;
  }
  static clearInputs(e1, e2, e3) {
    e1.value = "";
    e2.value = "";
    e3.value = "";
  }
  static showAlert(message, type) {
    const alertArea = document.getElementById("alertArea");
    const newAlert = document.createElement("div");

    newAlert.className = `alert alert-${type} mb-0`;
    newAlert.textContent = message;
    alertArea.appendChild(newAlert);
    setTimeout(() => {
      newAlert.remove();
    }, 1500);
    //
  }
  static loadAllMovies(movies) {
    const list = document.getElementById("movieList");

    movies.forEach((movie) => {
      list.innerHTML += `<tr>
      <td>
          <img
              style="max-width: 100px; border-radius: 0.5rem; border: 2px solid gray;"
              src="${movie.banner}"
              alt="${movie.title}"
          />
      </td>
      <td>${movie.title}</td>
      <td>${movie.director}</td>
      <td>
          <i id="deleteMovieButton" class="fa-regular fa-trash-can text-danger" style="cursor: pointer;"></i>
      </td>
     </tr>`;
    });
  }
  static deleteMovieFromUi(movie) {
    movie.remove();
  }
  static clearMoviesFromUi() {
    const list = document.getElementById("movieList");

    while (list.firstElementChild != null) {
      list.removeChild(list.firstElementChild);
    }
  }
}
