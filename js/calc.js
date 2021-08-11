
function calcadd(num1, num2) {
    console.log(`Summation = ${num1 + num2}`);

    document.getElementById("list").innerHTML=" ";

    var node = document.createElement("li");  // Create a <li> node
    var textnode = document.createTextNode(`Summation = ${num1 + num2}`);   // Create a text node
    node.appendChild(textnode);     // Append the text to <li>
    document.getElementById("list").appendChild(node);
}

function calcsub(num1, num2) {
    console.log(`Substraction = ${num1 - num2}`);

    document.getElementById("list").innerHTML=" ";

    var node = document.createElement("li");  // Create a <li> node
    var textnode = document.createTextNode(`Substraction = ${num1 - num2}`);   // Create a text node
    node.appendChild(textnode);     // Append the text to <li>
    document.getElementById("list").appendChild(node);

}

function calcmul(num1, num2) {
    console.log(`Multiplication = ${num1 * num2}`);

    document.getElementById("list").innerHTML=" ";

    var node = document.createElement("li");  // Create a <li> node
    var textnode = document.createTextNode(`Multiplication = ${num1 * num2}`);   // Create a text node
    node.appendChild(textnode);     // Append the text to <li>
    document.getElementById("list").appendChild(node);

}

function calcdiv(num1, num2) {
    console.log(`Division = ${num1 / num2}`);

    document.getElementById("list").innerHTML=" ";

    

    var node = document.createElement("li");  // Create a <li> node
    var textnode = document.createTextNode(`Division = ${num1 / num2}`);   // Create a text node
    node.appendChild(textnode);     // Append the text to <li>
    document.getElementById("list").appendChild(node);

}

function calcrem(num1, num2) {
    console.log(`Reminder = ${num1 % num2}`);

    document.getElementById("list").innerHTML=" ";

    
    var node = document.createElement("li");  // Create a <li> node
    var textnode = document.createTextNode(`Reminder = ${num1 % num2}`);   // Create a text node
    node.appendChild(textnode);     // Append the text to <li>
    document.getElementById("list").appendChild(node);

}



// All Reset


function allReset() {
    document.getElementById("frm").reset();
    document.getElementById("list").innerHTML='';

}

function Resetall() {
    document.getElementById("list").innerHTML='';
}






                 // Get all operation

// function calculates(num1, num2) {
//     console.log(`Summation = ${num1 + num2}`);
//     console.log(`Substraction = ${num1 - num2}`);
//     console.log(`Multiplication = ${num1 * num2}`);
//     console.log(`Division = ${num1 / num2}`);
//     console.log(`Reminder = ${num1 % num2}`);

//     document.getElementById("list").innerHTML=" ";

//     var node = document.createElement("li");  // Create a <li> node
//     var textnode = document.createTextNode(`Summation = ${num1 + num2}`);   // Create a text node
//     node.appendChild(textnode);     // Append the text to <li>
//     document.getElementById("list").appendChild(node);


//     var node = document.createElement("li");  // Create a <li> node
//     var textnode = document.createTextNode(`Substraction = ${num1 - num2}`);   // Create a text node
//     node.appendChild(textnode);     // Append the text to <li>
//     document.getElementById("list").appendChild(node);


//     var node = document.createElement("li");  // Create a <li> node
//     var textnode = document.createTextNode(`Multiplication = ${num1 * num2}`);   // Create a text node
//     node.appendChild(textnode);     // Append the text to <li>
//     document.getElementById("list").appendChild(node);


//     var node = document.createElement("li");  // Create a <li> node
//     var textnode = document.createTextNode(`Division = ${num1 / num2}`);   // Create a text node
//     node.appendChild(textnode);     // Append the text to <li>
//     document.getElementById("list").appendChild(node);

//     var node = document.createElement("li");  // Create a <li> node
//     var textnode = document.createTextNode(`Reminder = ${num1 % num2}`);   // Create a text node
//     node.appendChild(textnode);     // Append the text to <li>
//     document.getElementById("list").appendChild(node);

// }


