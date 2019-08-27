let typeStrings = document.getElementsByClassName("type_string");
let defaultTypespeed = 20; // Default delay between symbols in milliseconds, used if nothing is input

//////////////////////////////////////////////////////////////
// Probably make the typeString calls in here to keep it clean

//////////////////////////////////////////////////////////////

// Loops through all type strings, gets their attributes and starts typing them when applicable
for (let element of typeStrings) {
  let startDelay;
  let typeSpeed;

  // Get the start delay, default if undefined
  if (element.attributes.startdelay === undefined) {
    startDelay = 0;
  } else {
    startDelay = Number(element.attributes.startdelay.value);
  }

  // Get the typespeed, default if undefined
  if (element.attributes.typespeed === undefined) {
    typeSpeed = defaultTypespeed;
  } else {
    typeSpeed = Number(element.attributes.typespeed.value);
  }

  // Put element contents in a temporary string and clear the element for typing, then start the typing with appropriate delays
  let tempString = element.innerHTML;
  element.innerHTML = "";
  if (startDelay <= 0 || startDelay === undefined) {
    typeString(tempString, typeSpeed, element);
  } else {
    setTimeout(function() {
      typeString(tempString, typeSpeed, element);
    }, startDelay);
  }
}

// Types a given string with the given speed into the given destination (an element)
function typeString(string, speed, destination) {
  let i = 0;
  let displayedString = "";
  let typeyThing = "|";

  // Loop through the string one character at a time, and concat it to the displayed string
  let typeBot = setInterval(function() {
    if (i < string.length) {
      displayedString += string[i];
      i++;
    } else {
      clearInterval(typeBot);
      typeyThing = "";
    }

    // Input the displayed string into the DOM
    destination.innerHTML = displayedString + typeyThing;
  }, speed);
}
