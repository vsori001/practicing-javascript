let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
secretMessage.push('to', 'Program');

const easilyIndex = secretMessage.indexOf('easily');

secretMessage[easilyIndex] = 'right';


secretMessage.shift();

secretMessage.unshift('Programming');

secretMessage.forEach( function( item, index, array ){
  if ( array[index] == 'get' || array[index] == 'right' || array[index] == 'the' || array[index] == 'first' || array[index] == 'time' ) {
    array[index] = 'know';
  }
} );


console.log(secretMessage.join());
