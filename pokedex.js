$(document).ready(function (){
  for (var i = 0; i < 151; i++) {
    $('.pokemon').append(`<img id='${i}' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png">`)
  }

  function getPokemon(id, func) {
    $.get("https://pokeapi.co/api/v2/pokemon/" + id, function(data) {
      func(data);
    }, "json");
  }

  function image(i) {
    $('.pokedex').append(`<img id='${i}' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png">`)
  }

  $('.pokemon').on('click', 'img', function() {
    var i = $(this).attr('id');
    $('.pokedex').empty();
    getPokemon(i, function(pokemon){
      // do stuff with the pokemon
      image(i);
      $('.pokedex').append('<h1> ' + pokemon.name + '</h1>');
      $('.pokedex').append('<h2> Types </h2>');
      $('.pokedex').append('<ul>');
      for (j = 0; j < pokemon.types.length; j++) {
        $('.pokedex').append('<li>' + pokemon.types[j].type.name + '</li>');
      }
      $('.pokedex').append('</ul>');
      $('.pokedex').append('<h2> Height </h2>');
      $('.pokedex').append('<p> ' + pokemon.height + '</p>');
      $('.pokedex').append('<h2> Weight </h2>');
      $('.pokedex').append('<p> ' + pokemon.weight + '</p>');
    });

  });

})
