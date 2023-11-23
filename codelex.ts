// Exercise 1
const inputArray: string[] = ["h", "o", "l", "a"];
const outputString: string = inputArray.join(',');

console.log(outputString);


// Exercise 2

function doubleNumbers(arr: number[]): number[] {
    return arr.map((num) => num * 2);
  }
  
  console.log(doubleNumbers([2, 5, 100])); 

//Exercise 3

function stringItUp(arr: number[]): string[] {
  return arr.map(String);
}

console.log(stringItUp([2, 5, 100]));

//Exercise 4

function capitalizeNames(arr: string[]): string[] {
  return arr.map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

//Exercise 5
function namesOnly(arr: { name: string; age: number }[]): string[] {
  return arr.map((person) => person.name);
}

console.log(
  namesOnly([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 },
  ])
);

//Exercise 6

function readyToPutInTheDOM(arr: { name: string; age: number }[]): string[] {
  return arr.map((person) => `<h1>${person.name}</h1><h2>${person.age}</h2>`);
}

console.log(
  readyToPutInTheDOM([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 },
  ])
);

//Exercise 7 

function sumOfPositives(arr: number[]): number {
  return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
}

console.log(sumOfPositives([1, -4, 7, 12]));

//Exercise 8

function countPositivesAndSumNegatives(arr: number[]): number[] {
  if (!arr || arr.length === 0) {
      return [];
  }

  const positiveCount: number = arr.filter(num => num > 0).length;
  const sumNegatives: number = arr.filter(num => num < 0).reduce((sum, num) => sum + num, 0);

  return [positiveCount, sumNegatives];
}

console.log(countPositivesAndSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));


// Exercise 9

function squareSum(arr: number[]): number {
  return arr.map(num => num ** 2).reduce((sum, squaredNum) => sum + squaredNum, 0);
}

console.log(squareSum([1, 2, 2]));


// Exercise 10 

function processArray(arr: number[]): number[] {
  return arr.map(num => Math.sqrt(num) % 1 === 0 ? Math.sqrt(num) : num ** 2);
}

console.log(processArray([4, 3, 9, 7, 2, 1]));


// Exercise 11

function arr(n: number): number[] {
  return Array.from({ length: n }, (_, index) => index);
}

console.log(arr(5));

// Exercise 12

function reverseDigits(num: number): number[] {
  return num.toString().split('').map(Number).reverse();
}

console.log(reverseDigits(348597));


// Exercise 13


function total(arr: number[]): number {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log(total([1, 2, 3]));


//Exercise 14


function stringConcat(arr: number[]): string {
  return arr.join('');
}

console.log(stringConcat([1, 2, 3]));


//Exercise 15


function fiveAndGreaterOnly(arr: number[]): number[] {
  return arr.filter(num => num >= 5);
}

console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

// Exercise 16


function evensOnly(arr: number[]): number[] {
  return arr.filter(num => num % 2 === 0);
}

console.log(evensOnly([3, 6, 8, 2]));

// Exercise 17

function fiveCharactersOrFewerOnly(arr: string[]): string[] {
  return arr.filter(str => str.length <= 5);
}

console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));

// Exercise 18

interface Voter {
  name: string;
  age: number;
  voted: boolean;
}

function totalVotes(arr: Voter[]): number {
  return arr.filter(voter => voter.voted).length;
}

const voters: Voter[] = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

console.log(totalVotes(voters));

// Exercise 19

interface WishlistItem {
  title: string;
  price: number;
}

function shoppingSpree(wishlist: WishlistItem[]): number {
  return wishlist.reduce((total, item) => total + item.price, 0);
}

const wishlist: WishlistItem[] = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

console.log(shoppingSpree(wishlist));

// Exercise 20

function flatten(arr: any[][]): any[] {
  return arr.reduce((flatArray, subArray) => flatArray.concat(subArray), []);
}

const arrays: any[][] = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays));


// Exercise 21

interface Voter {
  name: string;
  age: number;
  voted: boolean;
}

function voterResults(arr: Voter[]): Record<string, number> {

  const voters: Voter[] = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: true },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Backy", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false },
  ];

  const result: Record<string, number> = {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0,
  };

  arr.forEach(voter => {
      if (voter.age >= 18 && voter.age <= 25) {
          result.numYoungPeople++;
          if (voter.voted) {
              result.numYoungVotes++;
          }
      } else if (voter.age >= 26 && voter.age <= 35) {
          result.numMidsPeople++;
          if (voter.voted) {
              result.numMidVotesPeople++;
          }
      } else if (voter.age >= 36 && voter.age <= 55) {
          result.numOldsPeople++;
          if (voter.voted) {
              result.numOldVotesPeople++;
          }
      }
  });

  return result;
}

console.log(voterResults(voters));


// Exercise 22

const swapCase = function (str: string): string {
  return str
      .split(' ')
      .map((word, index) => (index % 2 === 0 ? word.toUpperCase() : word))
      .join(' ');
};

console.log(swapCase("hey gurl, lets javascript together sometime"));

// Exercise 23

const shiftLetters = function (str: string): string {
  return str
      .split('')
      .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
      .join('');
};

console.log(shiftLetters("hello")); 
console.log(shiftLetters("abcxyz")); 

// Exercise 24

const countLetters = function (str: string): Record<string, number> {
  const result: Record<string, number> = {};
  str.split('').forEach(char => {
      result[char] = (result[char] || 0) + 1;
  });
  return result;
};

console.log(countLetters("abbcccddddeeeee"));

// Exercise 25 

const isPresent = function (str: string, target: string): boolean {
  return str.includes(target);
};

console.log(isPresent("abcd", "b"));
console.log(isPresent("efghi", "a"));

// Exercise 26

function countSheep(arr: boolean[]): number {
  return arr.filter(isSheep => isSheep).length;
}

console.log(countSheep([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]));


// Exercise 27

function findNeedle(arr: string[]): string {
  const index = arr.indexOf("needle");
  return index !== -1 ? `found the needle at position ${index}` : "needle not found";
}

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));


// Exercise 28

function checkExam(key: string[], answers: string[]): number {
  return answers.reduce((score, answer, index) => {
      if (answer === "") {
          return score;
      } else if (answer === key[index]) {
          return score + 4;
      } else {
          return score - 1;
      }
  }, 0);
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); 
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])); 
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); 
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])); 



// Exercise 29

function warnTheSheep(arr: string[]): string {
  const wolfIndex = arr.findIndex(animal => animal === "wolf");
  const sheepNumber = arr.length - wolfIndex - 1;

  return wolfIndex === arr.length - 1
      ? "Pls go away and stop eating my sheep"
      : `Oi! Sheep number ${sheepNumber}! You are about to be eaten by a wolf!`;
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));


// Exercise 30

function monkeyCount(n: number): number[] {
  return Array.from({ length: n }, (_, index) => index + 1);
}

console.log(monkeyCount(10));
console.log(monkeyCount(1));
