var stringPrinter = function( starterString ){
  $('#output').append( starterString )
}

var funnySentence = function( noun, adjective, verb, adverb ){
  var sentence = `<p>The ${adjective} ${noun} ${verb} ${adverb}.</p>`
stringPrinter(sentence) }


//random word generator
//remove inputs

var randNumBetween0and4 = function() {
var randomNum = Math.floor(Math.random() * 4)
  return randomNum
}


var randomWordGenerator = function(){
var nouns = ['car', 'cat', 'table', 'Tv', 'eclipse']
var adjectives = ['quiet', 'loud', 'brass', 'tiny', 'cloudy']
var verbs = ['ran', 'stopped', 'looked', 'grew', 'breaks']
var adverbs = ['forcfully', 'longingly', 'wistfully', 'slowly', 'quickly']
var randomWordObject = {
 randomNoun : nouns[randNumBetween0and4()],
 randomAdjective : adjectives [randNumBetween0and4()],
 randomVerb : verbs [randNumBetween0and4()],
 randomAdverb : adverbs [randNumBetween0and4()],
}
return randomWordObject
}




var autoFunnySentence = function() {
var randomWordObject = randomWordGenerator()
funnySentence( randomWordObject.randomNoun, randomWordObject.randomAdjective,
  randomWordObject.randomVerb,
  randomWordObject.randomAdverb)


}

autoFunnySentence()



var fn = function () {
  console.log('heyyyy')
}

document.querySelector('#target').addEventListener('click', fn)
document.querySelector('#target').addEventListener('click', function() {
  console.log('same deal')
})

$('div').on('click', function() { console.log('A div has been clicked!')})

$('div').on('click', function(){
  console.log('A div has been clicked!')
})

// shortcut
$('p').click(function(){
  $('p').show().css('color', 'red').text('boom goes the dynamite!')
})


// $('li').on('mouseover', function(){
//   var target= event.target
//   console.log(event)
//   $(target).addClass('highlighted')
// })
// $('li').on('mouseleave', function(){
//   var target= event.target
//   $(target).removeClass('highlighted')
// })



$('li').on('mouseover', function(){
  $(this).addClass('highlighted')
})
$('li').on('mouseleave', function(){
  $(this).removeClass('highlighted')
})
