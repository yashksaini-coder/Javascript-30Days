$(document).ready(() => {
    $("#searchForm").on("submit", (event) => {
        let searchText = $("#searchText").val();
        getMovies(searchText);
        event.preventDefault();
    });
});

function getMovies(searchText) {
    axios
        .get(`http://www.omdbapi.com/?i=tt3896198&apikey=3a43dcb5&s=${searchText}`)
        .then((response) => {
            let movies = response.data.Search;
            let output = "";
            $.each(movies, (index, movie) => {
                output += `
                <div class="col-md-3">
                    <div class="card text-center" style="border: none;">
                        <img src="${movie.Poster}"/>
                        <h5>${movie.Title}</h5>
                        <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-dark" href="#">Movie Details</a>
                    </div>
                </div>`;
            });
            $("#movies").html(output);
        })
        .catch((error) => {
            console.log(error);
        });
}

function movieSelected(id) {
    sessionStorage.setItem("movieId", id);
    window.location = "movie.html";
    return false;
}

function getMovie() {
    let movieId = sessionStorage.getItem("movieId");

    axios
        .get(`http://www.omdbapi.com/?i=${movieId}&apikey=3a43dcb5`)
        .then((response) => {
            let movie = response.data;

            let output = `
                <div class="row">
                    <div class="col-md-4">
                        <img src="${movie.Poster}" class="img-thumbnail">
                    </div>
                    <div class="col-md-8">
                        <h2>${movie.Title}</h2>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Genre: </strong> ${movie.Genre}</li>
                        <li class="list-group-item"><strong>Released: </strong> ${movie.Released}</li>
                        <li class="list-group-item"><strong>Rated: </strong> ${movie.Rated}</li>
                        <li class="list-group-item"><strong>IMDB Rating: </strong> ${movie.imdbRating}</li>
                        <li class="list-group-item"><strong>Director: </strong> ${movie.Director}</li>
                        <li class="list-group-item"><strong>Writer: </strong> ${movie.Writer}</li>
                        <li class="list-group-item"><strong>Actors: </strong> ${movie.Actors}</li>
                        <li class="list-group-item"></li>
                        </ul>
                    </div>
                </div>
                <div class="row pt-4">
                    <div class="card">
                        <h3>Plot</h3>
                        ${movie.Plot}
                        <hr>
                        <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-dark">View IMDB</a>
                        <a href="index.html" class="btn btn-default">Go Back To Search</a>
                    </div>
                </div>
            `;

            $("#movie").html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}
