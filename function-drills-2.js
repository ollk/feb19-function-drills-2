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
