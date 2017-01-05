var express = require('express');
var router = express.Router();

// Some hardcoded data
const movies = [
  { id: 1, title: 'movie1' },
  { id: 2, title: 'movie2' },
  { id: 3, title: 'movie3' }
];

const ratings = [
  93,
  74,
  23
]

// INDEX
router.get('/', function(req, res, next) {
  res.json( { movies: movies } );
});

// SHOW
router.get('/:id', function(req, res, next) {
  const id = Number(req.params.id);
  const movie = movies[id - 1];
  res.json( { movie: movie } );
});

// RATINGS FOR A MOVIE
router.get('/:id/ratings', function(req, res, next) {
  const id = Number(req.params.id);
  const rating = ratings[id - 1];
  res.json( { rating: rating } );
});

module.exports = router;
