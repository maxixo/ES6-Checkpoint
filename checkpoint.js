//==================================================
//1. Keep Hydrated

  const litres = (time) => {
    // Calculate the amount of water Nathan drinks
    const water = time * 0.5;
    
    // Round down to the nearest whole number
    return Math.floor(water);
  }

  // Example usage:
  console.log(litres(3));    // Output: 1
  console.log(litres(6.7));  // Output: 3
  console.log(litres(11.8)); // Output: 5

//=================================================
 
// 2. Vowel Count 
  const countVowels = (str) => {
    // Define the vowels
    const vowels = 'aeiou';
  
    // Use reduce to count the vowels
    return str.split('').reduce((count, char) => {
      return vowels.includes(char) ? count + 1 : count;
    }, 0);
  }
  
  
  // Example usage:
  console.log(countVowels("hello world")); // Output: 3
  console.log(countVowels("a quick brown fox")); // Output: 5
  console.log(countVowels("this is a test")); // Output: 4
  console.log(countVowels("xyz")); // Output: 0
  
  
//==================================================== 

//3 Exes and Ohs 

function XO(str) {
  // Convert the string to lower case
  str = str.toLowerCase();
  
  // Count the number of 'x's and 'o's
  let xCount = 0;
  let oCount = 0;

  for (let char of str) {
    if (char === 'x') {
      xCount++;
    } else if (char === 'o') {
      oCount++;
    }
  }

  // Return true if counts are equal, otherwise false
  return xCount === oCount;
}

// Example usage:
console.log(XO("ooxx"));    // Output: true
console.log(XO("xooxx"));   // Output: false
console.log(XO("ooxXm"));   // Output: true
console.log(XO("zpzpzpp")); // Output: true
console.log(XO("zzoo"));    // Output: false

//============================================================

//4. Credit Card Mask

const maskify = (str) => {
  // If the string length is 4 or less, return the original string
  if (str.length <= 4) {
    return str;
  }

  // Mask all but the last 4 characters
  const masked = '#'.repeat(str.length - 4) + str.slice(-4);
  return masked;
}

// Example usage:
console.log(maskify("4556364607935616")); // Output: "############5616"
console.log(maskify("64607935616"));      // Output: "#######5616"
console.log(maskify("1"));                // Output: "1"
console.log(maskify(""));                 // Output: ""
console.log(maskify("Skippy"));           // Output: "##ippy"
console.log(maskify("Nananananananananananananananana Batman!")); // Output: "####################################man!"

//============================================================

//5 List Filterning 

const filter_list = (lst) => {
  // Filter the list to only include non-negative integers
  return lst.filter(item => typeof item === 'number');
}

// Example usage:
console.log(filter_list([1, 2, 'a', 'b']));              // Output: [1, 2]
console.log(filter_list([1, 'a', 'b', 0, 15]));          // Output: [1, 0, 15]
console.log(filter_list([1, 2, 'aasf', '1', '123', 123])); // Output: [1, 2, 123]

//=============================================================

//6 Abbreviate a two word name 

const toInitials = (name) => {
  // Split the name into first and last name
  const [firstName, lastName] = name.split(' ');

  // Get the initials and convert them to uppercase
  const initials = `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`;

  return initials;
}

// Example usage:
console.log(toInitials("Sam Harris"));    // Output: S.H
console.log(toInitials("patrick feeney")); // Output: P.F
