// squares of [1, 2, 3] => [1, 4, 9]

const squaresOf = function (numbers) {
  return numbers.map(function (number) {
    return number ** 2;
  });
};

//---------------------------------------------------------------------------//
// lengths of ["apple", "banana", "kiwi"] => [5, 6, 4]

const lengthsOf = function (strings) {
  return strings.map((string) => string.length);
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
  return [...string].reverse().join("");
};

const reversedStringsOf = function (strings) {
  return strings.map(reverseString);
};

//---------------------------------------------------------------------------//
// double letters of ["cat", "dog", "bat"] => ["ccaatt", "ddoogg", "bbaatt"]

const doubleTheChars = function (string) {
  return [...string]
    .map(function (char) {
      return char.repeat(2);
    })
    .join("");
};

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
};

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
  });
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
};

const countVowels = function (string) {
  return [...string].filter(isVowel).length;
};

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
};

const isNotVowel = function (char) {
  return complement(isVowel(char));
};

const removeVowels = function (string) {
  return [...string].filter(isNotVowel).join("");
};

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
  };
};

const cumulativeSumsOf = function (arrays) {
  return arrays.map(sumUp());
};

//---------------------------------------------------------------------------//
// reverse words in ["hello world", "goodbye moon"] =>
// ["olleh dlrow", "eybdoog noom"]

const reversedWordsOf = function (strings) {
  return strings.map((word) => reversedStringsOf(word.split(" ")).join(" "));
};

//---------------------------------------------------------------------------//
// extract unique characters from ["apple", "banana", "grape"] =>
//["aple", "ban", "grape"]
// Maintain the order of their first appearance in each string

const checkDuplicates = function (uniqueEleArray, char) {
  if (!uniqueEleArray.includes(char)) {
    uniqueEleArray.push(char);
  }

  return uniqueEleArray;
};

const removeDuplicates = function ([...chars]) {
  return chars.reduce(checkDuplicates, []).join("");
};

const uniqueCharactersOf = function (strings) {
  return strings.map(removeDuplicates);
};

//---------------------------------------------------------------------------//
// generate ranges from [3, 5, 2] => [[0, 1, 2], [0, 1, 2, 3, 4], [0, 1]]

const generateRange = function (maxLimit) {
  const range = [];

  for (let i = 0; i < maxLimit; i++) {
    range.push(i);
  }

  return range;
};

const rangesOf = function (numbers) {
  return numbers.map(generateRange);
};

//---------------------------------------------------------------------------//
// capitalize first letters of ["hello world", "goodbye moon"] =>
//["Hello World", "Goodbye Moon"]

const convertToUpper = function ([...chars]) {
  chars[0] = chars[0].toUpperCase();

  return chars.join("");
};

const convertFirstLetter = function (word) {
  return word.split(" ").map(convertToUpper).join(" ");
};

const capitalizedFirstLettersOf = function (strings) {
  return strings.map(convertFirstLetter);
};

//---------------------------------------------------------------------------//
// find word lengths in ["apple pie", "banana split"] => [[5, 3], [6, 5]]

const wordLengthsOf = function (strings) {
  return strings.map((word) => lengthsOf(word.split(" ")));
};

//---------------------------------------------------------------------------//
// flatten nested arrays of [[1, [2, 3]], [4, [5, 6]]] => [[1, 2, 3], [4, 5, 6]]

const flatArray = function (array) {
  return array.flatMap((num) => num);
};

const flattenedArraysOf = function (arrays) {
  return arrays.map(flatArray);
};

//---------------------------------------------------------------------------//
// sort letters in ["cat", "bat", "rat"] alphabetically => ["act", "abt", "art"]

const sortedLettersOf = function (strings) {
  return strings.map(([...chars]) => chars.sort().join(""));
};

//---------------------------------------------------------------------------//
// wrap strings in brackets ["apple", "banana"] => ["[apple]", "[banana]"]

const addBrackets = function ([...string]) {
  string.unshift("[");
  string.push("]");

  return string.join("");
};

const wrappedStringsOf = function (strings) {
  return strings.map(addBrackets);
};

//---------------------------------------------------------------------------//
// extract names from [{ name: "Alice" }, { name: "Bob" }] => ["Alice", "Bob"]

const extractNames = function (objects) {
  return objects.map((record) => record.name);
};

//---------------------------------------------------------------------------//
// extract ages from [{ age: 25 }, { age: 30 }] => [25, 30]

const extractAges = function (objects) {
  return objects.map((record) => record.age);
};

//---------------------------------------------------------------------------//
// extract the first letters of names from [{ name: "Alice" }, { name: "Bob" }]
// => ["A", "B"]

const firstLettersOfNames = function (objects) {
  return objects.map((record) => record.name[0]);
};

//---------------------------------------------------------------------------//
// calculate areas from [{ width: 2, height: 3 }, { width: 4, height: 5 }]
// => [6, 20]

const calculateAreas = function (rectangles) {
  return rectangles.map((dimensions) => dimensions.width * dimensions.height);
};

//---------------------------------------------------------------------------//
// extract boolean flags from [{ active: true }, { active: false }] =>
//[true, false]

const extractFlags = function (objects) {
  return objects.map((status) => status.active);
};

//---------------------------------------------------------------------------//
// concatenate first and last names from
//[{ firstName: "Alice", lastName: "Smith" },
//{ firstName: "Bob", lastName: "Brown" }] => ["Alice Smith", "Bob Brown"]

const fullNames = function (objects) {
  return objects.map((record) => record.firstName + " " + record.lastName);
};

//---------------------------------------------------------------------------//
// calculate total prices from [{ price: 10, quantity: 2 },
//{ price: 5, quantity: 4 }] => [20, 20]
// (price * quantity)

const totalPrices = function (objects) {
  return objects.map((record) => record.price * record.quantity);
};

//---------------------------------------------------------------------------//
// determine if a person is an adult from
//[{ name: "Alice", age: 17 }, { name: "Bob", age: 22 }] => [false, true]
// (age >= 18)

const isAdult = function (objects) {
  return objects.map((record) => record.age >= 18);
};

//---------------------------------------------------------------------------//
// create abbreviations from [{ city: "New York", country: "USA" },
//{ city: "Los Angeles", country: "USA" }] => ["NY, USA", "LA, USA"]

const abbreviations = function (objects) {};

//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//---------------------------------Testing-----------------------------------//

const isEmpty = function (array) {
  return array.length === 0;
};

const edgeCasesNotSatisfied = function (array1, array2) {
  if (array1.length !== array2.length) {
    return true;
  }

  if (isEmpty(array1) && isEmpty(array2)) {
    return true;
  }

  return false;
};

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
};

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
};

const checkEquality = function (actual, expected) {
  if (typeof actual !== "object") {
    return actual !== expected;
  }

  return actual[0][0] !== undefined
    ? !areEqual2(actual, expected)
    : !areEqual(actual, expected);
};

const test = function (accumulator, [functionName, args, expected]) {
  const actual = functionName(args);

  if (checkEquality(actual, expected)) {
    accumulator.push([functionName, args, expected, actual]);
  }

  return accumulator;
};

const testAll = function (testCasesArray) {
  const failed = testCasesArray.reduce(test, []);

  return console.table(failed);
};
{
  const testCases1 = [
    [squaresOf, [1, 2, 3], [1, 4, 9]],
    [squaresOf, [11, 12, 13], [121, 144, 169]],
    [squaresOf, [50, 35, 25], [2500, 1225, 625]],
  ];

  const testCases2 = [
    [lengthsOf, ["apple", "banana", "kiwi"], [5, 6, 4]],
    [lengthsOf, ["apple", "", "kiwi"], [5, 0, 4]],
    [lengthsOf, ["pine apple", "mango", "watermelon"], [10, 5, 10]],
  ];

  const testCases3 = [
    [uppercaseOf, ["hello", "world"], ["HELLO", "WORLD"]],
    [uppercaseOf, ["rohini", "priyamvada"], ["ROHINI", "PRIYAMVADA"]],
    [uppercaseOf, ["step", "thoughtworks"], ["STEP", "THOUGHTWORKS"]],
  ];

  const testCases4 = [
    [firstCharactersOf, ["apple", "banana", "kiwi"], ["a", "b", "k"]],
    [firstCharactersOf, ["wpple", "danana", "ziwi"], ["w", "d", "z"]],
    [firstCharactersOf, ["lpple", "ranana", "ciwi"], ["l", "r", "c"]],
  ];

  const testCases5 = [
    [truthValuesOf, [0, 1, 2, 3], [false, true, true, true]],
    [
      truthValuesOf,
      [-1, -3, 0, 1, 2, 3],
      [true, true, false, true, true, true],
    ],
  ];

  const testCases6 = [
    [reversedStringsOf, ["hello", "world"], ["olleh", "dlrow"]],
    [reversedStringsOf, ["jumbo", "malayalam"], ["obmuj", "malayalam"]],
  ];

  const testCases7 = [
    [doubleLettersOf, ["cat"], ["ccaatt"]],
    [doubleLettersOf, ["cat", "dog"], ["ccaatt", "ddoogg"]],
    [doubleLettersOf, ["cat", "dog", "cow"], ["ccaatt", "ddoogg", "ccooww"]],
  ];

  const testCases8 = [
    [negatedBooleansOf, [false, true, false], [true, false, true]],
    [negatedBooleansOf, [false, false, true], [true, true, false]],
  ];

  const testCases9 = [
    [charCodesOf, ["a", "b", "c"], [97, 98, 99]],
    [charCodesOf, ["1a", " b", "-c"], [49, 32, 45]],
    //if two chars are given to find the unicode the unicode of first char is
    //returned
  ];

  const testCases10 = [
    [
      domainNamesOf,
      ["abc@gmail.com", "123@yahoo.com"],
      ["gmail.com", "yahoo.com"],
    ],
  ];

  const testCases11 = [
    [
      splitWordsOf,
      ["hello world", "goodbye moon"],
      [
        ["hello", "world"],
        ["goodbye", "moon"],
      ],
    ],
  ];

  const testCases12 = [
    [
      joinedArraysOf,
      [
        ["a", "b"],
        ["c", "d"],
      ],
      ["ab", "cd"],
    ],
    [
      joinedArraysOf,
      [
        ["h", "i"],
        ["y", "o", "u"],
      ],
      ["hi", "you"],
    ],
  ];

  const testCases13 = [
    [repeatedStringsOf, ["hi"], ["hihi"]],
    [repeatedStringsOf, ["hi", "there"], ["hihi", "therethere"]],
  ];

  const testCases14 = [
    [countVowelsOf, ["apple"], [2]],
    [countVowelsOf, ["apple", "aeiou"], [2, 5]],
    [countVowelsOf, ["apple", "aeiou", "quill"], [2, 5, 2]],
  ];

  const testCases15 = [
    [reversedArraysOf, [[1, 2], [4]], [[2, 1], [4]]],
    [
      reversedArraysOf,
      [
        [1, 2, 3],
        [4, 5, 6],
      ],
      [
        [3, 2, 1],
        [6, 5, 4],
      ],
    ],
  ];

  const testCases16 = [
    [withoutVowelsOf, ["apple"], ["ppl"]],
    [withoutVowelsOf, ["apple", "kiwi"], ["ppl", "kw"]],
  ];

  const testCases17 = [[cumulativeSumsOf, [1, 2, 3], [1, 3, 6]]];

  const testCases18 = [
    [reversedWordsOf, ["hello world"], ["olleh dlrow"]],
    [reversedWordsOf, ["hello world", "bye sun"], ["olleh dlrow", "eyb nus"]],
  ];

  const testCases19 = [
    [uniqueCharactersOf, ["apple"], ["aple"]],
    [uniqueCharactersOf, ["apple", "banana"], ["aple", "ban"]],
    [
      uniqueCharactersOf,
      ["apple", "banana", "grape"],
      ["aple", "ban", "grape"],
    ],
  ];

  const testCases20 = [
    [
      rangesOf,
      [3, 5, 2],
      [
        [0, 1, 2],
        [0, 1, 2, 3, 4],
        [0, 1],
      ],
    ],
  ];

  const testCases21 = [
    [
      capitalizedFirstLettersOf,
      ["hello world", "goodbye moon"],
      ["Hello World", "Goodbye Moon"],
    ],
  ];

  const testCases22 = [
    [
      wordLengthsOf,
      ["apple pie", "banana split"],
      [
        [5, 3],
        [6, 5],
      ],
    ],
  ];

  const testCases23 = [
    [
      flattenedArraysOf,
      [
        [1, [2, 3]],
        [4, [5, 6]],
      ],
      [
        [1, 2, 3],
        [4, 5, 6],
      ],
    ],
  ];

  const testCases24 = [
    [sortedLettersOf, ["cat", "bat", "rat"], ["act", "abt", "art"]],
  ];

  const testCases25 = [
    [wrappedStringsOf, ["apple", "banana"], ["[apple]", "[banana]"]],
  ];

  const testCases26 = [
    [extractNames, [{ name: "Alice" }, { name: "Bob" }], ["Alice", "Bob"]],
  ];

  const testCases27 = [[extractAges, [{ age: 25 }, { age: 30 }], [25, 30]]];

  const testCases28 = [
    [firstLettersOfNames, [{ name: "Alice" }, { name: "Bob" }], ["A", "B"]],
  ];

  const testCases29 = [
    [
      calculateAreas,
      [
        { width: 2, height: 3 },
        { width: 4, height: 5 },
      ],
      [6, 20],
    ],
  ];
}
const testCases30 = [
  [extractFlags, [{ active: true }, { active: false }], [true, false]],
];

const testCases31 = [
  [
    fullNames,
    [
      { firstName: "Alice", lastName: "Smith" },
      { firstName: "Bob", lastName: "Brown" },
    ],
    ["Alice Smith", "Bob Brown"],
  ],
];

const testCases32 = [
  [
    totalPrices,
    [
      { price: 10, quantity: 2 },
      { price: 5, quantity: 4 },
    ],
    [20, 20],
  ],
];

const testCases33 = [
  [
    isAdult,
    [
      { name: "Alice", age: 17 },
      { name: "Bob", age: 22 },
    ],
    [false, true],
  ],
];

testAll(testCases33);
// testAll(testCases33);
// testAll(testCases32);
// testAll(testCases31);
// testAll(testCases30);
// testAll(testCases29);
// testAll(testCases28);
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
// testAll(testCases17);
// testAll(testCases18);
// testAll(testCases19);
// testAll(testCases20);
// testAll(testCases21);
// testAll(testCases22);
// testAll(testCases23);
// testAll(testCases24);
// testAll(testCases25);
// testAll(testCases26);
// testAll(testCases27);
