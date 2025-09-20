/*Tasks
Rewrite the "switch" into an "if"
importance: 5
Write the code using if..else which would correspond to the following switch:*/

/*switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}*/

// ======== Solution 1 ========
let browser = prompt('what browser do you have: ', '');
if(browser == 'Edge'){
    console.log('You Have got the Edge!');
}else if(browser == 'Chrome' || browser == 'Safari' || browser == 'Firefox' || browser == 'Opera'){
    console.log('Okay we support these browsers too');
}else{
    console.log('We hope that this page looks ok!');
}

/*Rewrite "if" into "switch"
importance: 4
Rewrite the code below using a single switch statement:

let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}*/

// ======== Solution 2 ========
let a = +prompt('a? : ', '');
switch(a){
    case 0:
    console.log(0);
    break;
    case 1:
        console.log(1);
        break;
        case 2:
            case 3:
                console.log('2,3');
                break;
                default:
                console.log('Unknown value, might be a string or ASCI Char')
                break;
}


