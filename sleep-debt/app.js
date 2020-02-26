const getSleepHours = (day) => {
  switch (day) {
    case 'Monday':
      return 4;
      break;
    case 'Tuesday':
      return 6;
      break;
    case 'Wednesday':
      return 8;
      break;
    case 'Thursday':
      return 10;
      break;
    case 'Friday':
      return 3;
      break;
    case 'Saturday':
      return 8;
      break;
    case 'Sunday':
      return 5;
      break;
  }
}

const getActualSleepHours = () => 4 + 6 + 8 + 10 + 3 + 8 + 5;

const getIdealSleepHours = (idealHours) => idealHours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(5);

  if (actualSleepHours === idealSleepHours) {
    console.log(`You got the perfect amount of sleep. ${actualSleepHours} hours.`);
  }
  else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' more hours of sleep than you needed.');
  }
  else {
    console.log('You need ' + (idealSleepHours - actualSleepHours) + ' more hours of sleep! Go get some rest.');
  }
}

calculateSleepDebt();
