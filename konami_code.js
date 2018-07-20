const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;

  document.body.addEventListener('keydown', function(e) { //addEventListener looking for the 'keydown' event, and run the function on each of the inputs
    const key = parseInt(e.which || e.detail); // set a const by looking at the element passed in by the keydown event and parseInt to control for string being passed by eventListener

    if (code[index] === key) { // if the value stored in the code array at index value index, is equal to the passed in keydown value that's gone through the parseInt process, then increase the index value by one.
      index++;

      if (index === code.length) { // if the value of index that was just increased above (until last number in code is checked for a match) is equal to the length of the code array, then pop up the alert because it's a match and you get the free lives
        alert('Hurray!');

        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
