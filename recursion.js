/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  if (idx === nums.length) return 1;

  return nums[idx] * product(nums, idx + 1)
}
// product([2, 3, 4]) 

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  let longestWord = words[0]

  let lastWordInArray = words.length - 1

  if (words.length === 1) {
    return longestWord.length
  }

  for (let i = 1; i <= words.length; i++) {
    if (words[lastWordInArray].length < longestWord.length) {
      words.pop()
      return longest(words)
    } else {
      words.shift()
      return longest(words)
    }
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, everyOtherLetter = '') {
  if (idx >= str.length) return everyOtherLetter

  everyOtherLetter += str[idx]

  return everyOther(str, idx + 2, everyOtherLetter)
}
// everyOther("hello")    

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 1, newStr = '') {
  if (idx > str.length) {
    if (newStr === str) return true
    return false
  }

  newStr = newStr += str[str.length - idx]

  return isPalindrome(str, idx + 1, newStr)
}
// isPalindrome("tacocat")  // true
// isPalindrome("tacodog")  // false



/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (arr[idx] === undefined) return -1
  if (arr[idx] === val) return idx

  return findIndex(arr, val, idx + 1)
}

let animals = ["duck", "cat", "pony"];

// findIndex(animals, "cat");  // 1
// findIndex(animals, "porcupine");   // -1

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 1, newStr = '') {
  if (idx > str.length) return newStr

  newStr = newStr += str[str.length - idx]

  return revString(str, idx + 1, newStr)
}
// revString("porcupine") // 'enipucrop'


/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];

  for (let key in obj) {

    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }

  return stringArr;
}

let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
};

// gatherStrings(nestedObj) // ["Lester", "Testowitz", "you made it!", "nice!"];

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
