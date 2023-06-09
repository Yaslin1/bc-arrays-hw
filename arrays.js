//Object Constructor
//2 parameters
//return an object containing all of arguements

function objCon(a,b) {
    return {a, b}
}
const numCon = objCon("sandwhich","chili");
console.log(numCon)

const myArray = ["sushi", "nachos", "burger"];

//Bonus: make another function which adds the object to the end of an array
function objCon2(param) {
    
    myArray.push(param);
}

const food = objCon2 (numCon);
console.log(myArray);
    
//Find Nth Element
//parameter: number N
//return the Nth element of an array - Not the value at index N
//Bonus: make the function work with any array

function numEle(n) {
    const amountN = myArray[n];
    return amountN
}

const numIndex = numEle(1);

//On click practice
//Make a new HTML page with a button which changes the title of the page
//include a heading and subheadings with paragraphs
//add buttons to change and add elements to the page
//add a button to remove an entire subheading and its text from the page

