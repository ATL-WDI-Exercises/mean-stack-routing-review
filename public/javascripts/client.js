angular.module('moviesApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: "/",
      template: "<h3>The Home Route</h3>"
    })
		.state('movies', {
			url: "/movies",
			templateUrl: "/templates/movies.html",
      controller: "moviesController",
      controllerAs: "$ctrl"
		})
    .state('movies-show', {
      url: "/movies/:id",
      templateUrl: "/templates/movies-show.html",
      controller: "moviesShowController",
      controllerAs: "$ctrl"
    });

  $urlRouterProvider.otherwise("/");
})
.controller('moviesController', function($http) {
  this.movies = [];
  $http.get('/api/movies')
  .then( (response) => {
    this.movies = response.data.movies;
  })
  .catch(function(err) {
    alert(err);
  });
})
.controller('moviesShowController', function($http, $stateParams) {
  this.movie = {};
  const id = $stateParams.id;
  console.log('getting movie with id=', id);
  $http.get('/api/movies/' + id)
  .then( (response) => {
    this.movie = response.data.movie;
  })
  .catch(function(err) {
    alert(err);
  });

  this.rating = null;
  $http.get('/api/movies/' + id + '/ratings')
  .then( (response) => {
    this.rating = response.data.rating;
  })
  .catch(function(err) {
    alert(err);
  });
})


// .component('movies', {
//   template: '<h1>Here are some Movies</h1>',
//   controller: function() {
//     console.log('movies controller is alive!');
//   }
// });
