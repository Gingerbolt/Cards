$(document).ready(function() {
  var suits = [" of Clubs", " of Spades", " of Diamonds", " of Hearts"]
  var numbers = [" Ace", " Two", " Three", " Four", " Five", " Six", " Seven", " Eight", " Nine", " Ten", " Jack", " Queen", " King"]

  var deck = []
  suits.forEach(function(suit) {
    numbers.forEach(function(item) {
      $("ul.deck").append("<li>" + item + suit + "</li>");
    });
  });

  // alert(deck)
});
