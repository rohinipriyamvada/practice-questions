// squares of [1, 2, 3] => [1, 4, 9]

const squaresOf = function (numbers) {
  return numbers.map(function (number) {
    return number ** 2;
  });
};

//---------------------------------------------------------------------------//
// lengths of ["apple", "banana", "kiwi"] => [5, 6, 4]

const lengthsOf = function (strings) {
  return strings.map(function (string) {
    return string.length;
  });
};

//---------------------------------------------------------------------------//
// uppercase of ["hello", "world"] => ["HELLO", "WORLD"]

const uppercaseOf = function (strings) {
  return strings.map(function (string) {
    return string.toUpperCase();
  });
};

//---------------------------------------------------------------------------//
// first characters of ["apple", "banana", "kiwi"] => ["a", "b", "k"]

const firstCharactersOf = function (strings) {
  return strings.map(function (string) {
    return string.at(0);
  });
};

//---------------------------------------------------------------------------//
// truth values of [0, 1, 2, 3] => [false, true, true, true]
// Assume non-zero numbers are true, and zero is false

const truthValuesOf = function (numbers) {
  return numbers.map(function (number) {
    return number !== 0;
  });
};

//---------------------------------------------------------------------------//
// reverse strings of ["hello", "world"] => ["olleh", "dlrow"]

const reverseString = function (string) {
  return [...string].reverse().join('');
}

const reversedStringsOf = function (strings) {
  return strings.map(reverseString);
};

//---------------------------------------------------------------------------//
// double letters of ["cat", "dog", "bat"] => ["ccaatt", "ddoogg", "bbaatt"]

const doubleTheChars = function (string) {
  return [...string].map(function (char) {
    return char.repeat(2);
  }).join('');
}

const doubleLettersOf = function (strings) {
  return strings.map(doubleTheChars);
};

//---------------------------------------------------------------------------//
// boolean negation of [true, false, true] => [false, true, false]

const negatedBooleansOf = function (booleans) {
  return booleans.map(function (value) {
    return !value;
  });
};

//---------------------------------------------------------------------------//
// character codes of ["a", "b", "c"] => [97, 98, 99]
// Use the `charCodeAt` method on each string

const charCodesOf = function (strings) {
  return strings.map(function (char) {
    return char.charCodeAt();
  });
};

//---------------------------------------------------------------------------//
// extract domain names from 
//["user1@gmail.com", "admin@yahoo.com"] => ["gmail.com", "yahoo.com"]

const domainNamesOf = function (emails) { };

//---------------------------------Testing-----------------------------------//

const isEmpty = function (array) {
  return array.length === 0;
}

const edgeCasesNotSatisfied = function (array1, array2) {
  if (array1.length !== array2.length) {
    return true;
  }

  if (isEmpty(array1) && isEmpty(array2)) {
    return true;
  }

  return false;
}

const areEqual = function (array1, array2) {
  if (edgeCasesNotSatisfied(array1, array2)) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

const areEqual2 = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (!areEqual(array1[i], array2[i])) {
      return false;
    }
  }

  return true;
}

const checkEquality = function (actual, expected) {
  if (typeof (actual) !== "object") {
    return actual !== expected;
  }

  return (actual[0][0] !== undefined ?
    !areEqual2(actual, expected) :
    !areEqual(actual, expected));
}

const test = function (accumulator, [functionName, args, expected]) {
  const actual = functionName(args);

  if (checkEquality(actual, expected)) {
    accumulator.push([functionName, args, expected, actual]);
  }

  return accumulator;
}

const testAll = function (testCasesArray) {
  const failed = testCasesArray.reduce(test, []);

  return console.table(failed);
}

const testCases1 = [
  [squaresOf, [1, 2, 3], [1, 4, 9]],
  [squaresOf, [11, 12, 13], [121, 144, 169]],
  [squaresOf, [50, 35, 25], [2500, 1225, 625]]
];


const testCases2 = [
  [lengthsOf, ["apple", "banana", "kiwi"], [5, 6, 4]],
  [lengthsOf, ["apple", "", "kiwi"], [5, 0, 4]],
  [lengthsOf, ["pine apple", "mango", "watermelon"], [10, 5, 10]]
]

const testCases3 = [
  [uppercaseOf, ["hello", "world"], ["HELLO", "WORLD"]],
  [uppercaseOf, ["rohini", "priyamvada"], ["ROHINI", "PRIYAMVADA"]],
  [uppercaseOf, ["step", "thoughtworks"], ["STEP", "THOUGHTWORKS"]]
]

const testCases4 = [
  [firstCharactersOf, ["apple", "banana", "kiwi"], ["a", "b", "k"]],
  [firstCharactersOf, ["wpple", "danana", "ziwi"], ["w", "d", "z"]],
  [firstCharactersOf, ["lpple", "ranana", "ciwi"], ["l", "r", "c"]]
]

const testCases5 = [
  [truthValuesOf, [0, 1, 2, 3], [false, true, true, true]],
  [truthValuesOf, [-1, -3, 0, 1, 2, 3], [true, true, false, true, true, true]]
]

const testCases6 = [
  [reversedStringsOf, ["hello", "world"], ["olleh", "dlrow"]],
  [reversedStringsOf, ["jumbo", "malayalam"], ["obmuj", "malayalam"]]
]

const testCases7 = [
  [doubleLettersOf, ["cat"], ["ccaatt"]],
  [doubleLettersOf, ["cat", "dog"], ["ccaatt", "ddoogg"]],
  [doubleLettersOf, ["cat", "dog", "cow"], ["ccaatt", "ddoogg", "ccooww"]]
]

const testCases8 = [
  [negatedBooleansOf, [false, true, false], [true, false, true]],
  [negatedBooleansOf, [false, false, true], [true, true, false]]
]

const testCases9 = [
  [charCodesOf, ["a", "b", "c"], [97, 98, 99]],
  [charCodesOf, ["1a", " b", "-c"], [49, 32, 45]]
  //if two chars are given to find the unicode the unicode of first char is 
  //returned
]

// testAll(testCases1);
// testAll(testCases2);
// testAll(testCases3);
// testAll(testCases4);
// testAll(testCases5);
// testAll(testCases6);
// testAll(testCases7);
// testAll(testCases8);
testAll(testCases9);
