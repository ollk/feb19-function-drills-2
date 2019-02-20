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