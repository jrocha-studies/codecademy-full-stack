function getSleepHours(day) {
  const weekDay = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const choosenDay = isNaN(day) ? day.toLowerCase() : weekDay[day];
  switch (choosenDay) {
    case weekDay[0]:
      return 7.5;
      break;
    case weekDay[1]:
      return 8;
      break;
    case weekDay[2]:
      return 7.9;
      break;
    case weekDay[3]:
      return 7.8;
      break;
    case weekDay[4]:
      return 7.7;
      break;
    case weekDay[5]:
      return 7.6;
      break;
    case weekDay[6]:
      return 5;
      break;
    default:
      return 10000;
  }
  getSleepHours();
}
const choosenDay = Math.floor(Math.random() * 7);
console.log('Choosen Day: ' + choosenDay + '\n');
console.log(getSleepHours(choosenDay));

const getActualSleepHours = () =>
  getSleepHours('Monday') +
  getSleepHours('Tuesday') +
  getSleepHours('Wednesday') +
  getSleepHours('Thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday');

console.log('----------');
console.log('Total hours:');
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours * 7;
};

console.log('----------');
console.log('Ideal hours:');
console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const difference = getActualSleepHours() - getIdealSleepHours();
  if (difference === 0) {
    console.log('User got the perfect amount of sleep.');
  } else if (difference > 0) {
    console.log(`User got ${difference} more sleep than needed.`);
  } else {
    console.log(`User should get some rest. At least ${-difference} more hours.`);
  }
};

calculateSleepDebt();
