// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {

  const result = array.map(value => value.director);

  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  const result = array.filter(movie => movie.director == director);

  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  const result = getMoviesFromDirector(array, director);

  console.log("EXERCICE 3 ->", moviesAverage(result));
  return moviesAverage(result);
}

//Contador media notas
function moviesAverage(array) {

  let notas = array.filter(nota => nota.score !== "");
  const mediaNotas = array.reduce((contador, valor) => contador + valor.score / notas.length, 0);

  return Number(mediaNotas.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  const ordenAlfa = array.map(movie => movie.title).sort().slice(0, 20);

  console.log('EJERCICIO 4 ->', ordenAlfa)
  return ordenAlfa;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  const ordenYear = [...array].sort((a, b) => {
    if (a.year == b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });

  console.log('EJERCICIO 5 ->', ordenYear);
  return ordenYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, categoria) {

  const movieCategoria = array.filter(movies => movies.genre.includes(categoria));

  console.log('EJERCICIO 6 ->', moviesAverage(movieCategoria));
  return moviesAverage(movieCategoria);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

  const duracionMin = array.map(movie => {
    let [h, m] = movie.duration.match(/(\d+)/g);
    h = (isNaN(m) && movie.duration.includes('m')) ? h : h * 60;
    m = (isNaN(m)) ? 0 : Number(m);
    return {...movie, duration: h + m};
  })

  console.log('EJERCICIO 7 ->', duracionMin);
  return duracionMin;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}