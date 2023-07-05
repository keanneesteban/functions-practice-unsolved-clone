// FUNCTIONS: arguments and return
// BEFORE YOU START: please read the /exercises-info/e2.md file.

/**
 * ====================================================
 * Create a function that works as follows:
   * The function name is 'rectArea'
   * The function returns the value of the area of a rectangle (sideA * sideB)
   * The function takes 2 parameters (two sides) to calculate the area from
 * rectArea(3, 2) => 6
*/

// Your function code starts here...

function rectArea(sideA, sideB) {
  return sideA * sideB;
}

console.log(rectArea(3, 2));



// Use the function you created above to calculate the areas of 3 rooms
// Assign the results to room1, room2, and room3 variables
// Data for calculation: room1: 4 by 6, room2: 13 by 3, room3: 4 by 8

// Your code goes here:

var room1 = [4, 6];
var room2 = [13, 3];
var room3 = [4, 8];

console.log(rectArea(room1[0], room1[1]));
console.log(rectArea(room2[0], room2[1]));
console.log(rectArea(room3[0], room3[1]));



/**
 * =============================================================
 * Create a function that works as follows:
 * The function name is 'totalRoomsArea'
 * The function takes 3 arguments (3 rooms area values)
 * The function returns the total area of 3 rooms
 * totalRoomsArea(area1, area2, area3) => Number
 * totalRoomsArea(24, 35, 24) => 83
 */

// Your code goes here...

  function totalRoomsArea(area1, area2, area3) {
    return area1 + area2 + area3;
  }

  var room1 = 24;
  var room2 = 39;
  var room3 = 32;
  

  console.log(totalRoomsArea(24, 39, 32));



// Make the function call in the parentheses of the console.log statement.
// Use room1, room2, room3 variables as arguments for the function call
const result = function () {
    console.log(totalRoomsArea(room1, room2, room3));
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-2"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function


// Do not delete or change the lines beneath
const f = {
    rectArea: rectArea || undefined,
    roomVars: [room1 || undefined, room2 || undefined, room3 || undefined],
    totalRoomsArea: totalRoomsArea || undefined,
    result: (room1 && room2 && room3) ? result : undefined,
}
export { f };
