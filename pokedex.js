$(document).ready(function (){
  for (var i = 0; i < 151; i++) {
    $('.pokemon').append(`<img id='${i}' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png">`)

  }

  $('.pokemon').on('click', 'img', function() {
    var i = $(this).attr('id');
    // console.log(i);
    // var pokemon = "https://pokeapi.co/api/v2/pokemon/" + i;
      name(i);
      console.log('name');
      image(i);
      console.log('image');
      $('.pokedex').append('<h2> Types </h2>');
      types(i);
      console.log('types');
      $('.pokedex').append('<h2> Height </h2>');
      height(i);
      console.log('height');
      $('.pokedex').append('<h2> Weight </h2>');
      weight(i);
      console.log('weight');
  });

  function name(i) {
    $.get("https://pokeapi.co/api/v2/pokemon/" + i, function(data) {
      $('.pokedex').append('<h1> ' + data.name + '</h1>');
      // console.log(data.name);
    }, "json");
  }

  function image(i) {
    $('.pokedex').append(`<img id='${i}' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png">`)
    // console.log('image');
  }

  function types(i) {
    $.get("https://pokeapi.co/api/v2/pokemon/" + i, function(data) {
      $('.pokedex').append('<ul>');
      for (j = 0; j < data.types.length; j++) {
        $('.pokedex').append('<li>' + data.types[j].type.name + '</li>');
      }
      $('.pokedex').append('</ul>');
    }, "json");
  }

  function height(i) {
    $.get("https://pokeapi.co/api/v2/pokemon/" + i, function(data) {
      $('.pokedex').apend('<p> ' + data.height + '</p>');
    }, "json");
  }

  function weight(i) {
    $.get("https://pokeapi.co/api/v2/pokemon/" + i, function(data) {
      $('.pokedex').apend('<p> ' + data.weight + '</p>');
    }, "json");
  }



})
