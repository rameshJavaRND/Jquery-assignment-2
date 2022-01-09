$( "div" ).click(function() {
  var color = $( this ).css( "background-color" );
  $( "p" ).html( "That div is " + color + "." );
});
