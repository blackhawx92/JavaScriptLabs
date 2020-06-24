//alert() is a method built into browsers that causes an unstylable pop-up.
//alert("JavaScript is working!");

/*
 JavaScript is Object Oriented
 JavaScript is NOT type safe
 JavaScript is an interpreted language, therefore, you will get no server side debugging

Objects are declared with let, var, or const

The primitive data type for JS variables is determined by the JS engine in the browser
When the script is executed, the JS engine will determine whether your variable was an int, string, or so on.

Comparison operators
- Abstract Equality (==) 
    -compares two variables on their content
    -Ex. 1 == "1" --> TRUE
    - If the primitive data types of the two values don't match, the JS engine will try to coerce them both into being a similar type.  If the content matches, then you get a true result.  See example above.

- Strict Equality (===)
    - This compares two variables on their content and data type
    - Ex. 1 === "1" --> FALSE  *note that === in JS is same as == in C#

 */

//variables can change values and data types (not type safe)
let x = 10;

//Use console.log() to view the value of x in the browser.  This will only appear in the inspector window.
console.log(x);

x = 'Hello!';

console.log(x);

//Create a dynamic year in the footer of our jsintro.html file
//1.  Get the current date.
//2.  Get only the year part of thed date.
//3.  Get the element I want to inject the year into.
//4.  Update the element with the year.

//Create a new Date object to display for our copyright.
let currentDate = new Date();  //empty conctructor which defaults to today's date

console.log(currentDate + ' --Durrent Date');

//Create a variable to take ONLY the year from currentDate.
let currentYear = currentDate.getFullYear();
console.log(currentYear + '-- Current Year');

//Use the value of currentYear as the <span id="copyright"> content
//Create a variable to capture the <span? from the HTML doc
let copyright = document.getElementById('copyright');
console.log(copyright);

//To update the content of an element, use .textContent.
copyright.textContent = currentYear;


/*********************** ARRAYS ***********************/
//JS Arrays are LIFO - Last In First out
//JS arrays do NOT have a set size
//Can be accessed like C# Arrays - with a 0 based index value

let colors = ['blue', 'brown', 'orange', 'pink', 'red', 'green'];

//To add an item to the array, use push()
colors.push('purple');

//To remove the last item added, use .pop() --- colors.pop();

//Select a color from the array and use it as the content for our <strong>
//Create a variable to store the <strong>
let colorSpan = document.getElementById('yourcolor');

colorSpan.textContent = colors[3]; //This changes the content or text inside of the <strong>

//Change the color of the text in the <strong> by adding inline styling through JS
colorSpan.style.color = colors[3];

/*********************** FUNCTIONS ***********************/
//Functions are declared with the 'function' keyword.
//The code inside of a function will ONLY run when called upon in reaction to an event.

//We will create a function that will be called when a user submits his/her favorite color into our form
//on jsintro.html.

function displayFavoriteColor()
{
    //Create a variable to store user input
    let userFavoriteColor = document.getElementById('tbFavColor').value;
    //Use .value to get back ONLY the content the user typed in

    //Create a variable for the <span> (Output Element)
    let colorMessage = document.getElementById('color-message');

    //Update the <span> content and display a message.

    colorMessage.textContent = userFavoriteColor + ' is my favorite color!';

    //Use JS to add inline styling to the <span>
    colorMessage.style.backgroundColor = userFavoriteColor;

}

//MINI-LAB!! function displayWaterWeight()
function displayCalcWaterWeight()
{
    let userGallons = document.getElementById('tbGallons').value;
    let userMessage = document.getElementById('gallon-message');
    userMessage.textContent = userGallons + ' gallons of water weighs ' + (userGallons * 8.33).toFixed(2) + 'lbs';

}

//Event listeners can be used to wire up functions to events similar to the 'onclick' attribute.  
let btnCalcWeight = document.getElementById('btnCalcWeight');
btnCalcWeight.addEventListener('click', displayCalcWaterWeight);
//Note that event listener is defined outside the function.  


/*********************** LOOPS ***********************/
//Syntax is the same as C# for: for, while, and do while (no for each)
let loopToTen = document.getElementById('loop-to-ten');

//ICU is reminder on for loops for (initializer; counter; update)
for (var i = 1; i <= 10; i++){
    //.textContent escapes any HTML characters and prints them as plain text.
    //To render HTML, use .innerHTML.
    //.innerHTML is a potential security risk.  DO NOT render any HTML unless you have full control over the content.

    loopToTen.innerHTML += i + '<br/>';
}

/*********************** BRANCHING ***********************/
//Syntax is the same for If and Switch

//Function that uses a switch to check for milestones
function showSingleMilestone()
{
    //User input
    let userAge = document.getElementById('tbUserSingleMilestone').value;

    //Output element
    let singleMilestone = document.getElementById('single-milestone');

    //Use a switch to check user age and print message accordingly
    switch (userAge) {

        case "13":
            singleMilestone.innerHTML = "You are now a teenager. <strong>Yay!</strong>";
            break;
        case "18":
            singleMilestone.innerHTML = "You are <em>technically</em> an adult.";
            break;
        case "21":
            singleMilestone.innerHTML = "<em>Cheers</em>, mate!";
            break;
        default:
            singleMilestone.innerHTML = "<strong>Sorry, no milestones for you this year.</strong>";
            break;
            
    }
    
}

//Event listener to call milestone function
let btnSingleMilestone = document.getElementById('btnSingleMilestone');
btnSingleMilestone.addEventListener('click', showSingleMilestone);

//Function that use if/else to display multiple milestones.  This was designed to list all of the milestones, so all are in separate if statements.  Had we used else, only one milestone would be reported.
function showMultipleMilestiones()
{
    //User input
    let userAge = document.getElementById('tbUserAgeMultiMilestones').value; 

    //Output element
    let multipleMilestones = document.getElementById('multiple-milestones');

    //If statement to check for milestones and add them to a list
    let listOfMilestones = "<ul>";

    if (userAge >= 55) {
        listOfMilestones += "<li>You are eligible for AARP!</li>";
    }
    if (userAge >= 25) {
        listOfMilestones += "<li>You can rent a car!</li>";
    }
    if (userAge >= 18) {
        listOfMilestones += "<li>You can now vote!</li>";
    }
    if (userAge >= 13) {
        listOfMilestones += "<li>You are/were a teenager.</li>";
    }
    if (userAge < 13) {
        listOfMilestones += "<li>Sorry, there are no milestones for you.</li>";
    }
    listOfMilestones += "</ul>";

    multipleMilestones.innerHTML = listOfMilestones;
}

let btnMultiMilestones = document.getElementById('btnMultiMilestones');
btnMultiMilestones.addEventListener('click', showMultipleMilestiones);