// 01. Solve Me First

var solveMeFirst = function(a, b) {
  return a + b;
};

// 02. Multiply

var multiply = function(a, b) {
  return a * b;
};

// 03. Even or Odd

var evenOrOdd = function(number) {
  return number % 2 === 0 ? "Even" : "Odd";
};

// 04. Return Negative

var makeNegative = function(number) {
  return number > 0 ? -number : number;
};

// 05. Opposite Number

var opposite = function(number) {
  return -number;
};

// 06. Simple Array Sum

var simpleArraySum = function(ar) {
  return ar.reduce((sum, current) => sum + current, 0);
};

// 07. sleepIn

var sleepIn = function(weekday, vacation) {
  return !weekday || vacation;
};

// 08. monkeyTrouble

var monkeyTrouble = function(aSmile, bSmile) {
  return aSmile === bSmile;
};

// 09. sumDouble

var sumDouble = function(a, b) {
  if (a === b) {
    return (a + b) * 2;
  }
  return a + b;
};

// 10. diff21

var diff21 = function(n) {
  if (n > 21) {
    return (n - 21) * 2;
  }
  return 21 - n;
};