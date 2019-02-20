'use strict';
function jediName(firstName, lastName) {
  let name = '';
  for (let i = 0; i < 3; i++) {
    name += lastName.charAt(i);  
  }  
  for (let i = 0; i < 2; i++) {
    name += firstName.charAt(i);  
  }
  return name;
}

jediName('Scott', 'Williams');


function beyond(num) {
  if (isFinite(num) === true) {
    if (Math.sign(num) === 1) {
      console.log('To infinity');
    }
    else if (Math.sign(num) === -1) {
      console.log('To negative infinity');
    }
    else {console.log('Staying home');}
  }
  else {console.log('And beyond');}
}


function decode(word) {
  if (word[0] === 'a') {
    return word[1];
  }
  else if (word[0] === 'b') {
    return word[2];
  }
  else if (word[0] === 'c') {
    return word[3];
  }
  else if (word[0] === 'd') {
    return word[4];
  }
  else {return ' ';}
}


function howManyDays(month, leapYear) {
  if (leapYear === true && month === 'February') {
    return 'February has 29 days';
  }
  else {
    let days = '';
    switch(month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      days = 'has 31 days';
      break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      days = 'has 30 days';
      break;
    case 'February':
      days = 'has 28 days';
      break;
    default:
      throw Error('Must provide a valid month');
    }
    return `${month} ${days}`;
  }
}


//Trying to make it call out the moves, so i moved randomNo out for scope.
//Now it stays the same until I refresh.
const randomNo = Math.floor(Math.random() * 3) + 1;

function rockPaperScissors(playerNo) {
  if (playerNo < 1 || playerNo > 3 || typeof playerNo !== 'number' || playerNo % 1 !== 0) {
    throw Error ('Please enter number between 1 and 3');
  }
  else if (playerNo === randomNo) {
    return 'Tie';
  } 
  else if (playerNo + randomNo === 4) {
    if (playerNo === 1) {
      return 'Player Wins';
    }
    else {return 'Computer Wins';}
  }
  else if (playerNo > randomNo) {
    return 'Player Wins';
  }
  else if (randomNo > playerNo) {
    return 'Computer Wins';
  }
}

function call(anyNo) {
  if (anyNo > 2) {
    return 'Scissors';
  }
  else if (anyNo < 2){
    return 'Rock';
  }
  else {return 'Paper';}
}

function play(playerNo) { 
  console.log(`Player plays ${call(playerNo)}, Computer plays ${call(randomNo)}, ${rockPaperScissors(playerNo)}`);
}