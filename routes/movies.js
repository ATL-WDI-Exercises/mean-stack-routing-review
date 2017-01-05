var express = require('express');
var router = express.Router();

// Some hardcoded data
const movies = [
  { title: 'movie1' },
  { title: 'movie2' },
  { title: 'movie3' }
];

// INDEX
router.get('/', function(req, res, next) {
  res.json( { movies: movies } );
});

// SHOW
router.get('/:id', function(req, res, next) {
  const id = Number(req.params.id);
  const movie = movies[id - 1];
  res.json( { movie: movie });
});

module.exports = router;
