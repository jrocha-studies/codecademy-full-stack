// aff
const MYAGE = 17;
let myAgeInDogYears = 0;

if (MYAGE <= 2) {
  // first two years of a dogs life count as 10.5 human years each.
  myAgeInDogYears = MYAGE * 10.5;
} else {
  // each eyear following equates to 4 human years
  // earlyYears and laterYears together
  myAgeInDogYears = 2 * 10.5 + (MYAGE - 2) * 4;
}

const MYNAME = 'Jota Rocha'.toLowerCase();
console.log(
  `My name is ${MYNAME}. I am ${MYAGE} years old in human years, wich is ${myAgeInDogYears} years old in dog years.`,
);
