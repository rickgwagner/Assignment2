// ASSIGNMENT 2, PART 1

// STEP 1

//1.	Create an application that prompts the user for their name. Then, find the length of characters in the person’s name.  Use the alert method to display the result.

//var userName = window.prompt("Please enter your name");
//window.alert("The number of characters in your name is " + userName.length);

// STEP 2

//2.	Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.

//var userName = window.prompt("Please enter your name");
//var userNumber = window.prompt("Please enter a number that is less than or equal to the number of characters in your name.");
//window.alert("The character at that position is " + userName.charAt(userNumber));

// STEP 3

//3.	Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.

//var firstName = window.prompt("Please enter your first name.");
//var lastName = window.prompt("Please enter your last name.");
//window.alert(firstName + " " + String(lastName));

// STEP 4

//4.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.

//var pangram = "The quick brown fox jumps over the lazy dog";
//window.alert(pangram.indexOf("fox"));

// STEP 5

//5.	Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.

//var pangram = "The quick brown fox jumps over the lazy fox";
//window.alert(pangram.lastIndexOf("fox"));

// STEP 6

//6.	Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.

//var pangram = "The quick brown fox jumps over the lazy dog";
//var fullName = window.prompt("Please enter your full name");
//window.alert(pangram.replace("the lazy dog", fullName));

// STEP 7

//7.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.

// STEP 7a (using search)

//var pangram = "The quick brown fox jumps over the lazy dog";
//var userWord = window.prompt("Please enter a word");
//window.alert(pangram.search(userWord));

// STEP 7b (using indexOf)

//var pangram = "The quick brown fox jumps over the lazy dog";
//var userWord = window.prompt("Please enter a word");
//window.alert(pangram.indexOf(userWord));

// STEP 7c (using match)

//var pangram = "The quick brown fox jumps over the lazy dog";
//var userWord = window.prompt("Please enter a word");
//var rgxp = new RegExp(userWord, "i");
//window.alert(pangram.match(rgxp));

// STEP 8

//8.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.

//var old_string = "The quick brown fox jumps over the lazy dog";
//var new_string = old_string.slice(31, 44);
//window.alert(new_string.toUpperCase());

// STEP 9

//9.	Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.

//var upperCaseQuote = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
//window.alert(upperCaseQuote.trim().toLowerCase());

// STEP 10

//10.	Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.

//var pangram = "the quick brown fox jumps over the lazy dog";
//window.alert(pangram.replace("t", "T"));


// ASSIGNMENT 2, PART 2
// Part 1 - Math and Math Functions 

// STEP 1

//1.	Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.

//var userNumber = window.prompt("Please enter a number.");
//window.console.log(Math.abs(userNumber));

// STEP 2

//2.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.

//var userDecimal = window.prompt("Please enter a decimal number.");
//window.console.log(Math.round(userDecimal));

// STEP 3

//3.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.

//var userDecimal = window.prompt("Please enter a decimal number.");
//window.console.log(Math.floor(userDecimal));

// STEP 4

//4.	Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.

//var firstNumber = window.prompt("Please enter the first of 5 numbers.");
//var secondNumber = window.prompt("Please enter the second of 5 numbers.");
//var thirdNumber = window.prompt("Please enter the third of 5 numbers.");
//var fourthNumber = window.prompt("Please enter the fourth of 5 numbers.");
//var fifthNumber = window.prompt("Please enter the fifth of 5 numbers.");
//
//window.console.log(Math.max(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber));
//window.console.log(Math.min(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber));

// STEP 5

//5.	Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window. 

//var userNumber = window.prompt("Please enter a number.");
//window.console.log(Math.sqrt(userNumber));

// Part 2 - Date and Date Functions

// STEP 6

//6.	Create an application that gets the current date. Display that result within the console window.

//var currentDate = new Date();
//window.console.log(currentDate.getDate());

// STEP 7

//7.	Create an application that gets the number of days in a month. Display that result within the console window.

//var currentDate = new Date();
//var currentMonth = currentDate.getMonth() + 1;
//
//switch (currentMonth) {
//case 1:
//    window.console.log(31);
//    break;
//case 2:
//    window.console.log(28);
//    break;
//case 3:
//    window.console.log(31);
//    break;
//case 4:
//    window.console.log(30);
//    break;
//case 5:
//    window.console.log(31);
//    break;
//case 6:
//    window.console.log(30);
//    break;
//case 7:
//    window.console.log(31);
//    break;
//case 8:
//    window.console.log(31);
//    break;
//case 9:
//    window.console.log(30);
//    break;
//case 10:
//    window.console.log(31);
//    break;
//case 11:
//    window.console.log(30);
//    break;
//case 12:
//    window.console.log(31);
//    break;
//default:
//    window.console.log("Error");
//}
            
// STEP 8

//8.	Create an application that gets the month name from a particular date. Display that result within the console window.

//var currentDate = new Date();
//var currentMonth = currentDate.getMonth() + 1;
//
//switch (currentMonth) {
//case 1:
//    window.console.log("January");
//    break;
//case 2:
//    window.console.log("February");
//    break;
//case 3:
//    window.console.log("March");
//    break;
//case 4:
//    window.console.log("April");
//    break;
//case 5:
//    window.console.log("May");
//    break;
//case 6:
//    window.console.log("June");
//    break;
//case 7:
//    window.console.log("July");
//    break;
//case 8:
//    window.console.log("August");
//    break;
//case 9:
//    window.console.log("September");
//    break;
//case 10:
//    window.console.log("October");
//    break;
//case 11:
//    window.console.log("November");
//    break;
//case 12:
//    window.console.log("December");
//    break;
//default:
//    window.console.log("Error");
//}

// STEP 9

//9.	Create an application that tests whether a date is a weekend. Display that result within the console window.

//var currentDate = new Date();
//var currentDay = currentDate.getDay() + 1;
//
//switch (currentDay) {
//case 1:
//    window.console.log("Today is a weekend day.");
//    break;
//case 2:
//    window.console.log("Today is not a weekend day.");
//    break;
//case 3:
//    window.console.log("Today is not a weekend day.");
//    break;
//case 4:
//    window.console.log("Today is not a weekend day.");
//    break;
//case 5:
//    window.console.log("Today is not a weekend day.");
//    break;
//case 6:
//    window.console.log("Today is not a weekend day.");
//    break;
//case 7:
//    window.console.log("Today is a weekend day.");
//    break;
//default:
//    window.console.log("Error");
//}

// STEP 10

//10.	Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday. 

//var currentDate = new Date();
//var currentDay = currentDate.getDay();
//
//switch (currentDay) {
//case 0:
//    window.console.log("Yesterday was Saturday.");
//    break;
//case 1:
//    window.console.log("Yesterday was Sunday.");
//    break;
//case 2:
//    window.console.log("Yesterday was Monday.");
//    break;
//case 3:
//    window.console.log("Yesterday was Tuesday.");
//    break;
//case 4:
//    window.console.log("Yesterday was Wednesday.");
//    break;
//case 5:
//    window.console.log("Yesterday was Thursday.");
//    break;
//case 6:
//    window.console.log("Yesterday was Friday.");
//    break;
//default:
//    window.console.log("Error");
//}

// STEP 11

//11.	Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.

// substring version

//var fullDate = new Date();
//var shortDay = String(fullDate).substring(0, 1);
//window.console.log(shortDay);

// charAt version

//var fullDate = new Date();
//var shortDay = String(fullDate).charAt(0);
//window.console.log(shortDay);

// STEP 12

//Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the console window.

//var firstInterger = window.prompt("Please enter an interger.");
//var secondInterger = window.prompt("Please enter another interger.");
//
//if (firstInterger > secondInterger) {
//    window.console.log(firstInterger);
//} else if (secondInterger > firstInterger) {
//    window.console.log(secondInterger);
//} else {
//    window.console.log("The two intergers need to be different.");
//}

// STEP 13

//Create an application that records the marks for the following five students. Then, these marks are used to determine the corresponding grade. All 5 students and their grades should be displayed within the console window.

//var ursula = 80;
//var paul = 77;
//var henry = 88;
//var tabitha = 95;
//var lucy = 68;
//var studentCount = 5;
//
//var currentStudent = ursula;
//var currentName = "Ursula";
//
//if (currentStudent < 100 && currentStudent >= 90) {
//    window.console.log(currentName + " - A");
//} else if (currentStudent < 90 && currentStudent >= 80) {
//    window.console.log(currentName + " - B");
//} else if (currentStudent < 80 && currentStudent >= 70) {
//    window.console.log(currentName + " - C");
//} else if (currentStudent < 70 && currentStudent >= 60) {
//    window.console.log(currentName + " - D");
//} else {
//    window.console.log(currentName + " - F");
//}
//
//var currentStudent = paul;
//var currentName = "Paul";
//
//if (currentStudent < 100 && currentStudent >= 90) {
//    window.console.log(currentName + " - A");
//} else if (currentStudent < 90 && currentStudent >= 80) {
//    window.console.log(currentName + " - B");
//} else if (currentStudent < 80 && currentStudent >= 70) {
//    window.console.log(currentName + " - C");
//} else if (currentStudent < 70 && currentStudent >= 60) {
//    window.console.log(currentName + " - D");
//} else {
//    window.console.log(currentName + " - F");
//}
//var currentStudent = henry;
//var currentName = "Henry";
//
//if (currentStudent < 100 && currentStudent >= 90) {
//    window.console.log(currentName + " - A");
//} else if (currentStudent < 90 && currentStudent >= 80) {
//    window.console.log(currentName + " - B");
//} else if (currentStudent < 80 && currentStudent >= 70) {
//    window.console.log(currentName + " - C");
//} else if (currentStudent < 70 && currentStudent >= 60) {
//    window.console.log(currentName + " - D");
//} else {
//    window.console.log(currentName + " - F");
//}
//var currentStudent = tabitha;
//var currentName = "Tabitha";
//
//if (currentStudent < 100 && currentStudent >= 90) {
//    window.console.log(currentName + " - A");
//} else if (currentStudent < 90 && currentStudent >= 80) {
//    window.console.log(currentName + " - B");
//} else if (currentStudent < 80 && currentStudent >= 70) {
//    window.console.log(currentName + " - C");
//} else if (currentStudent < 70 && currentStudent >= 60) {
//    window.console.log(currentName + " - D");
//} else {
//    window.console.log(currentName + " - F");
//}
//var currentStudent = lucy;
//var currentName = "Lucy";
//
//if (currentStudent < 100 && currentStudent >= 90) {
//    window.console.log(currentName + " - A");
//} else if (currentStudent < 90 && currentStudent >= 80) {
//    window.console.log(currentName + " - B");
//} else if (currentStudent < 80 && currentStudent >= 70) {
//    window.console.log(currentName + " - C");
//} else if (currentStudent < 70 && currentStudent >= 60) {
//    window.console.log(currentName + " - D");
//} else {
//    window.console.log(currentName + " - F");
//}
        
// STEP 14

//Create a JavaScript for loop that iterates from 1 to 15. Each iteration should check if the current number is odd or even, and display a message within the console window.

//for (var currentNumber = 1; currentNumber <= 15; currentNumber++) {
//    if (currentNumber % 2 == 0) {
//    window.console.log(currentNumber + " is even");
//    } 
//    else {
//    window.console.log(currentNumber + " is odd");
//    }
//}

// STEP 15

//Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number and for multiples of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5 print "FizzBuzz". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.

//for (var currentNumber = 1; currentNumber <= 100; currentNumber++) {
//    if (currentNumber % 3 == 0 && currentNumber % 5 != 0) {
//    window.console.log("Fizz");
//    }
//   else if (currentNumber % 5 == 0 && currentNumber % 3 != 0) {
//    window.console.log("Buzz");
//    }
//   else if (currentNumber % 3 == 0 && currentNumber % 5 == 0) {
//    window.console.log("FizzBuzz");
//    }
//    else {
//    window.console.log(currentNumber);
//    }
//}

//Part 4 - The “Hitchhiker’s Guide to the Galaxy” Game (5 points)

//var ready = window.confirm("Are you ready to play the game?");
//if (ready === true) {
//    window.alert("Awesome, our hero is waiting!");
//} else {
//    window.alert("Too bad, we’re going to play anyway because our hero desperately needs your help!");
//}
//
//window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");
//
//var direction = window.prompt("Which direction would you like to head (please enter forward, left, or right).");
//
//switch (direction) {
//case "forward":
//    window.alert("You walk about 100 yards and safely make your way out of the cave.");
//    break;
//case "left":
//    window.alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
//    break;
//case "right":
//    window.alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
//    break;
//default:
//    window.console.log("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");
//}
//
//var evaluation = window.prompt("Please rate this game on a scale from 1 to 10.");
//
//if (evaluation < 1) {
//    var evaluation = 10;
//} else if (evaluation > 10) {
//    var evaluation = 10;
//} else if (isNaN(evaluation)) {
//    var evaluation = 10;
//} else {
//    var evaluation = evaluation;
//}
//if (evaluation >= 6) {
//    window.alert("Thank you, we will continue to make improvements to the game!");
//} else {
//    window.alert("Whatever, you weren’t very good at this game anyway!");
//}

//Part 5 - The “Coin Flip” Game (5 points)

//var coinFlip = Math.random();
//var coinFlip = Math.round(coinFlip);
//var choice = window.prompt("Heads or Tails?").toLowerCase();
//    
//if (choice === "heads" && coinFlip === 1) {
//    window.alert("The flip was heads and you chose heads...you win!");
//} else if (choice === "tails" && coinFlip === 1) {
//    window.alert("The flip was heads but you chose tails...you lose!");
//} else if (choice === "heads" && coinFlip === 0) {
//    window.alert("The flip was tails but you chose heads...you lose!");
//} else if (choice === "tails" && coinFlip === 0) {
//    window.alert("The flip was tails and you chose tails...you win!");
//} else {
//    window.alert("You need to choose either Heads or Tails.");
//}

//Part 6 - The “Coin Flip” Game Redux (5 points)

//var coinFlip;
//var i = 0;
//do {
//    i += 1;
//    var coinFlip = Math.random();
//    var coinFlip = Math.round(coinFlip);
//    
//    if (coinFlip === 0) {
//        window.console.log("Heads");
//    } else {
//        window.console.log("Tails");
//    }
//} while (i < 10);

//Part 7 - The “Coin Flip Streak” Game (5 points)

//var coinFlip;
//var i = 0;
//do {
//    i += 1;
//    var coinFlip = Math.random();
//    var coinFlip = Math.round(coinFlip);
//    
//    if (coinFlip === 0) {
//        window.console.log("Heads");
//    } else {
//        window.console.log("Tails");
//    }
//} while (coinFlip === 0);


//Part 8 – Looping a Triangle (5 points)

//var i = 0;
//var triangle = "";
//do {
//    i += 1;
//    triangle = triangle + "#";
//    window.console.log(triangle);
//} while (i < 7);

//Part 9 – Odd or Even? (5 points)

//for (var i = 0; i <= 15; i++) {
//    if (i % 2 == 0) {
//    window.console.log(i + " is even");
//    } 
//    else {
//    window.console.log(i + " is odd");
//    }
//}