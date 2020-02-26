document.getElementById('submit')
  .onclick = function() {
    // My age
    // const myAge = 31;
    let myAge = document.getElementById('myAge').value;

    // First two years of a dog's life
    let earlyYears = 2;
    earlyYears *= 10.5;

    // Subtracting 2 from my age
    let laterYears = myAge - 2;

    // Calculating the number of dog years after the first two years
    laterYears *= 4;

    // Computing my age in dog years
    let myAgeInDogYears = earlyYears + laterYears;

    // Setting my name to Vanessa and making all its letters lowercase
    // let myName = 'Vanessa'.toLowerCase();
    let myName = document.getElementById('myName').value;

    console.log('My name is ' + myName + '. I am ' + myAge + ' years old in human years which is ' + myAgeInDogYears + ' years old in dog years.');
  };




// Outputting my name, age, and my age in dog years in a sentence.
// console.log('My name is ' + myName + '. I am ' + myAge + ' years old in human years which is ' + myAgeInDogYears + ' years old in dog years.');
