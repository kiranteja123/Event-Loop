const javascriptData = 
[
  {
    id: 1,
    code: true,
    question: "Sort the array by date of birth (DOB); if two DOBs are equal, sort those entries by salary.", 
    answer: `
    let OrgData = [
      { eId: "01", name: "Kumar", dob: "01-01-2020", experience: "02", salary: "20000" },
      { eId: "02", name: "Ravi", dob: "12-05-1996", experience: "06", salary: "70000" },
      { eId: "03", name: "Shyam", dob: "01-01-2020", experience: "03", salary: "25000" },
      { eId: "04", name: "Shyam", dob: "12-05-1996", experience: "05", salary: "25000" }
    ];

    // Sorting the data
    OrgData.sort((a, b) => {
      // Convert dob to Date objects (assuming dd-mm-yyyy format)
      let dateA = new Date(a.dob.split("-").reverse().join("-"));
      let dateB = new Date(b.dob.split("-").reverse().join("-"));

      // Compare dob first
      if (dateA < dateB) return -1;
      if (dateA > dateB) return 1;

      // If dob is the same, sort by salary (numeric ascending)
      return parseInt(a.salary) - parseInt(b.salary);
    });

    console.log(OrgData);
    `
  },
  {
    id: 2,
    code: true,
    question: "Display an array of employees who have a specific skill set.",
    answer: `
    const employees = [
      { name: 'emp1', skills: ['Python', 'React'] },
      { name: 'emp2', skills: ['Javascript', 'React'] },
      { name: 'emp3', skills: ['Java'] },
      { name: 'emp2', skills: ['Python'] },
      { name: 'emp4', skills: ['Javascript', 'React'] },
    ];

    let newArray = employees.reduce((acc, ele) => {
      for (let i = 0; i < ele.skills.length; i++) {
        if (!acc[ele.skills[i]]) {
          acc[ele.skills[i]] = [];
        }
        acc[ele.skills[i]].push(ele.name);
      }
      return acc;
    }, {});

    console.log(newArray);

    /* Output:
    {
      "Python": ["emp1", "emp2"],
      "React": ["emp1", "emp2", "emp4"],
      "Javascript": ["emp2", "emp4"],
      "Java": ["emp3"]
    }
    */
    `
  },
  {
    id: 3,
    code: true,
    question: "A user tries to get the length of an array using [1, 5, 6, 7, 8].count(). What is wrong with this, and how should it be corrected?",
    answer: `
    Array.prototype.count = function() {
      return this.length;
    }

    console.log([1,5,6,7,8].count()); 
    // Output: 5
    `
  },
  {
    id: 4,
    code: true,
    question: "Based on the array, display each element along with its count. let arr = [1,7,2,9,1,7,3,60,2,4,5,45,6,6,9]",
    answer: `
    let arr = [1,7,2,9,1,7,3,60,2,4,5,45,6,6,9];

    let newArray = arr.reduce((acc, ele) => {
        if (acc[ele]) {
            acc[ele] = ++acc[ele];
        } else {
            acc[ele] = 1;
        }
        return acc;
    }, {});

    console.log(newArray);
    // Output: { "1": 2, "2": 2, "3": 1, "4": 1, "5": 1, "6": 2, "7": 2, "9": 2, "45": 1, "60": 1 }
    `
  },
  {
    id: 5,
    code: true,
    question: "Create an array using the values of a given object.",
    answer: `
    let obj = { id: "1", name: "user22", age: "26", work: "programmer" };
    let arr = [];

    console.log(Object.values(obj));  // Output: ['1', 'user22', '26', 'programmer']
    console.log(Object.keys(obj));    // Output: ["id","name","age","work"]
    console.log(Object.entries(obj)); // Output: [["id","1"],["name","user22"],["age","26"],["work","programmer"]]

    for (let key in obj) {
      arr.push(key);
    }

    console.log(arr);  // Output: ["id","name","age","work"]
    `
  },
  {
    id: 6,
    code: true,
    question: "Count how many times each vowel ('a', 'e', 'i', 'o', 'u') appears in the given string.",
    answer: `
    let xVal = "aeiou"
    let str = "Given a string, find how many vowels are there and number of times they are repeated";
    let newStr = str.split('');

    let val = newStr.reduce((acc, ele) => {
      if(xVal.includes(ele)) {
        acc[ele] = acc[ele] ? ++acc[ele] : 1
      } 
      return acc;
    }, {})

    console.log(val);  //output is: { "i": 4, "e": 12, "a": 6, "o": 3, "u": 1 }
    `
  },
  {
    id: 7,
    code: true,
    question: "If an object method returns another method, what will be the output when calling it?",
    answer: `
    let obj = {
        firstName: "kiran",
        lastName: 'teja',
        readFirstName: function() {
          return this.firstName;
        },
        readLastName: function() {
            return this.lastName;
        },
        getFullName: function() {
            return this.readFirstName() + this.lastName;
        },
    }

    console.log(obj.getVal());  // output value is : kiranteja
    `
  },
  {
    id: 8,
    code: true,
    question: "How can we create (or define) a method for an existing class?",
    answer: `
    class Person {
        constructor(fName, lName, gender) {
            this.fName = fName;
            this.lName = lName;
            this.gender = gender;
        }
    }

    let person1 = new Person('kiran', 'teja', 'male')
    let person2 = new Person('Ram', 'sam', 'male')

    console.log(person1);  // { "fName": "kiran", "lName": "teja", "gender": "male" }
    console.log(person2);  // { "fName": "Ram", "lName": "sam", "gender": "male" }

    // create a method for existing class like below
    Person.prototype.getFullName = function() {
      return this.fName + this.lName;
    }

    console.log(person1.getFullName());  // kiranteja
    `
  },
  {
    id: 9,
    code: true,
    question: "How can we create a method for an existing function?",
    answer: `
    function Person(fName, lName, gender) {
      this.fName = fName;
      this.lName = lName;
      this.gender = gender;
    }

    let person1 = new Person("kiran", "teja", 'male');
    let person2 = new Person('Ram', 'sam', 'male')

    console.log(person1);  // { "fName": "kiran", "lName": "teja", "gender": "male" }
    console.log(person2);  // { "fName": "Ram", "lName": "sam", "gender": "male" }

    // Create a method for existing function
      Person.prototype.getDetails = function(){
          return this.fName + this.lName + this.gender
      }

      console.log(person1.getDetails());  // kirantejamale
    
    // Create a method and using call we can get details
      function getDetails() {
          return this.fName + this.lName + this.gender
      }

      let getFullDetails = getDetails.call(person1);

      console.log(getFullDetails);  // kirantejamale
    `
  },
  {
    id: 10,
    code: true,
    question: "Based on an existing object, create a method and explain how to use it.",
    answer: `
    let obj = {
      name: 'kiran',
      gender: 'male'
    }

    function getDetails(lName, roleNum) {
        return this.name + ' - ' + lName + ' - ' + this.gender + ' - ' + "with" + ' - ' + roleNum;
    }
  
  // Using a Call or Apply or Bind we can use method

    let objVal1 = getDetails.call(obj, "Teja", '20146');  // Using Call

    let objVal2 = getDetails.apply(obj, ["Ram", '12345']);  // Using Apply

    let objVal3 = getDetails.bind(obj, "Ravi", '00000');  // Using Bind

    console.log(objVal1);  // kiran - Teja - male - with - 20146
    console.log(objVal2);  // kiran - Ram - male - with - 12345
    console.log(objVal3());  // kiran - Ravi - male - with - 00000
    `
  },
  {
    id: 11,
    code: true,
    question: "Check whether a string is a palindrome. And also check whether a number is a palindrome and two strings are anagrams.",
    answer: `
    // Question 1
    function isPalindrome(str) {

      // Remove non-alphanumeric characters and convert to lowercase
      const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

      // Reverse the string
      const reversedStr = cleanedStr.split('').reverse().join('');

      // Compare the original and reversed strings
      return cleanedStr === reversedStr; 
    }

    console.log(isPalindrome("madam")); // true
    console.log(isPalindrome("hello")); // false

    // Question 2
    function isNumberPalindrome(num) {
      const str = num.toString(); 
      const reversedStr = str.split('').reverse().join('');
      return str === reversedStr;
    }

    console.log(isNumberPalindrome(121)); // true
    console.log(isNumberPalindrome(123)); // false

    // Question 3
    function areAnagrams(str1, str2) {
      if (str1.length !== str2.length) {
        return false;
      }

      const sortedStr1 = str1.split('').sort().join('');
      const sortedStr2 = str2.split('').sort().join('');
      
      return sortedStr1 === sortedStr2;
    }

    console.log(areAnagrams("listen", "silent")); // true
    console.log(areAnagrams("hello", "world"));   // false
    `
  },
  {
    id: 12,
    code: true,
    question: "Create a method inside an object and show how to access its returned value.",
    answer: `
    let employee = {
      first_name: "foo",
      last_name: "bar",
      getFirstName() { 
        return this.first_name;
      },
      getLastName() { 
        return this.last_name;
      },
      getFullName(delimiter) { 
        return () => {  
          return this.first_name + delimiter + this.last_name;
        }
      }
    }

    console.log(employee.getFirstName());   // Output: foo
    console.log(employee.getLastName());    // Output: bar
    console.log(employee.getFullName("-")()); // Output: foo-bar

    `
  },
  {
    id: 13,
    code: true,
    question: "What is the output for console.log(outside)?",
    answer: `
    let outside = 'teja';

    if (true) {
      let outside = "kiran";
      console.log(outside);  // Output: kiran
    }

    console.log(outside);    // Output: teja
    `
  },
  {
    id: 14,
    code: true,
    question: "What is the output for console.log(a)?",
    answer: `
    var a = 1;

    function b() {
      var a = 10;  
      return;
      function a() {
      }
    }

    b();

    console.log(a);  // Output: 1
    `
  },
  {
    id: 15,
    code: true,
    question: "What happens when goo() is called without any arguments?",
    answer: `
    function y() {
      throw "this is error";
    }

    function goo(a = 1, b = y()) {
      return a + b;
    }

    try {
      goo();  // This will call y() as default for b and throw an error
    } catch (error) {
      console.log("Caught error:", error);  // Output: Caught error: this is error
    }
    `
  },
  {
    id: 16,
    code: true,
    question: "What will be the output of each of the three function calls: obj.b(), c(), and d()?",
    answer: `
    const obj = {
      a: "foo",
      b: function () {
        console.log(this.a);
      },
    };

    const c = obj.b;          // Reference to function b, no binding
    const d = obj.b.bind(obj); // Function b bound to obj

    obj.b();  // Logs: "foo"  — 'this' refers to obj
    c();      // Logs: undefined (or error in strict mode) — 'this' is undefined or global object
    d();      // Logs: "foo"  — 'this' is explicitly bound to obj
    `
  },
  {
    id: 17,
    code: true,
    question: "How can we remove special characters from elements in an array?",
    answer: `
    const fruits = ["appl@es", "mango#es", "grap%es"];

    // Join array elements into a single string separated by ';'
    const joined = fruits.join(';');

    // Remove special characters @, #, % globally
    const cleaned = joined.replace(/[@#%]/g, '');

    // Split the cleaned string back into an array
    const result = cleaned.split(';');

    console.log(result);  // Output: ["apples", "mangoes", "grapes"]
    `
  },
  {
    id: 18,
    code: true,
    question: "Write the correct implementation of toCapitalize() as a prototype method on the String object.",
    answer: `
    String.prototype.toCapitalize = function () {
      return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
    };

    console.log("KiRan".toLowerCase());      // Output: "kiran"
    console.log("KiRan".toUpperCase());      // Output: "KIRAN"
    console.log("KiRan".toCapitalize());     // Output: "Kiran"
    `
  },
  {
    id: 19,
    code: true,
    question: "How can we assign a unique ID even when two objects have the same ID value?",
    answer: `
    const id = Symbol("id");

    let person1 = {
      [id]: 1,
      fName: "kiran"
    };

    let person2 = {
      [id]: 1,
      fName: "kiran"
    };

    console.log(person1[id] === person2[id]); // true — values are the same
    console.log(person1 === person2);         // false — they are different objects
    `
  },
  {
    id: 20,
    code: true,
    question: "What will be the output of the following comparisons and why?",
    answer: `
    let arr = [1];
    let arr1 = [1];

    console.log(arr == arr1);   // false
    console.log(arr === arr1);  // false

    let obj = { a: 1 };
    let obj1 = { a: 1 };

    console.log(obj == obj1);   // false
    console.log(obj === obj1);  // false
    `
  },
  {
    id: 21,
    code: true,
    question: "What will be the output of the following code and why?",
    answer: `
    let foo = (function(a) {
      delete a;
      return a;
    })(0);

    console.log(foo);  // Output: 0
    `
  },
  {
    id: 22,
    code: true,
    question: "How many ways can we call a function, including using call, apply, and bind?",
    answer: `
    function foo(a) {
      console.log(a);
    }

    foo("a"); // Output: a

    foo.call(null, "a"); // Output: a

    foo.apply(null, ["a"]); // Output: a

    const boundFoo = foo.bind(null, "a");
    boundFoo(); // Output: a
    `
  },
  {
    id: 23,
    code: true,
    question: "What is a Symbol in JavaScript, and what will be the result when comparing two Symbols with the same description?",
    answer: `
    const mySymbol1 = Symbol('description');
    const mySymbol2 = Symbol('description');

    console.log(mySymbol1 == mySymbol2);   // false
    console.log(mySymbol1 === mySymbol2);  // false
    `
  },
  {
    id: 24,
    code: true,
    question: "What will be the order of console logs for the following Promise code with a 5-second delay inside setTimeout?",
    answer: `
    let promise = new Promise(function (resolve, reject) {
      console.log("1");

      setTimeout(function () {
        console.log("start time");
        resolve('solved');
        console.log("end time");
      }, 5000);
    });

    console.log("4");

    promise.then((result) => {
      console.log("3");
      console.log(result);  // Logs: 'solved'
    });

    promise.catch((err) => {
      console.log(err);
    });

    // Output is
    1
    4
    // After 5 seconds:
    start time
    end time
    3
    solved
    `
  },
  {
    id: 25,
    code: true,
    question: "Write a function that initializes a counter and returns an object with the following methods",
    answer: `
    let counterList = function(init) {
      let counter = init;
      return {
        increment: function(val = 1) { // Default to 1 if val is not passed
            counter += val;
            return counter;
        },
        decrement: function() {
            counter -= 1;
            return counter;
        },
        reset: function() {
            counter = init;
            return counter;
        }
      };
    };

    let counter = counterList(10);

    console.log(counter.increment(1)); // 11
    console.log(counter.increment());  // 12
    console.log(counter.decrement());  // 11
    console.log(counter.reset());      // 10
    console.log(counter.decrement());  // 9
    `
  },
  {
    id: 26,
    code: true,
    question: "What is the output of the following code involving variable hoisting?",
    answer: `
    var a = 1000;

    function x() {
      var a;               // hoisted declaration
      console.log(a);      // undefined (not 1000)
      a = 50;
      console.log(a);      // 50
    }

    x();
    `
  },
  {
    id: 27,
    code: true,
    question: "How can you reverse an array using a for loop, and how does it compare to using the built-in reverse() method? What will be the output of both methods for the array below?",
    answer: `
    let array = [1, 2, 4, 10, 5, 6, 9, 8, 3, 7];
    let newArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
      newArray.push(array[i]);
    }

    array.reverse(); // reverses the original array in-place

    console.log(array);     // [7, 3, 8, 9, 6, 5, 10, 4, 2, 1]
    console.log(newArray);  // [7, 3, 8, 9, 6, 5, 10, 4, 2, 1]
    `
  },
  {
    id: 28,
    code: true,
    question: "Write two different ways to calculate the sum of numbers in an array.",
    answer: `
    // Approach 1: Using reduce()
    const numbers = [1, 2, 3, 4, 5];
    const sumWithReduce = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log("Using reduce:", sumWithReduce);  // Output: 15

    // Approach 2: Using a for loop
    let sumWithLoop = 0;
    for (let i = 0; i < numbers.length; i++) {
      sumWithLoop += numbers[i];
    }
    console.log("Using for loop:", sumWithLoop);  // Output: 15
    `
  },
  {
    id: 29,
    code: true,
    question: "How can you flatten a multi-dimensional array into a single-level array in JavaScript? Provide at least two different approaches.",
    answer: `
    // Using .flat() (Modern JavaScript)
    let arr1 = [[1, 2, 3], [4, 5], [6, 7, 8]];
    let flatArray1 = arr1.flat();  // Output: [1, 2, 3, 4, 5, 6, 7, 8]
    console.log(flatArray1);

    // Flattening with Depth (Nested Arrays)
    let arr2 = [[1, 2, [3, 4]], [5, 6], [7, [8]]];
    let flatArray2 = arr2.flat(2); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
    console.log(flatArray2);

    // Using reduce() + concat() (for older JS versions)
    let arr3 = [[1, 2, 3], [4, 5], [6, 7, 8]];
    let flatArray3 = arr3.reduce((acc, curr) => acc.concat(curr), []);
    console.log(flatArray3);  // Output: [1, 2, 3, 4, 5, 6, 7, 8]
    `
  },
  {
    id: 30,
    code: true,
    question: "How can you write functions in JavaScript to reverse a string and an array? Also, how can you reverse an array without modifying the original one?",
    answer: `
    // Reverse a String
    function reverseString(str) {
      return str.split('').reverse().join('');
    }

    console.log(reverseString("hello"));  // Output: "olleh"

    // Reverse an Array (Mutates the Original Array)
    function reverseArray(arr) {
      return arr.reverse();  // This modifies the original array
    }

    console.log(reverseArray([1, 2, 3, 4]));  // Output: [4, 3, 2, 1]
    
    // Reverse an Array Without Modifying the Original
    function reverseArrayCopy(arr) {
      return [...arr].reverse();  // Creates a shallow copy before reversing
    }

    console.log(reverseArrayCopy([1, 2, 3, 4]));  // Output: [4, 3, 2, 1]
    `
  },
  {
    id: 31,
    code: true,
    question: "How do you sort an array of numbers in ascending order using JavaScript?",
    answer: `
    function sortArray(arr) { 
      return arr.sort((a, b) => a - b); 
    }

    let arr = [5, 2, 8, 1, 9];
    console.log(sortArray(arr));  // Output: [1, 2, 5, 8, 9]
    `
  },
  {
    id: 32,
    code: true,
    question: "How can we count the occurrences of each character (or element) in a string or array and identify duplicates with their counts?",
    answer: `
    // Example input (can be a string or array)
    let arr = [1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5];

    function getDuplicates(input) {
      let counts = {};

      for (let item of input) {
        counts[item] = (counts[item] || 0) + 1;
      }

      return counts;

      // Filter only those with count > 1 (duplicates)
      let duplicates = [];
      for (let key in counts) {
        if (counts[key] > 1) {
          // duplicates[key] = counts[key];
          duplicates.push(key : counts[key]);
        }
      }

      return duplicates;
    }

    console.log(getDuplicates(arr));
    // Output example: { '1': 5, '2': 7, '3': 2, '4': 2, '5': 7 }
    `
  },
  {
    id: 33,
    code: true,
    question: "How do you calculate the average of the numeric values from an array of key-value pairs (nested arrays) in JavaScript?",
    answer: `
    let arr = [['a', 10], ['b', 25], ['c', 56], ['d', 67], ['e', 78]];

    // Extract the numbers (second element of each sub-array)
    let numbers = arr.map(item => item[1]);

    // Calculate the sum of numbers
    let sum = numbers.reduce((acc, num) => acc + num, 0);

    // Calculate the average
    let average = sum / numbers.length;

    console.log(average); // Output: 47.2
    `
  },
  {
    id: 34,
    code: true,
    question: "How can you split an array of 15 elements into 3 equal parts using a loop (without using .slice() method) in JavaScript?",
    answer: `
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    // Create an empty array to hold the 3 parts
    let parts = [[], [], []];

    // Calculate the size of each part
    let partSize = array.length / 3;

    // Distribute the elements using a loop
    for (let i = 0; i < array.length; i++) {
      let partIndex = Math.floor(i / partSize); // Determine the part index (0, 1, or 2)
      parts[partIndex].push(array[i]);
    }

    console.log(parts[0]); // Output: [1, 2, 3, 4, 5]
    console.log(parts[1]); // Output: [6, 7, 8, 9, 10]
    console.log(parts[2]); // Output: [11, 12, 13, 14, 15]
    `
  },
  {
    id: 35,
    code: true,
    question: "How can you merge two strings character by character in JavaScript, and append the remaining characters if their lengths differ?",
    answer: `
    let str = 'cat';
    let str1 = 'rabbit';

    let mergedString = '';

    // Get the length of the shorter string to avoid index errors
    let minLength = Math.min(str.length, str1.length);

    // Merge character by character
    for (let i = 0; i < minLength; i++) {
      mergedString += str[i] + str1[i];
    }

    // Append any remaining characters from the longer string
    mergedString += str.slice(minLength) + str1.slice(minLength);

    console.log(mergedString);  // Output: 'craatbbit'
    `
  },
  {
    id: 36,
    code: true,
    question: "How can you merge two arrays element by element (alternating) in JavaScript, and then append the remaining elements from the longer array?",
    answer: `
    let arr1 = [1, 2, 3, 4];
    let arr2 = [5, 6, 7, 8, 9, 10];

    function newArr(a, b) {
      let newArray = [];
      let minLength = Math.min(a.length, b.length);

      // Merge elements alternately
      for (let i = 0; i < minLength; i++) {
        newArray.push(a[i], b[i]);
      }

      // Append the remaining elements from the longer array
      newArray.push(...a.slice(minLength), ...b.slice(minLength));

      return newArray;
    }

    console.log(newArr(arr1, arr2));
    // Output: [1, 5, 2, 6, 3, 7, 4, 8, 9, 10]
    `
  },
  {
    id: 37,
    code: true,
    question: "How can you create a single JavaScript function that returns the sum of any number of arguments (e.g. sum(1, 2) or sum(2, 3, 5, 6)) without using the reduce() method?",
    answer: `
    // Logic without Reduce method.
    function sum(...args) {
      let total = 0;
      for (let i = 0; i < args.length; i++) {
        total += args[i];
      }
      return total;
    }

    console.log(sum(1, 2));         // Output: 3
    console.log(sum(2, 3, 5, 6));   // Output: 16

    // Logic without Reduce method.
    function sum(...args) {
      return args.reduce((total, num) => total + num, 0);
    }

    console.log(sum(1, 2));         // Output: 3
    console.log(sum(2, 3, 5, 6));   // Output: 16
    `
  },
  {
    id: 38,
    code: true,
    question: "What is a shallow copy in JavaScript, and how does it behave with nested objects?",
    answer: `
    // A shallow copy creates a new object or array, but only the first-level properties are copied.
    // Nested objects are still referenced (not deeply copied).

    const original = {
      name: "Alice",
      address: {
        city: "Wonderland",
        zip: 12345
      }
    };

    // Shallow copy using Object.assign()
    const shallowCopy = Object.assign({}, original);

    // Shallow copy using spread operator
    const shallowCopy2 = { ...original };

    // Modify the nested object in the original
    original.address.city = "Dreamland";

    console.log(original.address.city);      // Output: "Dreamland"
    console.log(shallowCopy.address.city);   // Output: "Dreamland" (same reference)
    console.log(shallowCopy2.address.city);  // Output: "Dreamland" (same reference)
    `
  },
  {
    id: 39,
    code: true,
    question: "What is a deep copy in JavaScript, and how can you create one to ensure nested objects are not affected by changes to the original?",
    answer: `
    // A deep copy creates a completely independent copy of an object,
    // including all nested objects and arrays.

    const original = {
      name: "Alice",
      address: {
        city: "Wonderland",
        zip: 12345
      }
    };

    // ✅ Option 1: Deep copy using structuredClone (modern & recommended)
    const deepCopy1 = structuredClone(original);

    // ✅ Option 2: Deep copy using JSON methods (not suitable for functions, Date, etc.)
    const deepCopy2 = JSON.parse(JSON.stringify(original));

    // ✅ Option 3: Deep copy using Lodash (external library)
    // const _ = require("lodash");
    // const deepCopy3 = _.cloneDeep(original);

    // Modifying the nested object in the original
    original.address.city = "Dreamland";

    // Outputs
    console.log(original.address.city);   // Output: "Dreamland"
    console.log(deepCopy1.address.city);  // Output: "Wonderland"
    console.log(deepCopy2.address.city);  // Output: "Wonderland"
    // console.log(deepCopy3.address.city); // Output: "Wonderland"
    `
  },
  {
    id: 40,
    code: true,
    question: "How can you create a custom polyfill for JavaScript's Array.prototype.map() method?",
    answer: `
    let arr = [1, 2, 3, 4, 5];

    // Built-in map method for reference
    const multiplyArray = arr.map((num, i, arr) => {
      return num * 3;
    });
    console.log("Built-in map:", multiplyArray);

    // Custom map method (polyfill)
    Array.prototype.myMap = function (cb) {
      let tempArray = [];
      for (let i = 0; i < this.length; i++) {
        tempArray.push(cb(this[i], i, this));
      }
      return tempArray;
    };

    // Using custom myMap
    const customMultiplyArray = arr.myMap((num, i, arr) => {
      return num * 3;
    });

    console.log("Custom myMap:", customMultiplyArray);
    `
  },
  {
    id: 41,
    code: true,
    question: "How do you return the duplicate element(s) in an array that appear more than half the length of the array?",
    answer: `
    let input = [3, 3, 4, 2, 4, 4, 2, 4, 4];
    let frequencyMap = {};

    // Count the frequency of each number
    for (let i = 0; i < input.length; i++) {
      if (frequencyMap[input[i]]) {
        frequencyMap[input[i]] += 1;
      } else {
        frequencyMap[input[i]] = 1;
      }
    }

    // Find elements that occur more than half the array's length
    let result = [];
    let halfLength = input.length / 2;

    for (let key in frequencyMap) {
      if (frequencyMap[key] > halfLength) {
        result.push(Number(key));
      }
    }

    console.log("Element(s) appearing more than half the length:", result);
    `
  },
  {
    id: 42,
    code: true,
    question: "Write a function createCounter that accepts an initial integer init and returns an object with three methods: increment(), decrement(), and reset(). Each method should behave as follows:",
    answer: `
    function createCounter(init) {
      let counter = init;

      return {
        increment: function () {
          counter += 1;
          return counter;
        },
        decrement: function () {
          counter -= 1;
          return counter;
        },
        reset: function () {
          counter = init;
          return counter;
        }
      };
    }

    let counter = createCounter(10);

    console.log(counter.increment()); // 11
    console.log(counter.increment()); // 12
    console.log(counter.decrement()); // 11
    console.log(counter.reset());     // 10
    console.log(counter.decrement()); // 9
    `
  },
  {
    id: 43,
    code: true,
    question: "How do you create a custom polyfill for the Array.prototype.filter() method in JavaScript?",
    answer: `
    let arr = [1, 2, 3, 4, 5];

    // Native filter method
    const filteredArray = arr.filter((num, i, array) => {
      return num > 3;
    });
    console.log("Built-in filter:", filteredArray);

    // Custom filter polyfill
    Array.prototype.myFilter = function (cb) {
      let tempArray = [];
      for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
          tempArray.push(this[i]);
        }
      }
      return tempArray;
    };

    // Using custom myFilter
    const customFilteredArray = arr.myFilter((num, i, array) => {
      return num > 3;
    });
    console.log("Custom myFilter:", customFilteredArray);
    `
  },
  {
    id: 44,
    code: true,
    question: "How can we keep the original array unchanged while assigning it to a new variable in JavaScript?",
    answer: `
    // Both variables point to the same array (reference)
    var arr = [1, 2, 3];
    var arr2 = arr;
    arr2.push(4);

    console.log("Original:", arr);   // [1, 2, 3, 4]
    console.log("Copy:", arr2);     // [1, 2, 3, 4]

    // Method 1: structuredClone() (for deep copy)
    var arr = [1, 2, 3];
    var arr2 = structuredClone(arr);
    arr2.push(4);

    console.log("Original:", arr);   // [1, 2, 3]
    console.log("Copy:", arr2);      // [1, 2, 3, 4]

    // Method 2: Spread Operator
    var arr = [1, 2, 3];
    var arr2 = [...arr];
    arr2.push(4);

    console.log("Original:", arr);   // [1, 2, 3]
    console.log("Copy:", arr2);      // [1, 2, 3, 4]

    // Method 3: slice()
    var arr = [1, 2, 3];
    var arr2 = arr.slice();
    arr2.push(4);

    console.log("Original:", arr);   // [1, 2, 3]
    console.log("Copy:", arr2);      // [1, 2, 3, 4]
    
    // Method 4: concat()
    var arr = [1, 2, 3];
    var arr2 = [].concat(arr);
    arr2.push(4);

    console.log("Original:", arr);   // [1, 2, 3]
    console.log("Copy:", arr2);      // [1, 2, 3, 4]

    // Method 5: map()
    var arr = [1, 2, 3];
    var arr2 = arr.map(item => item);
    arr2.push(4);

    console.log("Original:", arr);   // [1, 2, 3]
    console.log("Copy:", arr2);      // [1, 2, 3, 4]

    // Method 6: Manual Loop
    var arr = [1, 2, 3];
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
      arr2.push(arr[i]);
    }
    arr2.push(4);

    console.log("Original:", arr);   // [1, 2, 3]
    console.log("Copy:", arr2);      // [1, 2, 3, 4]
    
    // Method 7: Object.assign()
    var arr = [1, 2, 3];
    var arr2 = Object.assign([], arr);
    arr2.push(4);

    console.log("Original:", arr);   // [1, 2, 3]
    console.log("Copy:", arr2);      // [1, 2, 3, 4]
    `
  },
  {
    id: 45,
    code: true,
    question: "How can we create a custom reduce method (polyfill) for arrays in JavaScript?",
    answer: `
    // Original array
    const arr = [1, 2, 3, 4, 5];

    // Native reduce usage
    const sum = arr.reduce((acc, curr, i, array) => {
      return acc + curr;
    }, 0);

    console.log("Native Reduce:", sum); // Output: 15

    // Custom reduce method (Polyfill)
    Array.prototype.myReduce = function (callback, initialValue) {
      let accumulator = initialValue;
      let startIndex = 0;

      // If initialValue is not provided, use first element of array
      if (accumulator === undefined) {
        accumulator = this[0];
        startIndex = 1;
      }

      for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
      }

      return accumulator;
    };

    // Using custom myReduce
    const customSum = arr.myReduce((acc, curr) => {
      return acc + curr;
    }, 0);

    console.log("Custom myReduce:", customSum); // Output: 15
    `
  },
  {
    id: 46,
    code: true,
    question: "How can we find duplicate values from an array in JavaScript using different methods?",
    answer: `
    // 1. Using Set to track seen and duplicate values:
    let arr = [2, 3, 4, 3, 4, 5];

    let originalValues = new Set();
    let duplicateValues = new Set();

    arr.forEach((item) => {
      if (originalValues.has(item)) {
        duplicateValues.add(item);
      } else {
        originalValues.add(item);
    }

    });

    console.log([...duplicateValues]); // Output: [3, 4]

    // 2. Using Set for unique and array for duplicates:
    let arr = [2, 3, 4, 3, 4, 5];

    let originalValues = new Set();
    let duplicateValues = [];

    arr.forEach((item) => {
      if (originalValues.has(item)) {
        if (!duplicateValues.includes(item)) {
          duplicateValues.push(item);
        }
      } else {
        originalValues.add(item);
      }
    });

    console.log(duplicateValues); // Output: [3, 4]
    
    // Using reduce() and indexOf:
    const array = [2, 3, 4, 5, 3, 4];

    const duplicates = array.reduce((acc, item, index, arr) => {
      if (arr.indexOf(item) !== index && !acc.includes(item)) {
        acc.push(item);
      }
      return acc;
    }, []);

    console.log(duplicates); // Output: [3, 4]
    
    // Using filter():
    let arr = [2, 3, 4, 3, 4, 5];

    let duplicates = arr.filter((item, index, array) => {
      return array.indexOf(item) !== index && array.indexOf(item) === index;
    });

    console.log([...new Set(duplicates)]); // Output: [3, 4]
    `
  },
  {
    id: 47,
    code: true,
    question: "How can we use object and array destructuring to extract values in JavaScript?",
    answer: `
    // 1. Object Destructuring:
    let object = { 
      State: {
        City: 'Hyderabad'
      } 
    };

    // Destructuring the nested object
    let { State: { City } } = object;

    console.log(City); // Output: 'Hyderabad'
    
    // 2. Array Destructuring:
    let arr = [1, 2, 3, [4, 5]];

    // Destructuring array and nested array
    let [a, b, c, [d, e]] = arr;

    console.log(c); // Output: 3
    console.log(e); // Output: 5
    `
  },
  {
    id: 48,
    code: true,
    question: "How to group employees by their department, returning an object where each key is a department and the value is an array of employee names?",
    answer: `
    // 1. Using reduce():
    const employees = [
      { name: 'Alice', department: 'HR', salary: 50000 },
      { name: 'Bob', department: 'Engineering', salary: 60000 },
      { name: 'Charlie', department: 'HR', salary: 55000 }
    ];

    const groupedByDepartment = employees.reduce((acc, employee) => {
      if (!acc[employee.department]) {
        acc[employee.department] = [];
      }
      acc[employee.department].push(employee.name);
      return acc;
    }, {});

    console.log(groupedByDepartment);
    // Output: { HR: ['Alice', 'Charlie'], Engineering: ['Bob'] }
    
    // 2. Using forEach() with a plain object:
    const groupedByDepartment = {};

    employees.forEach(employee => {
      if (!groupedByDepartment[employee.department]) {
        groupedByDepartment[employee.department] = [];
      }
      groupedByDepartment[employee.department].push(employee.name);
    });

    console.log(groupedByDepartment);
    // Output: { HR: ['Alice', 'Charlie'], Engineering: ['Bob'] }

    // 3. Using Map (then convert to object):
    const groupedByDepartment = new Map();

    employees.forEach(employee => {
      if (!groupedByDepartment.has(employee.department)) {
        groupedByDepartment.set(employee.department, []);
      }
      groupedByDepartment.get(employee.department).push(employee.name);
    });

    console.log(Object.fromEntries(groupedByDepartment));
    // Output: { HR: ['Alice', 'Charlie'], Engineering: ['Bob'] }

    // 4. Using a for...of loop:
    const groupedByDepartment = {};

    for (const employee of employees) {
      if (!groupedByDepartment[employee.department]) {
        groupedByDepartment[employee.department] = [];
      }
      groupedByDepartment[employee.department].push(employee.name);
    }

    console.log(groupedByDepartment);
    // Output: { HR: ['Alice', 'Charlie'], Engineering: ['Bob'] }
    `
  },
  {
    id: 49,
    code: true,
    question: "How can we create a custom reduce method (polyfill) for arrays in JavaScript?",
    answer: `
    // solution 1
    let arr = [3, 9, 15, 6, 12, 8, 10];
    let target = 18;
    let used = new Set();
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      if (used.has(i)) continue;

      for (let j = i + 1; j < arr.length; j++) {
        if (used.has(j)) continue;

        if (arr[i] + arr[j] === target) {
          result.push([arr[i], arr[j]]);
          used.add(i);
          used.add(j);
          break; // move to the next i
        }
      }
    }

    console.log(result);
    // Output: [ [ 3, 15 ], [ 6, 12 ], [ 8, 10 ] ]
    
    // solution 2
    arr = [3, 9, 15, 6, 12, 8, 10];

    let target = 18;

    let newArray = []

    for(let i=0; i<=arr.length; i++) {
      for(let j=0; j<=arr.length; j++) {
          if(arr.indexOf(arr[i]) !== arr.indexOf(arr[j])) {
            if(arr[i] + arr[j] == target){
                newArray.push([arr[i], arr[j]]);
                arr.splice(i, 1);
                break;
            } 
          }
      }
    }
    console.log(newArray); // output: [ [ 3, 15 ], [ 6, 12 ], [ 8, 10 ] ]
    `
  },
  {
    id: 50,
    code: true,
    question: "Write a JavaScript function to flatten a nested array of any depth.",
    answer: `
    // Using Recursion with reduce
    const arr = [1, 2, [3, 4], [5, [6, 7]]];

    function flatArray(array) {
      return array.reduce((acc, ele) => {
        return Array.isArray(ele) ? acc.concat(flatArray(ele)) : acc.concat(ele);
      }, []);
    }

    console.log(flatArray(arr));  // Output: [1, 2, 3, 4, 5, 6, 7]

    // Using Recursion with for...of
    const arr = [1, 2, [3, 4], [5, [6, 7]]];

    function flattenArray(array) {
      let result = [];
      for (let ele of array) {
        if (Array.isArray(ele)) {
          result = result.concat(flattenArray(ele));
        } else {
          result.push(ele);
        }
      }
      return result;
    }

    console.log(flattenArray(arr));  // Output: [1, 2, 3, 4, 5, 6, 7]
    `
  },
  {
    id: 51,
    code: true,
    question: "Write a function that returns all non-duplicate (unique) characters in a string.",
    answer: `
    function getUniqueCharacters(str) {
      let charCount = {};

      // Count each character
      for (let char of str) {
          charCount[char] = (charCount[char] || 0) + 1;
      }

      // Collect characters that appear only once
      let uniqueChars = [];

      for (let char in charCount) {
          if (charCount[char] === 1) {
            uniqueChars.push(char);
          }
      }

      return uniqueChars;
    }
    console.log(getUniqueCharacters('banana')); // Output: [ 'b' ]
    `
  },
  {
    id: 52,
    code: true,
    question: "How can we create a method for existing class",
    answer : `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Product Cards</title>
      <style>
          .card_main {
            border: 1px solid #ccc;
            padding: 10px;
            margin: 10px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
      </style>
    </head>
    <body>

      <h2>Product List</h2>
      <div id="demo"></div>

      <script>
          let userArray = [];

          async function fetchData() {
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                const data = await res.json();
                userArray = data;
                responseUsers(userArray);
            } catch (error) {
                console.error("Error fetching data:", error);
                document.getElementById('demo').innerHTML = "<div>Error loading data</div>";
            }
          }

          fetchData();

          function responseUsers(data) {
            const container = document.getElementById('demo');

            container.innerHTML = ''; // Clear previous content

            if (!data || data.length === 0) {
                container.innerHTML = \\\`<div>There is no data</div>\\\`;
            } else {
                data.forEach(item => {
                  const card = document.createElement('div');
                  card.className = 'card_main';

                  card.innerHTML = \\\`
                      <h4>\${item.category}</h4>
                      <p>\${item.title}</p>
                  \\\`;

                  container.appendChild(card);
                });
            }
          }
      </script>
    </body>
    </html>
    `
  },
  {
    id: 53,
    code: true,
    question: "Given an array of integers (which can include negative, positive, and zero values), find the length of the longest contiguous subarray whose elements sum up to zero.",
    answer: `
    function longestSubarrayWithZeroSum(arr) {
      const map = new Map();
      let sum = 0;
      let maxLen = 0;

      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sum === 0) {
            maxLen = i + 1;
        }

        if (map.has(sum)) {
            maxLen = Math.max(maxLen, i - map.get(sum));
        } else {
            map.set(sum, i);
        }
      }

      return maxLen;
    }

    // Test Example
    const input = [15, -2, 2, -8, 1, 7, 10, 23];
    console.log("Longest Subarray Length:", longestSubarrayWithZeroSum(input)); // Output: 5
    `
  },
  {
    id: 54,
    code: true,
    question: "Given an array of intervals where each interval is represented as a pair [start, end], merge all overlapping intervals and return an array of the merged intervals sorted by their start times.",
    answer: `
    function mergeIntervals(intervals) {
      if (!intervals.length) return [];

      // Step 1: Sort intervals based on starting time
      intervals.sort((a, b) => a[0] - b[0]);

      const merged = [intervals[0]];

      for (let i = 1; i < intervals.length; i++) {
          const last = merged[merged.length - 1];
          const current = intervals[i];

          if (current[0] <= last[1]) {
              // Overlapping intervals — merge them
              last[1] = Math.max(last[1], current[1]);
          } else {
              // No overlap — push the current interval
              merged.push(current);
          }
      }

      return merged;
    }

    // Test Example
    const input = [[1,3], [2,6], [8,10], [15,18]];
    console.log("Merged Intervals:", mergeIntervals(input));
    // Output: [[1,6], [8,10], [15,18]]
    `
  },
  {
    id: 55,
    code: true,
    question: "Given an array of integers, find the element that appears more than ⌊ n/2 ⌋ times (where n is the size of the array).",
    answer: `
    function findMajorityElement(nums) {
        let candidate = null;
        let count = 0;

        // Phase 1: Find a potential candidate
        for (let num of nums) {
            if (count === 0) {
                candidate = num;
                count = 1;
            } else if (num === candidate) {
                count++;
            } else {
                count--;
            }
        }

        // Phase 2: Verify the candidate
        let occurrence = nums.filter(n => n === candidate).length;
        return occurrence > Math.floor(nums.length / 2) ? candidate : -1;
    }

    // Test Example
    const input = [3, 3, 4, 2, 4, 4, 2, 4, 4];
    console.log("Majority Element:", findMajorityElement(input)); // Output: 4
    `
  },
  {
    id: 56,
    code: true,
    question: "Given an array of integers and a target sum, find all unique pairs of elements that add up to the given target.",
    answer: `
    function findPairsWithSum(arr, target) {
        const seen = new Set();
        const pairs = new Set();

        for (let num of arr) {
            const complement = target - num;
            if (seen.has(complement)) {
                // Create sorted tuple to avoid duplicates like (3,1) and (1,3)
                const pair = [Math.min(num, complement), Math.max(num, complement)].toString();
                pairs.add(pair);
            }
            seen.add(num);
        }

        // Convert string pairs back to array format
        return [...pairs].map(pair => pair.split(',').map(Number));
    }

    // Test Example
    const input = [1, 2, 3, 4, 3, 2, 1];
    const target = 4;
    console.log("Unique Pairs:", findPairsWithSum(input, target));
    // Output: [ [1, 3], [2, 2] ]
    `
  },
  {
    id: 57,
    code: true,
    question: "Given an unsorted array of integers, find the Kth largest element in the array.",
    answer: `
    function findKthLargest(arr, k) {
        if (k < 1 || k > arr.length) {
            return null; // or throw an error for invalid k
        }

        // Sort array in descending order
        arr.sort((a, b) => b - a);

        return arr[k - 1];
    }

    // Test Case
    const input = [3, 2, 1, 5, 6, 4];
    const k = 2;

    console.log("Kth Largest Element:", findKthLargest(input, k)); // Output: 5
    `
  },
  {
    id: 58,
    code: true,
    question: "Given two arrays of integers, return a new array that represents their intersection, where each element in the result should appear as many times as it shows in both arrays.",
    answer: `
    function intersect(arr1, arr2) {
        const map = {};
        const result = [];

        // Count frequency of elements in arr1
        for (let num of arr1) {
            map[num] = (map[num] || 0) + 1;
        }

        // Check elements in arr2 against the map
        for (let num of arr2) {
            if (map[num] > 0) {
                result.push(num);
                map[num]--;
            }
        }

        return result;
    }

    // Test Example
    const arr1 = [1, 2, 2, 1];
    const arr2 = [2, 2];

    console.log("Intersection:", intersect(arr1, arr2)); // Output: [2, 2]
    `
  },
  {
    id: 59,
    code: true,
    question: "Given an array nums and an integer k, return an array containing the maximum value in each contiguous subarray (sliding window) of size k.",
    answer: `
    function maxSlidingWindow(nums, k) {
        const deque = [];
        const result = [];

        for (let i = 0; i < nums.length; i++) {
            // Remove indices out of the current window
            while (deque.length && deque[0] <= i - k) {
                deque.shift();
            }

            // Remove smaller values from the back of the deque
            while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
                deque.pop();
            }

            // Add current index
            deque.push(i);

            // Append max to result once first window is reached
            if (i >= k - 1) {
                result.push(nums[deque[0]]);
            }
        }

        return result;
    }

    // Test Case
    const nums = [1, 3, -1, -3, 5, 3, 6, 7];
    const k = 3;

    console.log("Sliding Window Maximum:", maxSlidingWindow(nums, k));  
    // Output: [3, 3, 5, 5, 6, 7]
    `
  },
  {
    id: 60,
    code: true,
    question: "Given an array of positive integers and an integer S, find a contiguous subarray whose elements sum to exactly S.",
    answer: `
    function findSubarrayWithSum(arr, target) {
        let start = 0;
        let currentSum = 0;

        for (let end = 0; end < arr.length; end++) {
            currentSum += arr[end];

            // Shrink window from the left if sum exceeds target
            while (currentSum > target && start < end) {
                currentSum -= arr[start];
                start++;
            }

            if (currentSum === target) {
                return arr.slice(start, end + 1);
            }
        }

        return []; // No subarray found
    }

    // Test Example
    const input = [1, 2, 3, 7, 5];
    const S = 12;

    console.log("Subarray with sum:", findSubarrayWithSum(input, S)); 
    // Output: [2, 3, 7]
    `
  }, 
  {
    id: 61,
    code: true,
    question: "Given an unsorted array of integers, find the smallest missing positive integer.",
    answer: `
    // Solution 1
    function firstMissingPositive(nums) {
        const n = nums.length;

        for (let i = 0; i < n; i++) {
            while (
                nums[i] > 0 &&
                nums[i] <= n &&
                nums[nums[i] - 1] !== nums[i]
            ) {
                // Swap nums[i] with nums[nums[i] - 1]
                const correctIdx = nums[i] - 1;
                [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
            }
        }

        for (let i = 0; i < n; i++) {
            if (nums[i] !== i + 1) {
                return i + 1;
            }
        }

        return n + 1;
    }

    // Test Case
    const input = [1, 2, 0];
    console.log("First Missing Positive:", firstMissingPositive(input)); 
    // Output: 3
    
    // Solution 2
    function firstMissingPositive(nums) {
      const set = new Set(nums);
      let i = 1;
      while (set.has(i)) i++;
      return i;
    }
    `
  },
  {
    id: 62,
    code: true,
    question: "Given an array of integers, check whether for every element x, there exists another element in the array that is exactly 2 * x.",
    answer: `
    // Solution 1
    function canReorderDoubled(arr) {
        const count = new Map();

        // Count frequency of each number
        for (let num of arr) {
            count.set(num, (count.get(num) || 0) + 1);
        }

        // Sort by absolute value to handle negatives correctly
        arr.sort((a, b) => Math.abs(a) - Math.abs(b));

        for (let num of arr) {
            if (count.get(num) === 0) continue;

            const double = num * 2;

            if (!count.get(double)) {
                return false;
            }

            // Match num with its double
            count.set(num, count.get(num) - 1);
            count.set(double, count.get(double) - 1);
        }

        return true;
    }

    // Test Case
    console.log(canReorderDoubled([3, 1, 3, 6])); // Output: false
    
    // Solution 2
    Input: [4, -2, 2, -4]
    Output: true
    Explanation: Pairs are (2,4) and (-2,-4)
    `
  },
  {
    id: 63,
    code: true,
    question: "Given an array of positive integers nums and an integer K, return all unique combinations of elements from nums where the chosen numbers sum to K.",
    answer: `
    function combinationSum(nums, target) {
        const result = [];

        function backtrack(remaining, start, path) {
            if (remaining === 0) {
                result.push([...path]);
                return;
            }

            for (let i = start; i < nums.length; i++) {
                if (nums[i] <= remaining) {
                    path.push(nums[i]);
                    backtrack(remaining - nums[i], i, path); // Not i + 1 because we can reuse
                    path.pop(); // Backtrack
                }
            }
        }

        backtrack(target, 0, []);
        return result;
    }

    // Test Case
    const nums = [2, 3, 6, 7];
    const target = 7;
    console.log("Subsets that sum to", target, ":", combinationSum(nums, target));
    // Output: [ [7], [2, 2, 3] ]
    `
  },
  {
    id: 64,
    code: true,
    question: "What is the prototype chain in JavaScript, and how does inheritance work in JavaScript objects?",
    answer: `
    1. Prototype Chain (Definition)
      In JavaScript, every object has an internal link to another object called its prototype.
      This chain of linked objects is known as the prototype chain.

      When you try to access a property or method on an object:

      JavaScript first looks for it on the object itself.

      If not found, it looks up the prototype chain until it finds it or reaches null.

    2. Inheritance in JavaScript
      JavaScript uses prototype-based inheritance, not classical inheritance like Java or C++.
      Objects inherit properties and methods from their prototype.
    
    // Example
    // Parent constructor
    function Animal(name) {
      this.name = name;
    }

    Animal.prototype.speak = function () {
      return \\\` \${this.name} makes a noise. \\\`;
    };

    // Child constructor
    function Dog(name) {
      Animal.call(this, name); // Inherit properties
    }

    // Inherit methods using prototype chain
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.constructor = Dog;

    // Add method to Dog
    Dog.prototype.bark = function () {
      return \\\` \${this.name} barks!\\\`;
    };

    const dog = new Dog('Buddy');

    console.log(dog.name);           // Buddy (own property)
    console.log(dog.bark());         // Buddy barks! (from Dog.prototype)
    console.log(dog.speak());        // Buddy makes a noise. (from Animal.prototype)
    console.log(dog.__proto__);      // Dog.prototype
    console.log(dog.__proto__.__proto__); // Animal.prototype
    `
  },
  {
    id: 65,
    code: true,
    question: "What is the difference between null and undefined in JavaScript?",
    answer: `
    let a;
    console.log(a);           // undefined (automatically set by JS)

    let b = null;
    console.log(b);           // null (manually assigned to mean "no value")

    // Type checking
    console.log(typeof a);    // "undefined"
    console.log(typeof b);    // "object"

    // Equality checks
    console.log(a == b);      // true  (both are loosely equal)
    console.log(a === b);     // false (different types)

    Use undefined when something is missing or hasn't been set.

    Use null when you want to explicitly say: "This should have a value, but it's empty for now."

    Prefer strict equality (===) in comparisons to avoid unexpected results.
    `
  },
  {
    id: 66,
    code: true,
    question: "How can you check if an object has a specific property in JavaScript?",
    answer: `
    const user = {
      name: 'Kiran',
      age: 30
    };

    // ✅ Method 1: Using hasOwnProperty()
    console.log(user.hasOwnProperty('name')); // true
    console.log(user.hasOwnProperty('email')); // false

    // ✅ Method 2: Using Object.hasOwn() (modern, ES2022+)
    console.log(Object.hasOwn(user, 'age')); // true
    console.log(Object.hasOwn(user, 'email')); // false

    // ⚠️ Avoid using 'in' if you only want own properties
    console.log('toString' in user); // true (inherited from Object.prototype)
    
    hasOwnProperty() checks only the object's own properties, not those inherited through the prototype chain.

    Object.hasOwn() is a newer and safer alternative introduced in ES2022.

    'property' in object checks both own and inherited properties, so use it carefully.
    `
  },
  {
    id: 67,
    code: true,
    question: "What is Object Destructuring in JavaScript?",
    answer: `
    const user = {
      name: 'Kiran',
      age: 30,
      email: 'kiran@example.com'
    };

    // 1. Destructuring
    // This line pulls out name and age from the user object and creates separate variables with the same names.
    const { name, age } = user;

    console.log(name); // 'Kiran'
    console.log(age);  // 30
    
    // 2. Renaming During Destructuring:
    const { name: userName, age: userAge } = user;

    console.log(userName); // 'Kiran'
    console.log(userAge);  // 30
    
    // 3. Providing Default Values:
    const { phone = 'Not Provided' } = user;

    console.log(phone); // 'Not Provided' (since phone doesn't exist in user)
    
    // 4. Destructuring in Function Parameters
    function printUser({ name, email }) {
      console.log(\\\` Name: \${name}, Email: \${email}\\\`);
    }

    printUser(user);
    // Output: Name: Kiran, Email: kiran@example.com
    `
  },
  {
    id: 68,
    code: true,
    question: "What is Array Destructuring?",
    answer: `
    const colors = ['red', 'green', 'blue'];

    // 1. Destructuring
    const [first, second, third] = colors;

    console.log(first);  // 'red'
    console.log(second); // 'green'
    console.log(third);  // 'blue'
    
    // 2. Skipping Items
    const [first, , third] = colors;

    console.log(first);  // 'red'
    console.log(third);  // 'blue'

    // 3. Default Values
    const numbers = [42];
    const [a, b = 100] = numbers;

    console.log(a); // 42
    console.log(b); // 100 (default, since second value is missing)
    
    // 4. Swapping Variables:
    let x = 1;
    let y = 2;

    // 5. Swap using destructuring
    [x, y] = [y, x];

    console.log(x); // 2
    console.log(y); // 1

    // 6. Destructuring from a Function Return:
    function getCoordinates() {
      return [25.5, 42.1];
    }

    const [lat, lon] = getCoordinates();

    console.log(lat); // 25.5
    console.log(lon); // 42.1
    `
  },
  {
    id: 69,
    code: true,
    question: "How to Optimize the Performance of Objects in JavaScript",
    answer: `
    // 1. Use Object Literals for Simple Objects
    // Fast and memory efficient
    const user = { name: 'Kiran', age: 30 };
    // Avoid using new Object() which is slower and unnecessary.
    
    // 2. Avoid Adding/Deleting Properties Dynamically
    // ❌ Slows down optimization
    user.email = 'kiran@example.com';
    delete user.age;
    
    // 3. Use Object.create(null) for Pure Dictionaries
    const dict = Object.create(null);
    dict['key'] = 'value';
    // This creates a cleaner object with no prototype, ideal for key-value storage (no inherited methods like toString).

    // 4. Use Map for Frequent Key-Based Operations
    const map = new Map();
    map.set('key', 'value');
    
    // 5. Avoid Deep Nesting
    // Deeply nested objects increase lookup time and readability issues.
    // ❌ Bad
    user.profile.contact.address.city

    // ✅ Better
    const { city } = user.profile.contact.address;
    
    // 6. Freeze Constant Objects
    const CONFIG = Object.freeze({
      API_URL: 'https://api.example.com'
    });
    `
  },
  {
    id: 70,
    code: true,
    question: "Can you explain the concept of object immutability in JavaScript and how it can be achieved?",
    answer: `
    // What is Object Immutability?
    Object immutability means once an object is created, it cannot be changed — its properties and values remain constant.
    In JavaScript, objects are mutable by default, so we need to take specific steps to make them immutable.

    // Why is Immutability Important?
    1. Prevents unexpected changes (especially in large applications).
    2. Makes code more predictable and easier to debug.
    3. Essential in functional programming and state management (like Redux or NgRx).

    // How to Make an Object Immutable?
    1. Use Object.freeze()
    2. Use Object.seal()
    3. Use Immutable.js
    4. Use Redux

    // 1. Using Object.freeze() (Shallow Freeze)
    const user = Object.freeze({
      name: 'Kiran',
      age: 30
    });

    user.age = 35;         // ❌ Won’t change
    console.log(user.age); // 30
    
    // 2. Deep Freeze (Recursive Freeze)
    function deepFreeze(obj) {
      Object.getOwnPropertyNames(obj).forEach(prop => {
        if (typeof obj[prop] === 'object' && obj[prop] !== null) {
          deepFreeze(obj[prop]);
        }
      });

      return Object.freeze(obj);
    }

    const profile = deepFreeze({
      name: 'Kiran',
      address: {
        city: 'Hyderabad',
        country: 'India'
      }
    });

    profile.address.city = 'Delhi';         // ❌ Will not change
    console.log(profile.address.city);      // 'Hyderabad'
    
    // 3. Using Libraries (Optional)
    Libraries like Immutable.js, Immer, or Lodash/fp help manage immutability in large-scale apps.

    // 4. Immutability via Copying Instead of Mutating
    const user = { name: 'Kiran', age: 30 };

    // Instead of mutating
    const updatedUser = { ...user, age: 35 };

    console.log(user.age);        // 30 (original remains unchanged)
    console.log(updatedUser.age); // 35 (new object)
    `
  },
  {
    id: 71,
    code: true,
    question: "Can you explain the concept of memory leaks in the context of objects in JavaScript? How can they be avoided, especially in complex object structures?",
    answer: `
    // What is a Memory Leak in JavaScript?
    A memory leak happens when memory that’s no longer needed isn’t released by the JavaScript engine. 
    This leads to increasing memory usage over time, eventually slowing down or crashing the application.

    In the context of objects, memory leaks often occur when:
    1. Objects are still referenced (and thus cannot be garbage-collected).
    2. You unintentionally hold on to large or nested data.
    3. You create circular references.

    // 1. Unintentional Global Variables
    function createUser() {
      user = { name: 'Kiran' }; // ❌ No 'let', 'const', or 'var' – becomes global
    }

    // 2. Detached DOM Nodes
    const element = document.getElementById('myDiv');
    const data = { user: 'Kiran' };

    // Element removed from DOM but still referenced
    document.body.removeChild(element);
    // ❌ memory leak because \\\`element\\\` is still referenced
   
    // 3. Closures Holding References
    function createClosure() {
      const bigObject = { data: new Array(1000000).fill('data') };

      return function() {
        console.log(bigObject.data[0]);
      };
    }

    const leak = createClosure(); // bigObject stays in memory
    
    // 4. Event Listeners Not Removed
    const button = document.getElementById('submit');

    function handleClick() {
      console.log('Clicked');
    }

    button.addEventListener('click', handleClick);

    // ❌ If button is removed but listener isn't — memory leak!

    // 5. Timers (setInterval) That Aren’t Cleared
    setInterval(() => {
      console.log('Still running...');
    }, 1000);

    // ❌ Memory leak if interval keeps referencing objects after they're obsolete

    // 6. Using WeakMap to Prevent Leaks
    let cache = new WeakMap();

    function storeUser(user) {
      const data = { role: 'admin' };
      cache.set(user, data);
    }

    // If user is dereferenced elsewhere, it will be garbage-collected
    `
  },
  {
    id: 72,
    code: true,
    question: "What is the Singleton Pattern?",
    answer: `
    The Singleton Pattern ensures that only one instance of a class (or object) is created throughout the entire application.
    It provides a global point of access to that instance.

    // Why Use Singleton?
    1. Shared configuration/state (e.g., theme, logger, settings).
    2. Avoid unnecessary duplication (e.g., DB connection, Auth manager).
    3. Centralized service or cache.

    // Simple Singleton Example (Using a Class)
    class AppConfig {
      constructor() {
        if (AppConfig.instance) {
          return AppConfig.instance;
        }

        this.apiUrl = 'https://api.example.com';
        this.version = '1.0.0';

        AppConfig.instance = this;
      }
    }

    const config1 = new AppConfig();
    const config2 = new AppConfig();

    console.log(config1 === config2); // true ✅

    // Modern Singleton (Using IIFE or Closure)
    const ConfigSingleton = (function () {
      let instance;

      function createInstance() {
        return {
          apiKey: 'ABC123',
          baseUrl: 'https://api.example.com'
        };
      }

      return {
        getInstance: function () {
          if (!instance) {
            instance = createInstance();
          }
          return instance;
        }
      };
    })();

    const configA = ConfigSingleton.getInstance();
    const configB = ConfigSingleton.getInstance();

    console.log(configA === configB); // true ✅

    // ES6 Module Singleton (Best for Frontend Apps)
    // config.js
    const config = {
      apiUrl: 'https://api.example.com',
      token: null
    };

    export default config;

    // main.js
    import config from './config.js';

    config.token = 'my-token'; // shared across all imports
    `
  },
  {
    id: 73,
    code: true,
    question: "What is the prototype Property in JavaScript?",
    answer: `
    In JavaScript, every function (that can be used as a constructor) has a special property called .prototype.
    This prototype property is used to add methods and properties that should be shared across all instances created by that constructor function.
    
    When you create an object using a constructor function or class, the object inherits from the constructor’s prototype.

    // Example Using Constructor Function:
    function Person(name) {
      this.name = name;
    }

    // Adding a method to the prototype
    Person.prototype.sayHello = function() {
      return \\\` Hello, I'm \${this.name}\\\`;
    };

    const p1 = new Person('Kiran');
    const p2 = new Person('Teja');

    console.log(p1.sayHello()); // "Hello, I'm Kiran"
    console.log(p2.sayHello()); // "Hello, I'm Teja"

    console.log(p1.sayHello === p2.sayHello); // true ✅ (shared method)
    
    // How Inheritance Works with Prototypes:
    Every object in JavaScript has an internal link to another object called its prototype ([[Prototype]]), 
    which can be accessed via Object.getPrototypeOf() or __proto__.

    console.log(Object.getPrototypeOf(p1) === Person.prototype); // true

    // With ES6 Classes (Under the Hood, They Use Prototypes Too):
    class Animal {
      speak() {
        return 'Makes a sound';
      }
    }

    const a = new Animal();
    console.log(a.speak()); // "Makes a sound"
    console.log(Object.getPrototypeOf(a) === Animal.prototype); // true
    `
  },
  {
    id: 74,
    code: true,
    question: "How can you track user idle time in JavaScript?",
    answer: `
    let idleTime = 0;
    const idleThreshold = 10;
    let hasAlerted = false; // Prevent multiple alerts

    // Reset idle time on user activity
    const resetIdleTime = () => {
      idleTime = 0;
      hasAlerted = false; // Reset alert flag when user is active again
    };

    const events = ['mousemove', 'keydown', 'mousedown', 'touchstart', 'scroll'];

    // Add event listeners for user activity
    events.forEach(event => {
      document.addEventListener(event, resetIdleTime, false);
    });

    // Check idle time every second
    const checkIdleTime = () => {
      idleTime++;
      console.log(\\\` Idle time: \${idleTime} seconds \\\`);

      if (idleTime >= idleThreshold && !hasAlerted) {
        hasAlerted = true;
        console.log('User is idle!');
        alert('You have been idle for 10 seconds!');
      }
    };

    setInterval(checkIdleTime, 1000);
    `
  },
  {
    id: 75,
    code: true,
    question: "How can you swap values between two variables without using a third variable in JavaScript?",
    answer: `
    // 1. Using Array Destructuring (ES6+ — Best for All Types)
      let a = 'kiran';
      let b = 'teja';

      [a, b] = [b, a];  // Swap using destructuring

      console.log(a, b); // Output: teja kiran
    
    // 2. Using Bitwise XOR (Only for Numbers)
      let a = 89;  // binary: 1011001
      let b = 35;  // binary: 0100011

      a = a ^ b;   // a = 89 ^ 35 = 122 (01111010)
      b = a ^ b;   // b = 122 ^ 35 = 89
      a = a ^ b;   // a = 122 ^ 89 = 35

      console.log(a, b); // Output: 35 89 ✅
    `
  },
  {
    id: 76,
    code: true,
    question: "How many ways can you create an object in JavaScript?",
    answer: `
    // 1. Object Literal (Most Common & Simple)
    let obj = { a: '1' };

    // 2. Using new Object() Constructor
    let obj = new Object();
    obj.name = 'Kiran';
    obj.age = 30;

    // 3. Using a Constructor Function
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }

    let person = new Person('Kiran', 30);
    
    // 4. Using Object.create()
    let person = Object.create(Object.prototype); // or use a custom prototype
    person.name = 'Kiran';
    person.age = 30;
    
    // 5. Using ES6 Class Syntax
    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
    }

    const person = new Person('Kiran', 29);

    // 6. Using Object.assign()
    const person = Object.assign({}, { name: 'Kiran', age: 30 });

    // 7. Using Map Object
    const person = new Map();
    person.set('name', 'Kiran');
    person.set('age', 30);
    `
  },
  {
    id: 77,
    code: true,
    question: "How can you find the number with the highest frequency (count) in an array using JavaScript?",
    answer: `
    let arr = [1, 1, 2, 1, 3, 5, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3];

    // Step 1: Count occurrences
    let frequencyMap = arr.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});

    console.log(frequencyMap); 
    // Output: { '1': 4, '2': 2, '3': 9, '5': 1 }

    // Step 2: Find the number with the max count
    let maxCount = 0;
    let maxNumber = null;

    for (let num in frequencyMap) {
      if (frequencyMap[num] > maxCount) {
        maxCount = frequencyMap[num];
        maxNumber = Number(num); // Convert key from string to number
      }
    }

    console.log(\\\`Number with highest frequency: \${maxNumber} (Count: \${maxCount}) \\\`);
    // Output: Number with highest frequency: 3 (Count: 9)
    `
  },
  {
    id: 78,
    code: true,
    question: "How can you move all zeros to the end of an array in JavaScript while preserving the order of non-zero elements?",
    answer: `
    // SOLUTION 1 — Using for Loop
      let arr = [0, 0, 1, 3, 25, 5, 10, 0, 14, -1, -5];
      let newArr = [];

      // Step 1: Push non-zero elements
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
          newArr.push(arr[i]);
        }
      }

      // Step 2: Add zeros at the end
      while (newArr.length < arr.length) {
        newArr.push(0);
      }

      console.log(newArr);
      // Output: [1, 3, 25, 5, 10, 14, -1, -5, 0, 0, 0]
    

    // SOLUTION 2 — Using filter() and concat()
      let arr = [0, 0, 1, 3, 25, 5, 10, 0, 14, -1, -5];

      let withoutZero = arr.filter(ele => ele !== 0);
      let onlyZeros = arr.filter(ele => ele === 0);

      let result = withoutZero.concat(onlyZeros);

      console.log(result);
      // Output: [1, 3, 25, 5, 10, 14, -1, -5, 0, 0, 0]
    `
  },
  {
    id: 79,
    code: true,
    question: "How can you flatten a deeply nested array in JavaScript (e.g., [1, 2, [3, 4], [5, [6, 7]]])?",
    answer: `
    // Solution 1 — Using flat(Infinity) (Best for simple use)
      const arr = [1, 2, [3, 4], [5, [6, 7]]];
      const flattened = arr.flat(Infinity); // \\\`Infinity\\\` flattens all nested levels
      console.log(flattened); // Output: [1, 2, 3, 4, 5, 6, 7]

    // Solution 2 — Recursive reduce() Function
      const arr = [1, 2, [3, 4], [5, [6, 7]]];

      function flatArray(array) {
        return array.reduce((acc, val) =>
          Array.isArray(val)
            ? acc.concat(flatArray(val))
            : acc.concat(val), []);
      }

      console.log(flatArray(arr)); // Output: [1, 2, 3, 4, 5, 6, 7]

    // Solution 3 — Using flatMap() (Only flattens 1 level!)
      const arr = [1, 2, [3, 4], [5, [6, 7]]];

      const flattened = arr.flatMap(val =>
        Array.isArray(val) ? val : [val]
      );

      console.log(flattened); // Output: [1, 2, 3, 4, 5, [6, 7]]
    `
  },
  {
    id: 80,
    code: true,
    question: "How do you sort an array containing numbers, strings, and special values like -1",
    answer: `
    function customSort(arr) {
      return arr.sort((a, b) => {
        // Put all -1s at the beginning
        if (a === -1 && b !== -1) return -1;
        if (b === -1 && a !== -1) return 1;

        // Sort numbers before strings
        const isANumber = typeof a === "number";
        const isBNumber = typeof b === "number";

        if (isANumber && isBNumber) {
          return a - b; // Sort numbers
        } else if (isANumber) {
          return -1; // Numbers before strings
        } else if (isBNumber) {
          return 1; // Strings after numbers
        }

        // Sort strings alphabetically
        return a.localeCompare(b);
      });
    }

    const mixedArray = [5, "apple", -1, "banana", 3, -1, "cherry", 2];
    const sortedArray = customSort(mixedArray);

    console.log(sortedArray);
    // Output: [-1, -1, 2, 3, 5, "apple", "banana", "cherry"]
    `
  },
  {
    id: 81,
    code: true,
    question: "How do you check the type of different data types in JavaScript, such as string, number, object, and array?",
    answer: `
    // For string
    const str = "Hello";
    console.log(typeof str === 'string'); // true

    // For number
    const num = 42;
    console.log(typeof num === 'number'); // true

    // For object
    const obj = { name: "Kiran" };
    console.log(typeof obj === 'object' && !Array.isArray(obj)); // true

    // For array
    const arr = [1, 2, 3];
    console.log(Array.isArray(arr)); // true
    
    1. typeof works well for primitive types like "string", "number", "boolean", etc.
    2. For arrays, typeof arr returns 'object', so we need Array.isArray() to differentiate them from regular objects.
    3. For functions, use: typeof fn === 'function'.
    `
  },
  {
    id: 82,
    code: true,
    question: "How can you create a function in JavaScript that can only run once (i.e., a 'once' function)?",
    answer: `
    function runOnce(fn) {
      let hasRun = false;
      return function(...args) {
        if (!hasRun) {
          hasRun = true;
          return fn(...args);
        } else {
          console.log("Function has already been called.");
        }
      };
    }

    // Example usage
    const initialize = runOnce(() => {
      console.log("Initialized!");
    });

    initialize(); // Output: Initialized!
    initialize(); // Output: Function has already been called.
    `
  },
  {
    id: 83,
    code: true,
    question: "What is Array.isArray() in JavaScript?",
    answer: `
    Array.isArray() is a static method on the Array constructor that checks whether a given value is an array.

    Array.isArray([1, 2, 3]);      // true
    Array.isArray('hello');        // false
    Array.isArray({ name: 'Kiran' }); // false
    Array.isArray(null);           // false
    Array.isArray(undefined);      // false
    
    //  Wrong Usage:
    [1, 2, 3].isArray(); // ❌ TypeError: [1,2,3].isArray is not a function
    `
  },
  {
    id: 84,
    code: true,
    question: "Write a function to find the largest number in an array.",
    answer: `
    // Using Math.max() and the spread operator
      function findLargestNumber(arr) {
        if (!Array.isArray(arr) || arr.length === 0) {
          return undefined; // or throw an error
        }
        return Math.max(...arr);
      }

      // Example
      const numbers = [10, 4, 99, 23, 1];
      console.log(findLargestNumber(numbers)); // Output: 99
    
    // Using a loop (manual comparison):
      function findLargestNumber(arr) {
        if (!Array.isArray(arr) || arr.length === 0) {
          return undefined;
        }

        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] > max) {
            max = arr[i];
          }
        }
        return max;
      }
    `
  },
  {
    id: 85,
    code: true,
    question: "Implement a function to check if two arrays are equal.",
    answer: `
    // Basic Implementation
      function arraysAreEqual(arr1, arr2) {
        // Check if both are arrays and have same length
        if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) {
          return false;
        }

        // Compare each element
        for (let i = 0; i < arr1.length; i++) {
          if (arr1[i] !== arr2[i]) {
            return false;
          }
        }

        return true;
      }
    
    console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])); // true
    console.log(arraysAreEqual([1, 2], [1, 2, 3]));    // false
    console.log(arraysAreEqual([1, 2, 3], [3, 2, 1])); // false
    `
  },
  {
    id: 86,
    code: true,
    question: "Implement a function to merge two sorted arrays.",
    answer: `
    function mergeSortedArrays(arr1, arr2) {
      const merged = [];
      let i = 0, j = 0;

      // Compare elements and push the smaller one
      while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
          merged.push(arr1[i]);
          i++;
        } else {
          merged.push(arr2[j]);
          j++;
        }
      }

      // Add remaining elements (if any)
      while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
      }

      while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
      }

      return merged;
    }

    const a = [1, 3, 5, 7];
    const b = [2, 4, 6, 8];

    console.log(mergeSortedArrays(a, b));
    // Output: [1, 2, 3, 4, 5, 6, 7, 8]
    `
  },
  {
    id: 87,
    code: true,
    question: "What is the difference between map(), filter(), and forEach() in arrays?",
    answer: `
    // 1. map()
      Purpose: Transforms each element in an array and returns a new array of the same length.
      Returns: A new array with transformed values.
      Usage: When you want to modify items.

      const nums = [1, 2, 3];
      const doubled = nums.map(num => num * 2);
      console.log(doubled); // [2, 4, 6]

    // 2. filter()
      Purpose: Filters elements based on a condition and returns a new array.
      Returns: A new array with only the elements that pass the condition.
      Usage: When you want to exclude or select items.

      const nums = [1, 2, 3, 4];
      const evens = nums.filter(num => num % 2 === 0);
      console.log(evens); // [2, 4]

    // 3. forEach()
      Purpose: Executes a function for each element in the array.
      Returns: undefined (does not return a new array).
      Usage: When you just want to perform side effects (e.g., logging).

      const nums = [1, 2, 3];
      nums.forEach(num => console.log(num * 2));
      // Logs: 2, 4, 6
    `
  },
  {
    id: 88,
    code: true,
    question: "Explain the difference between splice() and slice() in arrays.",
    answer: `
    // splice()
      array.splice(start, deleteCount, item1, item2, ...)

      1. start: Index to start from.
      2. deleteCount: How many elements to remove.
      3. item1, item2, ...: (Optional) Elements to add at that position.

      let arr = [1, 2, 3, 4, 5];
      arr.splice(2, 2, 99, 100); 
      console.log(arr); // [1, 2, 99, 100, 5]

    // slice()
      array.slice(start, end)

      1. start: Starting index (inclusive)
      2. end: Ending index (exclusive)

      let arr = [1, 2, 3, 4, 5];
      let newArr = arr.slice(1, 4);
      console.log(newArr); // [2, 3, 4]
      console.log(arr);    // [1, 2, 3, 4, 5] – original remains unchanged
      
    // Use splice() when you want to edit an array.
    // Use slice() when you want to copy part of an array.
    `
  },
  {
    id: 89,
    code: true,
    question: "How do you merge two objects in JavaScript?",
    answer: `
    // 1. Using the Spread Operator (...) – Modern & Preferred
      const obj1 = { a: 1, b: 2 };
      const obj2 = { b: 3, c: 4 };

      const merged = { ...obj1, ...obj2 };
      console.log(merged); // { a: 1, b: 3, c: 4 }

    // 2. Using Object.assign()
      const obj1 = { a: 1 };
      const obj2 = { b: 2 };

      const merged = Object.assign({}, obj1, obj2);
      console.log(merged); // { a: 1, b: 2 }
    
    // Important Notes
      Both methods only perform a shallow merge – nested objects won’t merge deeply.
      const obj1 = { a: { x: 1 } };
      const obj2 = { a: { y: 2 } };

      const merged = { ...obj1, ...obj2 };
      console.log(merged); // { a: { y: 2 } } – ❌ \\\`x\\\` is lost
    `
  },
  {
    id: 90,
    code: true,
    question: "How can you check if a property exists in an object?",
    answer: `
    // 1. in Operator (Recommended)
      const obj = { name: "John", age: 30 };
      console.log("name" in obj); // true
      console.log("gender" in obj); // false

    // 2. hasOwnProperty() Method
      console.log(obj.hasOwnProperty("age")); // true
      console.log(obj.hasOwnProperty("toString")); // false (inherited)
    
    // 3. Property Access with undefined Check
      console.log(obj.name !== undefined); // true
      console.log(obj.gender !== undefined); // false

    // ⚠️ This works in many cases but can give false negatives if the property's value is actually undefined:
      const obj = { key: undefined };
      console.log(obj.key !== undefined); // false – even though \\\`key\\\` exists
    `
  },
  {
    id: 91,
    code: true,
    question: "How do you convert an object into a query string?",
    answer: `
    // 1. Using URLSearchParams (Recommended)
      const params = { name: "John", age: 30, city: "New York" };
      const queryString = new URLSearchParams(params).toString();

      console.log(queryString);
      // Output: "name=John&age=30&city=New+York"
    
    // 2. Custom Function (For Nested or Complex Objects)
      function toQueryString(obj) {
        return Object.entries(obj)
          .map(([key, value]) => \\\` \${encodeURIComponent(key)}= \${encodeURIComponent(value)}\\\`)
          .join("&");
      }

      const query = toQueryString({ name: "Alice", age: 25 });
      console.log(query);
      // Output: "name=Alice&age=25"
    
    // Note for Nested Objects/Arrays:
      URLSearchParams does not support deeply nested objects by default. For example:
      const obj = { user: { name: "Bob", age: 22 } };
      console.log(new URLSearchParams(obj).toString());
      // Output: "" (empty string, because \\\`user\\\` is not a primitive)
    `
  },
  {
    id: 92,
    code: true,
    question: "How do you reverse a string in JavaScript?",
    answer: `
    // Using Built-in Methods
      function reverseString(str) {
        return str.split("").reverse().join("");
      }

      console.log(reverseString("hello")); // Output: "olleh"

    // One-liner (arrow function)
      const reverse = str => str.split("").reverse().join("");
      console.log(reverse("JavaScript")); // Output: "tpircSavaJ"
    `
  },
  {
    id: 93,
    code: true,
    question: "How do you convert a string to title case?",
    answer: `
    // Title Case Function
      function toTitleCase(str) {
        return str
          .toLowerCase()
          .split(" ")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      }

      console.log(toTitleCase("hello world")); // Output: "Hello World"
    
    // One-liner (ES6 arrow function)
      const toTitleCase = str =>
      str.toLowerCase().split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
    `
  },
  {
    id: 94,
    code: true,
    question: "How do you implement a deep clone of an object or array?",
    answer: `
    // 1. Using structuredClone() (Best for modern browsers)
      const original = { a: 1, b: { c: 2 } };
      const clone = structuredClone(original);

      console.log(clone); // { a: 1, b: { c: 2 } }
      console.log(clone.b === original.b); // false (deep cloned)
    
    // 2. Using JSON.parse(JSON.stringify(...)) (Simple but limited)
      const original = { a: 1, b: { c: 2 } };
      const clone = JSON.parse(JSON.stringify(original));
    
    // 3. Manual Recursive Deep Clone Function
      function deepClone(obj) {
        if (obj === null || typeof obj !== "object") return obj;

        if (Array.isArray(obj)) {
          return obj.map(deepClone);
        }

        const result = {};
        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key]);
          }
        }
        return result;
      }

      const original = { a: 1, b: { c: [2, 3] } };
      const clone = deepClone(original);
  
    // 4. Using Lodash
      npm install lodash
      import cloneDeep from 'lodash/cloneDeep';

      const original = { a: 1, b: { c: [2, 3] } };
      const clone = cloneDeep(original);
    `
  },
  {
    id: 95,
    code: true,
    question: "What are IIFEs (Immediately Invoked Function Expressions), and why are they used?",
    answer: `
    // An IIFE (Immediately Invoked Function Expression) is a function that is defined and executed immediately after it's created.
    (function() {
      console.log("This runs immediately!");
    })();

    // or with arrow function:

    (() => {
      console.log("Arrow IIFE");
    })();
    

    // Why are IIFEs used?
    // 1. Encapsulation / Avoid Polluting Global Scope
       Creates a private scope to avoid global variable conflicts.
       (function() {
          var privateVar = "I'm hidden!";
          console.log(privateVar);
        })();
        // console.log(privateVar); // Error: not defined
    
    // 2. Module Pattern (Pre-ES6)
       Used to mimic modular behavior before import/export existed.

    // 3. Execute Code Immediately
       const result = (() => {
          let a = 10;
          let b = 20;
          return a + b;
        })();
        console.log(result); // 30
    `
  },
  {
    id: 96,
    code: true,
    question: "Explain closures in JavaScript. Can you give an best example of where closures might be useful?",
    answer: `
    A closure is a function that remembers and has access to its outer (enclosing) function’s variables, 
    even after the outer function has returned.

    // Definition
    A closure is created when a function is defined inside another function, 
    and the inner function retains access to variables in the outer function's scope.

    function outer() {
      let counter = 0;

      return function inner() {
        counter++;
        console.log(counter);
      };
    }

    const increment = outer();

    increment(); // 1
    increment(); // 2
    increment(); // 3
    
    // Even though outer() has finished execution, the counter variable is preserved through the closure created by inner().


    // Real-World Use Case: Private Variables (Data Encapsulation)
    function createBankAccount(initialBalance) {
      let balance = initialBalance;

      return {
        deposit(amount) {
          balance += amount;
          console.log(\\\`Deposited: \${amount}, Balance: \${balance}\\\`);
        },
        withdraw(amount) {
          if (amount > balance) {
            console.log('Insufficient funds');
          } else {
            balance -= amount;
            console.log(\\\`Withdrawn: \${amount}, Balance: \${balance}\\\`);
          }
        },
        getBalance() {
          return balance;
        }
      };
    }

    const account = createBankAccount(1000);
    account.deposit(500);     // Deposited: 500, Balance: 1500
    account.withdraw(200);    // Withdrawn: 200, Balance: 1300
    console.log(account.getBalance()); // 1300

    // ❌ Can't access balance directly
    // console.log(account.balance); // undefined
    `
  },
  {
    id: 97,
    code: true,
    question: "what is Debounce and Throttle and give me example",
    answer: `
    // 1. Debounce
      Ensures a function is only called once after a specified delay, and only after the last event.

    // Example: Search Input (wait until user stops typing)
      function debounce(fn, delay) {
        let timer;
        return function (...args) {
          clearTimeout(timer);
          timer = setTimeout(() => fn.apply(this, args), delay);
        };
      }

      // Usage:
      function handleSearch(query) {
        console.log("Searching for:", query);
      }

      const debouncedSearch = debounce(handleSearch, 300);

      // Simulate user input
      document.getElementById("searchInput").addEventListener("input", (e) => {
        debouncedSearch(e.target.value);
      });


    // 2. Throttle
      Ensures a function is called at most once in a set time interval, regardless of how many times the event is triggered.

    // Example: Scroll event (limit frequency)
      function throttle(fn, limit) {
        let inThrottle;
        return function (...args) {
          if (!inThrottle) {
            fn.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
          }
        };
      }

      // Usage:
      function handleScroll() {
        console.log("Scrolling...", new Date().toISOString());
      }

      const throttledScroll = throttle(handleScroll, 500);

      // Add to scroll
      window.addEventListener("scroll", throttledScroll);

    // Debounce: Use for input fields, autocomplete, search suggestions, resize.
    // Throttle: Use for scroll, drag, resize, mouse movement.
    `
  },
  {
    id: 98,
    code: true,
    question: "What are the different ways to handle cross-origin requests in JavaScript?",
    answer: `
    Handling cross-origin requests (also known as CORS) is a common challenge in web development 
    due to the Same-Origin Policy enforced by browsers. This policy restricts scripts from one origin from 
    interacting with resources from another origin unless explicitly allowed.

    // 1. CORS (Cross-Origin Resource Sharing) Headers [Server-Side]
      Access-Control-Allow-Origin: https://example.com
      Access-Control-Allow-Methods: GET, POST, PUT
      Access-Control-Allow-Headers: Content-Type

      Most reliable and secure method — must be handled on the server you are requesting from.

      JavaScript Fetch Example:
      fetch("https://api.example.com/data")
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error("CORS error", err));

    // 2. Using a Proxy Server
      A backend server on your own domain can act as a proxy to forward requests to another domain. 
      This avoids CORS because the browser is only communicating with your own server.

      Then in backend (Node.js for example):
      app.get('/proxy', async (req, res) => {
        const targetUrl = req.query.url;
        const response = await fetch(targetUrl);
        const data = await response.json();
        res.json(data); // Now served from your origin
      });

    // 3. JSONP (JSON with Padding) [Legacy, GET-only]
      Used for older APIs that support it. It bypasses CORS by injecting a <script> 
      tag (which isn't blocked by Same-Origin Policy).

      <script>
        function handleData(data) {
          console.log(data);
        }
      </script>
      <script src="https://api.example.com/data?callback=handleData"></script>

    // 4. Browser Extensions / Dev Config (Development only)
      You can disable CORS in local development using browser extensions or by configuring the dev server.
      Chrome Extension: "Allow CORS: Access-Control-Allow-Origin"
      Webpack Dev Server: Set headers in webpack.config.js

      devServer: {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      }

      Never use this in production — only for development/testing.

    // 5. Using mode: "no-cors" in fetch (limited)
      You can set fetch to use no-cors, but this gives you a "opaque" response — you can’t access the data.
      
      fetch("https://api.example.com", { mode: "no-cors" })
      
      Not useful for reading data — only to "fire-and-forget" POSTs.
    `
  },
  {
    id: 99,
    code: true,
    question: "What is the difference between localStorage, sessionStorage, and cookies?",
    answer: `
    // localStorage
        localStorage is used to store data in the browser with no expiration time. 
        Once stored, the data stays even after the browser is closed and reopened. 
        It's great for things like saving user preferences, themes, or last visited pages. 
        It stores everything as key-value pairs in string format, and it offers about 5–10 MB of storage depending on the browser.

        localStorage.setItem("username", "kiranteja");
        localStorage.getItem("username"); // returns "kiranteja"
        localStorage.removeItem("username");

    // sessionStorage
        sessionStorage is similar to localStorage, but it only lasts as long as the browser tab or window is open. 
        As soon as the user closes the tab, all sessionStorage data is cleared. 
        It’s useful for temporary data like form inputs, current page state, or session-specific tokens.
        This will be cleared when the tab is closed.

        sessionStorage.setItem("tempToken", "xyz123");
    
    // Cookies
      Cookies are older than both localStorage and sessionStorage and are often used for storing small amounts of data 
      like user authentication tokens or preferences. They can be configured to expire after a specific time, 
      or they can be session-based. Unlike localStorage or sessionStorage, cookies are sent to the server with every HTTP request, 
      which can affect performance if the data is large.

      document.cookie = "user=kiranteja; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
      
      Cookies can also be made more secure by adding flags like HttpOnly, Secure, and SameSite.

    // Summary
      Use localStorage when you want data to persist long-term in the browser.
      Use sessionStorage for temporary, tab-specific storage.
      Use cookies when you need to communicate data back to the server or when server-side access is required.
    `
  },
  {
    id: 100,
    code: true,
    question: "Write a function sum that allows chained calls like sum(1)(2)(3)...(n)() and returns the total sum of all passed numbers.",
    answer: `
    function sum(a) {
      return function(b) {
        if (b !== undefined) {
          return sum(a + b);
        }
        return a;
      };
    }

    console.log(sum(1)(2)(3)(4)(5)()); // Output: 15
    `
  },

  {
    id: 101,
    code: true,
    question: "How can we create a method for existing class",
    answer: "this is answer 101"
  },
]

export default javascriptData;