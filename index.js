// Iteration 1: Names and Input

const hacker1 = `Leila`
console.log(`The drivers name is ${hacker1}`)

const hacker2 = `Tatiana`
console.log(`The navigators name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
  }
  
  else if (hacker2.length > hacker1.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }
  
  else {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops

if (hacker1 < hacker2) {
    console.log (`The driver's name goes first.`)
  }
  
  else if (hacker1 > hacker2) {
    console.log (`Yo, the navigator goes first definitely.`)
  }
  
  else {
    console.log (`What?! You both have the same name?`)
  }

  //Bonus 1

const longText = `Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`

let words = 0;
let etCount = 0;

let paragraph = longText.split(' ');

for (let i=0; i < paragraph.length; i++) {
  if(paragraph[i].includes('\n')) {
    words++} 
  
  else if(paragraph[i] === "et") {
    etCount++;}
  
  words++;
 
}

console.log('words -->', words);
console.log('et count  -->', etCount);