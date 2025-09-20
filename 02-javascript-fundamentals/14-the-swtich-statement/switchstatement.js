// The "switch" statement
// ==> Need notes or references check on https://javascript.info/switch

// A switch statement can replace multiple if checks.
// It gives a more descriptive way to compare a value with multiple variants.

// The syntax
// The switch has one or more case blocks and an optional default.

// An example
// An example of switch (the executed code is highlighted):
let a = 2 + 2;
switch(a) {
    // the switch starts to compare a from the first case
    case 3:
        alert('Too Small');
        break;
        // The match fails.
        case 4:
            alert("Exactly..!"); // Then 4. That’s a match,
            break; // the execution starts from case 4 until the nearest break.
            case 5:
                alert('Too big');
                break;
                default:
                alert("i Dont Know such values");
                // If there is no break then the execution continues with the next case without any checks.
}


// An example without break:
let b = 3 + 3;
switch(b) {
    case 2:
        alert('first case');
        case 3:
            alert('second case');
            case 5:
                alert("third case");
                case 6:
                    alert("Exact Case");
                    // In the example above we’ll see sequential execution 
}

// Any expression can be a switch/case argument
// Both switch and case allow arbitrary expressions.
let c = 1;
let d = 0;
switch(+c){ //Here +c gives 1
    case d + 1: //that’s compared with d + 1 in case
    // the corresponding code is executed.
        console.log('this runs, because +c is 1, exactly equals d+1');
        break;
        default:
        console.log("this doesn't run");
}

// Grouping of “case”
// Several variants of case which share the same code can be grouped.
// For example, if we want the same code to run for case 3 and case 5:
let f = 3;
switch(f) {
    case 4:
        alert('Right!');
        break;
        // (*) grouped two cases
        case 3:
        case 5:
            // Now both 3 and 5 show the same message.
            alert('Wrong!');
            alert('Why dont you take a math class?');
            break;
            default:
                alert('The result is strange. Really.')
}
// The ability to “group” cases is a side effect of how switch/case works without break

// Type matters
// Let’s emphasize that the equality check is always strict. The values must be of the same type to match.
// For example, 
let arg = prompt('enter an argument');
switch(arg) {
    case '0':
        case '1':
            alert("Zero or One"); //For 0, 1, the first alert runs.
            break;
            case '2':
                alert("Two"); // For 2 the second alert runs.
                break;
                case 3:
                    alert('never Executes');
                    break;
                    default:
                    alert("Unknown value");
}
//But for 3, the result of the prompt is a string "3", which is not strictly equal === to the number 3. So we’ve got a dead code in case 3! The default variant will execute.

//                               Finished
// Please include more references concerning the `switch` statement. For additional review resources, see: https://javascript.info/switch