const numberSortAsc = function (array) {
  return array.sort((a, b) => a - b);
};

const numberSortDesc = function (array) {
  return array.sort((a, b) => b - a);
};

const getRange = function (start, end, steps) {
  const range = [];

  for (let i = start; i < end; i += steps) {
    range.push(i);
  }

  return range;
};

const occurances = function (list) {
  return function (element) {
    return list.filter((value) => value === element).length;
  };
};

const findSmallest = function (small, element) {
  if (element < small) {
    return element;
  }

  return small;
};

const findLargest = function (big, element) {
  if (element > big) {
    return element;
  }

  return big;
};
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
const generateRangeFromZero = function (maxLimit) {
  const range = [];

  for (let i = 0; i < maxLimit; i++) {
    range.push(i);
  }

  return range;
};

const rangesOf = function (numbers) {
  return numbers.map(generateRangeFromZero);
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

const flattenedArraysOf = function (arrays) {
  return arrays.map((array) => array.flatMap((num) => num));
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

const convertAndSlice = function (word) {
  return convertFirstLetter(word).slice(0, 1);
};

const abbreviate = function ({ city, country }) {
  const abbcity = city.split(" ").map(convertAndSlice).join("");
  let abbcountry = "";

  if (country.toUpperCase() !== country) {
    abbcountry = country.split(" ").map(convertAndSlice).join("");
  }

  return [abbcity, abbcountry].join(", ");
};

const abbreviations = function (objects) {
  return objects.map((countryAndCity) => abbreviate(countryAndCity));
};

//---------------------------------------------------------------------------//
// extract scores for math tests from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [90, 80]

const mathScores = function (objects) {
  return objects.map((person) => person.scores.math);
};

//---------------------------------------------------------------------------//
// extract coordinates from [{ x: 1, y: 2 }, { x: 3, y: 4 }] => [[1, 2], [3, 4]]

const extractCoordinates = function (objects) {
  return objects.map(({ x, y }) => [x, y]);
};

//---------------------------------------------------------------------------//
// extract full name and age from [{ firstName: "Alice", lastName: "Smith", age: 25 }, { firstName: "Bob", lastName: "Brown", age: 30 }] => [["Alice Smith", 25], ["Bob Brown", 30]]

const fullNameAndAge = function (objects) {
  return objects.map(({ firstName, lastName, age }) => [
    [firstName, lastName].join(" "),
    age,
  ]);
};

//---------------------------------------------------------------------------//
// extract scores from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [[90, 85], [80, 75]]

const extractScores = function (objects) {
  return objects.map(({ scores }) => Object.values(scores));
};

//---------------------------------------------------------------------------//
// extract key-value pairs from [{ key: "a", value: 1 }, { key: "b", value: 2 }] => [["a", 1], ["b", 2]]

const keyValuePairs = function (objects) {
  return objects.map(({ key, value }) => [key, value]);
};

//---------------------------------------------------------------------------//
// split full names into first and last names from [{ name: "Alice Smith" }, { name: "Bob Brown" }] => [["Alice", "Smith"], ["Bob", "Brown"]]

const splitFullNames = function (objects) {
  return objects.map(({ name }) => name.split(" "));
};

//---------------------------------------------------------------------------//
// normalize scores so they fall between 0 and 1 based on the max score from [{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }] => [0.8, 1]

const normalizeScores = function (objects) {
  const maxScore = 100;

  return objects.map(({ score }) => score / maxScore);
};

//---------------------------------------------------------------------------//
// calculate percentage contribution of each number in [10, 20, 30] (relative to the total sum) => [16.67, 33.33, 50]

const percentageContributions = function (numbers) {
  const totalSum = cumulativeSumsOf(numbers).at(-1);

  return numbers.map((num) => Math.round(((num * 100) / totalSum) * 100) / 100);
};

//---------------------------------------------------------------------------//
// subtract the smallest number from each number in [3, 8, 1] => [2, 7, 0]

const subtractMin = function (numbers) {
  const smallest = numbers.reduce(findSmallest, Infinity);

  return numbers.map((num) => num - smallest);
};

//---------------------------------------------------------------------------//
// calculate ranks (1-based, descending) for scores in [{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }, { name: "Charlie", score: 90 }] => [2, 1, 3]

const calculateRanks = function (objects) {
  return objects.map(({ score }) => score);
};

//---------------------------------------------------------------------------//
// normalize strings by the longest string length in ["cat", "elephant", "dog"] => ["cat    ", "elephant", "dog    "]
// (pad with spaces to match the longest length)

const normalizeStringLengths = function (strings) {
  const longest = strings
    .map((string) => string.length)
    .reduce(findLargest, -Infinity);

  return strings.map((string) => string.padEnd(longest));
};

//---------------------------------------------------------------------------//
// normalize strings by centering them based on the longest string length in ["cat", "elephant", "dog"] => ["  cat   ", "elephant", "  dog   "]
// (pad with spaces to justify to the center)

const justify = function (longest) {
  return function (string) {
    const startSpace = Math.floor((longest - string.length) / 2);

    return string.padStart(startSpace + string.length).padEnd(longest);
  };
};

const centerJustifyStrings = function (strings) {
  const longest = strings
    .map((string) => string.length)
    .reduce(findLargest, -Infinity);

  return strings.map(justify(longest));
};

//---------------------------------------------------------------------------//
// scale all numbers proportionally so the largest number becomes 100 in [20, 50, 80] => [25, 62.5, 100]

const scaleToMax100 = function (numbers) {
  const largest = numbers.reduce(findLargest, -Infinity);
  const proportion = 100 / largest;

  return numbers.map((number) => number * proportion);
};

//---------------------------------------------------------------------------//
// map each number to the difference between it and the average of the array in [10, 20, 30] => [-10, 0, 10]

const differencesFromMean = function (numbers) {
  const average = cumulativeSumsOf(numbers).at(-1) / numbers.length;

  return numbers.map((num) => num - average);
};

//---------------------------------------------------------------------------//
// map each string to its frequency in ["apple", "banana", "apple", "apple", "banana"] => [3, 2, 3, 3, 2]

const stringFrequencies = function (strings) {
  return strings.map(occurances(strings));
};

//---------------------------------------------------------------------------//
// mark the largest number in an array as true, others as false in [1, 3, 2] => [false, true, false]

const markLargestNumber = function (numbers) {
  const largest = numbers.reduce(findLargest, -Infinity);

  return numbers.map((element) => element === largest);
};

//---------------------------------------------------------------------------//
// normalize scores based on a curve: first find the max score, then subtract the mean, and scale the results to a range of 0-100 in [{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }, { name: "Charlie", score: 90 }] => [60, 100, 80]
// Steps: Find max score, calculate mean, normalize each score.

const normalizeWithCurve = function (objects) {};

//---------------------------------------------------------------------------//
// group students by their grades: first categorize them into A, B, C, and so on, then map each student to their respective category in [{ name: "Alice", grade: 85 }, { name: "Bob", grade: 92 }] => [['Alice', 'B'], ['Bob', 'A']]
// Steps: Categorize grades, then group students by category.

const categorizeGrades = function (score) {
  const categories = [
    getRange(0, 35, 1),
    getRange(35, 50, 1),
    getRange(50, 75, 1),
    getRange(75, 90, 1),
    getRange(90, 100, 1),
  ];

  const groupGrades = { 0: "F", 1: "D", 2: "C", 3: "B", 4: "A" };

  const key = categories.reduce((value, range, index) => {
    if (range.includes(score)) {
      return index;
    }
    return value;
  }, categories.length);

  return groupGrades[key];
};

const groupByGrade = function (objects) {
  return objects.map((record) => [record.name, categorizeGrades(record.grade)]);
};

//---------------------------------------------------------------------------//
// sort strings by length first, and then alphabetically if lengths are equal in ["cat", "mango", "banana", "apple", "kiwi"] => ["cat", "kiwi", "apple", "mango", "banana"]
// Steps: Sort by length, then by lexicographical order.

const sortByLengthAndAlphabet = function (strings) {
  return strings.sort((a, b) => {
    if (a.length < b.length) {
      return -1;
    }

    if (a.length === b.length) {
      return a < b ? -1 : 1;
    }

    return 1;
  });
};

//---------------------------------------------------------------------------//
// find the difference between the max and min values, and then normalize the array based on this range in [10, 20, 30, 5] => [0.25, 0.75, 1, 0]
// Steps: Find min, max, calculate range, then normalize each value.

const normalizeByRange = function (numbers) {};

//---------------------------------------------------------------------------//
// calculate the percentage of each number relative to the total sum of the array, and then sort the percentages in descending order in [100, 200, 50, 25] => [50, 25, 12.5, 12.5]
// Steps: Calculate sum, find percentage of each number, sort in descending order.
//x * 100 / sum

const percentageOfTotalSorted = function (numbers) {
  const totalSum = cumulativeSumsOf(numbers).at(-1);
  const percentages = numbers.map((x) => (x * 100) / totalSum);

  return numberSortDesc(percentages);
};

//---------------------------------------------------------------------------//
// map a list of students' grades in multiple subjects to their average score, and then sort the averages in descending order in [{ name: "Alice", grades: [80, 90, 85] }, { name: "Bob", grades: [70, 75, 80] }] => [{ name: "Alice", avg: 85 }, { name: "Bob", avg: 75 }]
// Steps: Calculate average for each student, then sort by average score.

const sortStudentsByAverage = function (students) {
  const newRecord = students.map(({ name, grades }) => {
    const object = { name };

    object.avg = cumulativeSumsOf(grades).at(-1) / grades.length;

    return object;
  });

  return newRecord.sort((a, b) => b.avg - a.avg);
};

//---------------------------------------------------------------------------//
// map a list of numbers to their corresponding binary representation and then group them into arrays of equal lengths in [1, 2, 3, 4, 5] => [["1"], ["10"], ["11"], ["100"], ["101"]]
// Steps: Convert numbers to binary, then group them into arrays.
const convertToBinary = function (number) {
  const binary = [];
  let i = number;

  while (i > 0) {
    binary.unshift(i % 2);
    i = Math.floor(i / 2);
  }

  return [binary.join("")];
};

const mapToBinaryAndGroup = function (numbers) {
  return numbers.map(convertToBinary);
};

//---------------------------------------------------------------------------//
// flatten an array of arrays into a single array and then filter out only the even numbers in [[1, 2, 3], [4, 5], [6, 7, 8]] => [2, 4, 6, 8]
// Steps: Flatten the arrays into one, then filter for even numbers.

const flattenAndFilterEven = function (arrays) {
  return arrays
    .flatMap((array) => array.flatMap((value) => value))
    .filter((value) => value % 2 === 0);
};

//---------------------------------------------------------------------------//
// from an array of arrays, where each array contains [name, age], return an array of names of people who are over 18, and then sort them alphabetically in [["Alice", 25], ["Bob", 17], ["Charlie", 22]] => ["Alice", "Charlie"]
// Steps: Filter for age > 18, then sort by name.

const filterAdultsAndSort = function (arrays) {
  return arrays
    .filter((data) => data[1] >= 18)
    .flatMap((data) => data[0])
    .sort();
};

//---------------------------------------------------------------------------//
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

  const testCases34 = [
    [
      abbreviations,
      [
        { city: "New York", country: "United States America" },
        { city: "Los Angeles", country: "United States America" },
      ],
      ["NY, USA", "LA, USA"],
    ],
  ];

  const testCases35 = [
    [
      mathScores,
      [
        { name: "Alice", scores: { math: 90, english: 85 } },
        { name: "Bob", scores: { math: 80, english: 75 } },
      ],
      [90, 80],
    ],
  ];

  const testCases36 = [
    [
      extractCoordinates,
      [
        { x: 1, y: 2 },
        { x: 3, y: 4 },
      ],
      [
        [1, 2],
        [3, 4],
      ],
    ],
  ];

  const testCases37 = [
    [
      fullNameAndAge,
      [
        { firstName: "Alice", lastName: "Smith", age: 25 },
        { firstName: "Bob", lastName: "Brown", age: 30 },
      ],
      [
        ["Alice Smith", 25],
        ["Bob Brown", 30],
      ],
    ],
  ];

  const testCases38 = [
    [
      extractScores,
      [
        { name: "Alice", scores: { math: 90, english: 85 } },
        { name: "Bob", scores: { math: 80, english: 75 } },
      ],
      [
        [90, 85],
        [80, 75],
      ],
    ],
  ];

  const testCases39 = [
    [
      keyValuePairs,
      [
        { key: "a", value: 1 },
        { key: "b", value: 2 },
      ],
      [
        ["a", 1],
        ["b", 2],
      ],
    ],
  ];

  const testCases40 = [
    [
      splitFullNames,
      [{ name: "Alice Smith" }, { name: "Bob Brown" }],
      [
        ["Alice", "Smith"],
        ["Bob", "Brown"],
      ],
    ],
  ];

  const testCases41 = [
    [
      normalizeScores,
      [
        { name: "Alice", score: 80 },
        { name: "Bob", score: 100 },
      ],
      [0.8, 1],
    ],
  ];

  const testCases42 = [
    [percentageContributions, [10, 20, 30], [16.67, 33.33, 50]],
  ];

  const testCases43 = [[subtractMin, [3, 8, 1], [2, 7, 0]]];

  const testCases44 = [
    [
      calculateRanks,
      [
        { name: "Alice", score: 80 },
        { name: "Bob", score: 100 },
        { name: "Charlie", score: 90 },
      ],
      [2, 1, 3],
    ],
  ];

  const testCases45 = [
    [
      calculateRanks,
      [
        { name: "Alice", score: 80 },
        { name: "Bob", score: 100 },
        { name: "Charlie", score: 90 },
      ],
      [2, 1, 3],
    ],
  ];

  const testCases46 = [
    [
      normalizeStringLengths,
      ["cat", "elephant", "dog"],
      ["cat     ", "elephant", "dog     "],
    ],
  ];

  const testCases47 = [
    [
      centerJustifyStrings,
      ["cat", "elephant", "dog"],
      ["  cat   ", "elephant", "  dog   "],
    ],
  ];

  const testCases48 = [[scaleToMax100, [20, 50, 80], [25, 62.5, 100]]];

  const testCases49 = [[differencesFromMean, [10, 20, 30], [-10, 0, 10]]];

  const testCases50 = [
    [
      stringFrequencies,
      ["apple", "banana", "apple", "apple", "banana"],
      [3, 2, 3, 3, 2],
    ],
  ];

  const testCases51 = [[markLargestNumber, [1, 5, 2], [false, true, false]]];
}

const testCases52 = [
  [
    groupByGrade,
    [
      { name: "Alice", grade: 85 },
      { name: "Bob", grade: 92 },
    ],
    [
      ["Alice", "B"],
      ["Bob", "A"],
    ],
  ],
];

const testCases53 = [
  [
    sortByLengthAndAlphabet,
    ["sam", "cat", "mango", "banana", "apple", "kiwi"],
    ["cat", "sam", "kiwi", "apple", "mango", "banana"],
  ],
];

const testCases54 = [
  [percentageOfTotalSorted, [100, 200, 50, 25], [50, 25, 12.5, 12.5]],
];

const testCases55 = [
  [
    sortStudentsByAverage,
    [
      { name: "Alice", grades: [80, 90, 85] },
      { name: "Bob", grades: [70, 75, 80] },
    ],
    [
      { name: "Alice", avg: 85 },
      { name: "Bob", avg: 75 },
    ],
  ],
];

const testCases56 = [
  [
    mapToBinaryAndGroup,
    [1, 2, 3, 4, 5],
    [["1"], ["10"], ["11"], ["100"], ["101"]],
  ],
];

const testCases57 = [
  [
    flattenAndFilterEven,
    [
      [1, 2, 3],
      [4, 5],
      [6, 7, 8],
    ],
    [2, 4, 6, 8],
  ],
];

const testCases58 = [
  [
    filterAdultsAndSort,
    [
      ["Charlie", 22],
      ["Bob", 17],
      ["Alice", 25],
    ],
    ["Alice", "Charlie"],
  ],
];

testAll(testCases58);
// testAll(testCases57);
// testAll(testCases56);
// testAll(testCases55);
// testAll(testCases54);
// testAll(testCases53);
// testAll(testCases52);
// testAll(testCases51);
// testAll(testCases50);
// testAll(testCases49);
// testAll(testCases48);
// testAll(testCases47);
// testAll(testCases46);
// testAll(testCases45); //---------
// testAll(testCases44);
// testAll(testCases43);
// testAll(testCases42);
// testAll(testCases41);
// testAll(testCases40);
// testAll(testCases39);
// testAll(testCases38);
// testAll(testCases37);
// testAll(testCases36);
// testAll(testCases35);
// testAll(testCases34);
// testAll(testCases33);
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
