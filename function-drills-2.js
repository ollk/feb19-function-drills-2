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