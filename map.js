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

const getDomain = function (email) {
  const domainStart = email.indexOf("@");

  return email.slice(domainStart + 1);
}

const domainNamesOf = function (emails) {
  return emails.map(getDomain);
};

//---------------------------------------------------------------------------//
// split words in ["hello world", "goodbye moon"] => 
//[["hello", "world"], ["goodbye", "moon"]]

const splitWordsOf = function (strings) {
  return strings.map((words) => words.split(" "));
};

//---------------------------------------------------------------------------//
// join arrays of [["a", "b"], ["c", "d"]] => ["ab", "cd"]

const joinedArraysOf = function (arrayOfArrays) {
  return arrayOfArrays.map(function (array) {
    return array.join("");
  })
};

//---------------------------------------------------------------------------//
// repeat strings in ["hi", "bye"] => ["hihi", "byebye"]

const repeatedStringsOf = function (strings) {
  return strings.map((string) => string.repeat(2));
};

//---------------------------------------------------------------------------//
// count vowels in ["apple", "banana", "grape"] => [2, 3, 2]

const isVowel = function (char) {
  return "aeiou".includes(char);
}

const countVowels = function (string) {
  return [...string].filter(isVowel).length;
}

const countVowelsOf = function (strings) {
  return strings.map(countVowels);
};

//---------------------------------------------------------------------------//
// reverse arrays of [[1, 2, 3], [4, 5, 6]] => [[3, 2, 1], [6, 5, 4]]

const reversedArraysOf = function (arrays) {
  return arrays.map((array) => array.reverse());
};

//---------------------------------------------------------------------------//
// remove vowels from ["apple", "banana", "grape"] => ["ppl", "bnn", "grp"]

const complement = function (value) {
  return !value;
}

const isNotVowel = function (char) {
  return complement(isVowel(char));
}

const removeVowels = function (string) {
  return [...string].filter(isNotVowel).join("");
}

const withoutVowelsOf = function (strings) {
  return strings.map(removeVowels);
};

//---------------------------------------------------------------------------//
// cumulative sums of [[1, 2, 3], [4, 5, 6]] => [[1, 3, 6], [4, 9, 15]]
// Example: cumulative sum of [1, 2, 3] is [1, 1+2, 1+2+3]

const sumUp = function () {
  let sum = 0;

  return function (element, index) {
    if (index === 0) {
      sum = element;
      return sum;
    }

    sum += element;
    return sum;
  }
}

const cumulativeSumsOf = function (arrays) {
  return arrays.map(sumUp());
};

//---------------------------------------------------------------------------//
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

const testCases10 = [
  [domainNamesOf, ["abc@gmail.com", "123@yahoo.com"],
    ["gmail.com", "yahoo.com"]]
]

const testCases11 = [
  [splitWordsOf, ["hello world", "goodbye moon"],
    [["hello", "world"], ["goodbye", "moon"]]]
]

const testCases12 = [
  [joinedArraysOf, [["a", "b"], ["c", "d"]], ["ab", "cd"]],
  [joinedArraysOf, [["h", "i"], ["y", "o", "u"]], ["hi", "you"]]
]

const testCases13 = [
  [repeatedStringsOf, ["hi"], ["hihi"]],
  [repeatedStringsOf, ["hi", "there"], ["hihi", "therethere"]]
]

const testCases14 = [
  [countVowelsOf, ["apple"], [2]],
  [countVowelsOf, ["apple", "aeiou"], [2, 5]],
  [countVowelsOf, ["apple", "aeiou", "quill"], [2, 5, 2]]
]

const testCases15 = [
  [reversedArraysOf, [[1, 2], [4]], [[2, 1], [4]]],
  [reversedArraysOf, [[1, 2, 3], [4, 5, 6]], [[3, 2, 1], [6, 5, 4]]]
]

const testCases16 = [
  [withoutVowelsOf, ["apple"], ["ppl"]],
  [withoutVowelsOf, ["apple", "kiwi"], ["ppl", "kw"]]
]

const testCases17 = [
  [cumulativeSumsOf, [1, 2, 3], [1, 3, 6]]
]

// testAll(testCases1);
// testAll(testCases2);
// testAll(testCases3);
// testAll(testCases4);
// testAll(testCases5);
// testAll(testCases6);
// testAll(testCases7);
// testAll(testCases8);
// testAll(testCases9);
// testAll(testCases10);
// testAll(testCases11);
// testAll(testCases12);
// testAll(testCases13);
// testAll(testCases14);
// testAll(testCases15);
// testAll(testCases16);
testAll(testCases17);
