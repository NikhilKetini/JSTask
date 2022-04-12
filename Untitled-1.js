const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];
let par;
let strokes;
function golfScore(par, strokes) {
  // Only change code below this line
  let message;
  if (strokes == 1) {
    message = names[0];
  } else if (strokes <= par - 2) {
    message = names[1];
  } else if (strokes == par - 1) {
    message = names[2];
  } else if (strokes == par) {
    message = names[3];
  } else if (strokes == par + 1) {
    message = names[4];
  } else if (strokes == par + 2) {
    message = names[5];
  } else {
    message = names[6];
  }
  return message;
  // Only change code above this line
}

console.log(golfScore(5, 4));
console.log(typeof par);
