let raceNumber = Math.floor(Math.random() * 1000);

let runnerRegisteredEarly = false;

let runnerAge = 18;

if (runnerAge >= 18 && runnerRegisteredEarly) {
  raceNumber += 1000;
  console.log('You will race at 9:30 am. Your race number: ' + raceNumber);
} else if (runnerAge >= 18 && !runnerRegisteredEarly) {
  console.log('Late adults run at 11:00 am. Your race number: ' + raceNumber);
} else if (runnerRegisteredEarly) {
  console.log('Youth registrants run at 12:30. Your race number: ' + raceNumber);
} else {
  console.log(
    'youth registrant not registered early? Shame on you. Your race number: ' + raceNumber,
  );
}
