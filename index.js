/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
console.log("---------EX1---------");

const sumOfTwoInts = function (x, y) {
  const sum = x + y;
  if (x === y) {
    return 3 * sum;
  } else {
    return sum;
  }
};

console.log(sumOfTwoInts(5, 5));

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
console.log("---------EX2---------");

const ex2 = function (x, y) {
  let sum = x + y;
  if (sum === 50 || x === 50 || y === 50) {
    return true;
  } else {
    return false;
  }
};

console.log(ex2(5, 30));

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
console.log("---------EX3---------");

const ex3 = function (x) {
  let ex3String = "Hey there, my name is Abdul";
  let ex3Array = ex3String.split("");
  ex3Array.splice(x - 1, 1);
  return ex3Array.join("");
};

console.log(ex3(2));

/*
4)
 Create a function to find the largest of three given integers.
*/
console.log("---------EX4---------");

const ex4 = function (x, y, z) {
  if (x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else if (z > y && z > x) {
    return z;
  } else {
    console.log("Some of these values might be the same");
  }
};

console.log(ex4(8, 7, 13));

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
console.log("---------EX5---------");

const ex5 = function (x, y) {
  if (
    (60 >= x && x >= 40 && 60 >= y && y >= 40) ||
    (100 >= x && x >= 70 && 100 >= y && y >= 70)
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(ex5(95, 77));

// || 100 >= (x && y) >= 70
/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/
console.log("---------EX6---------");

const ex6 = function (x) {
  const ex6String = "Hello World";
  let ex6Array = [];
  for (let i = 0; i < x; i++) {
    ex6Array.push(ex6String);
  }
  return ex6Array.join("");
};

console.log(ex6(2));

/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
console.log("---------EX7---------");

const ex7 = function (str) {
  if (str.substring(0, 3) === "Los" || str.substring(0, 3) === "New") {
    return str;
  } else {
    return "blank";
  }
};

console.log(ex7("Los Santos"));

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
console.log("---------EX8---------");

const ex8 = function (arr) {
  const sum = arr[0] + arr[1] + arr[2];
  return sum;
};

console.log(ex8([8, 6, 9]));

/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
console.log("---------EX9---------");

const ex9 = function (arr) {
  if (arr[0] === 1 || arr[0] === 3 || arr[1] === 1 || arr[1] === 3) {
    return true;
  } else {
    return false;
  }
};

console.log(ex9([2, 4]));

/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/
console.log("---------EX10---------");

const ex10 = function (arr) {
  if (!(arr[0] === 1 || arr[0] === 3 || arr[1] === 1 || arr[1] === 3)) {
    return true;
  } else {
    return false;
  }
};

console.log(ex10([2, 3]));

/*
11)
Create a function to find the longest string from a given array of strings.
*/
console.log("---------EX11---------");

const ex11 = function (arr) {
  let longest = 0;
  let current = arr[0].length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > current) {
      longest = arr[i];
      current = arr[i];
    }
  }
  return longest;
};

console.log(ex11(["general", "-ask-strive-school", "-questions", "-random"]));

/*
12)
Create a function to find the types of a given angle.
Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/
console.log("---------EX12---------");

const ex12 = function (x) {
  if (x === 90) {
    return "Right angle";
  } else if (x === 180) {
    return "Straight angle";
  } else if (x >= 0 && x < 90) {
    return "Acute angle";
  } else if (x > 90 && x < 180) {
    return "Obtuse angle";
  } else {
    return "This angle is greater than 180 degrees";
  }
};

console.log(ex12(70));

/*
13)
Create a function to find the index of the greatest element of a given array of integers
*/
console.log("---------EX13---------");

const ex13 = function (arr) {
  let greatest = 0;
  let current = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > current) {
      greatest = arr[i];
      current = arr[i];
    }
  }
  return arr.indexOf(greatest);
};

console.log(ex13([3, 5, 7, 1, 12, 8]));

/*
14)
Create a function to get the largest even number from an array of integers.
*/
console.log("---------EX14---------");

const ex14 = function (arr) {
  let greatest = 0;
  let current = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > current && Number.isInteger(arr[i] / 2)) {
      greatest = arr[i];
      current = arr[i];
    }
  }
  return greatest;
};

console.log(ex14([3, 35, 7, 32, 1, 12, 8]));

/*
15)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
console.log("---------EX15---------");

console.log("EX15 is the same as EX2");

/*
16)
Create a function to check from two given integers, whether one is positive and another one is negative.
*/
console.log("---------EX16---------");

const ex16 = function (x, y) {
  if ((x >= 0 && y < 0) || (y >= 0 && x < 0)) {
    return true;
  } else {
    return false;
  }
};

console.log(ex16(8, -6));

/*
17)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/
console.log("---------EX17---------");

const ex17 = function (str) {
  if (str.length < 3) {
    let short = str.toUpperCase();
    return short;
  } else {
    let first3 = str.substring(0, 3).toLowerCase();
    let remainder = str.substring(3).toUpperCase();
    return first3.concat(remainder);
  }
};

console.log(ex17("i have the power of god and anime on my side"));
console.log(ex17("ah"));

/*
18)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
*/
console.log("---------EX18---------");

const ex18 = function (x, y) {
  let sum = x + y;
  if (sum >= 50 && sum <= 80) {
    return 65;
  } else {
    return 80;
  }
};

console.log(ex18(45, 55));

/*
19)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/
console.log("---------EX19---------");

const ex19 = function (x) {
  const factors = [];
  for (let i = 1; i <= x; i++) {
    if (x % i == 0) {
      factors.push(i);
    }
  }
  let output = [x];
  if (factors.includes(3)) {
    if (output.includes(x)) {
      let removeX = output.indexOf(x);
      output.splice(removeX, 1);
    }
    let removeX = output.indexOf(x);
    output.splice(removeX, 1);
    output.push("Diego");
  }
  if (factors.includes(5)) {
    if (output.includes(x)) {
      let removeX = output.indexOf(x);
      output.splice(removeX, 1);
    }
    output.push("Riccardo");
  }
  if (factors.includes(7)) {
    if (output.includes(x)) {
      let removeX = output.indexOf(x);
      output.splice(removeX, 1);
    }
    output.push("Stefano");
  }
  return output.join("");
};

console.log(ex19(28));
console.log(ex19(30));
console.log(ex19(34));

/*
20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
*/
console.log("---------EX20---------");

const ex20 = function (str) {
  let ex20Array = str.split(" ");
  let acronym = [];
  for (let i = 0; i < ex20Array.length; i++) {
    let firstChar = ex20Array[i].substring(0, 1);
    if (firstChar == firstChar.toUpperCase()) {
      acronym.push(firstChar);
    }
  }
  return acronym.join("");
};

console.log(ex20("The Minsitry of Silly Walks"));

console.log("----------------------------ADVANCED----------------------------");

console.log("---------ADVANCED EX1---------");

const advEx1 = function (str) {
  let advEx1Arr = str.split("");
  let memory = [];
  for (let i = 0; i < advEx1Arr.length; i++) {
    if (memory.includes(advEx1Arr[i])) {
      console.log(i);
      memory.i.push(1);
    } else {
      console.log(advEx1Arr[i]);
      let i = [advEx1Arr[i]];
      memory.push(i);
    }
  }
  console.log(memory);
  let mostCommon = 0;
  let current = memory[0].length;
  for (let j = 0; j < memory.length; j++) {
    if (memory[j].length > current) {
      mostCommon = memory[j];
      current = memory[j];
    }
  }
  return mostCommon;
};

console.log(advEx1("Thicck"));
