export const getDurations = () => {
  const durations = [];
  for(let timer = 0; timer <=24; timer++) {
    if (timer < 10) {
      durations.push(`0${timer}:00`, `0${timer}:30`);
    } else if (timer < 24) {
      durations.push(`${timer}:00`, `${timer}:30`);
    } else {
      durations.push(`${timer}:00`);
    }
  }

  return durations;
}

export const hoursToMinutes = (time) => {
  const splitTimes = time.split(':');
  return Number(splitTimes[0]) * 60 + Number(splitTimes[1]);
}