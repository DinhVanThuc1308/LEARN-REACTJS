function leapYears(year) {
  if (year < 0) {
    return 0;
  }
  if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    console.log("Leap years");
  } else {
    console.log("not leap years");
  }
}
year = 1500;
leapYears(year);
