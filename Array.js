// question 1
const arr1 = [3, 7, 34, 90, 12];
const arr2 = [true, "green", "where", 12, 56];

const lastElem1 = arr1[arr1.length - 1];
console.log(lastElem1); // Output: 12

const lastElem2 = arr2[arr2.length - 1];
console.log(lastElem2); // Output: 56

// question 2
const myPets = ["Cow", "Python", "Snake", "Dog"];
const myPetsString = myPets.join(", ");
console.log(myPetsString);

// qustion 3
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
arr3.sort(function(a, b) {
  return a - b;
});
console.log(arr3);

// 
let arr5 = ["the", "way", "x", 4, 23];

if (arr5.includes(4)) {
  console.log(4);
} else {
  console.log("the search word was not found");
}

// 
let word = "lufituaeb";
let sortedWord = word.split("").sort().join("");
console.log(sortedWord);
