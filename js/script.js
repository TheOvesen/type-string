let concurrentTypeStrings = document.getElementsByClassName("type_string_concurrent");  // These two are for lazy people who just want to put a CSS class on an element and have its content typed out
let staggeredTypeStrings = document.getElementsByClassName("type_string_staggered");    // type_string_concurrent happen simultaneously, type_string_staggered happen one after another
let staggerStrings = [];
let staggerIters = 0;
let delay = 20;             // Delay between symbols in milliseconds
let staggerDelay = delay*5; // Delay between staggered typings starting, also in milliseconds

//////////////////////////////////////////////////////////////
// Probably make the typeString calls in here to keep it clean

//////////////////////////////////////////////////////////////

// Loop through staggered type strings and put their content in the staggerStrings array
for (let element of staggeredTypeStrings)
{
  staggerStrings.push(element.innerHTML);
  element.innerHTML = "";
}

// The interval that ticks through the staggered strings, starting them individually
let staggerBot = setInterval(function() {
  if (staggerIters < staggerStrings.length)
  {
    typeString(staggerStrings[staggerIters], delay, staggeredTypeStrings[staggerIters]);
    staggerIters++;
  }
  else {
    clearInterval(staggerBot);
    staggerIters = 0;
  }
}, staggerDelay);

// Loops through all concurrent type strings and starts typing them
for (let element of concurrentTypeStrings)
{
  let tempString = element.innerHTML;
  element.innerHTML = "";
  typeString(tempString, delay, element);
}

// Takes the given string and uses an interval to tick through it, adding each character to a new string that is then put into the destination (an element)
function typeString(string, speed, destination) {
  let i = 0;
  let displayedString = "";
  let typeyThing = "|";

  let typeBot = setInterval(function() {
    if (i < string.length) {
      displayedString += string[i];
      i++;
    } else {
      clearInterval(typeBot);
      typeyThing = "";
    }

    displayString(displayedString + typeyThing, destination);
  }, speed);
}

// Inputs a given string into a given destination/element
function displayString(string, destination) {
  destination.innerHTML = string;
}
