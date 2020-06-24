//Mad Libs
var storyButton = document.getElementById("story-button");
var tellMyStory = function () {
    var fullStory = document.getElementById("story");
    var foreignCountry = document.getElementById("Foreign country").value;
    var adjective = document.getElementById("Adjective").value;
    var animal = document.getElementById("Animal").value;
    var verb = document.getElementById("Verb").value;
    var place = document.getElementById("Place").value;
    var typeOfLiquid = document.getElementById("Type of liquid").value;
    fullStory.innerHTML = "If you are traveling in " + foreignCountry + " and find yourself having to cross a piranha - filled river, here’s how to do it safely. Piranhas are more " + adjective + " during the day, so cross the river at night.  Avoid areas with netted " + animal + " traps – piranhas may be waiting there looking to " + verb + " them!  Piranhas are attracted to fresh " + typeOfLiquid + " and will migrate to it as often as possible.  Whatever you do, if you have an open wound, try to find another way to get back to the " + place + ".";
    //refactored with interpolation
    //fullStory.innerHTML = $('If you are traveling in ${foreignCountry} and find yourself having to cross a piranha - filled river, here is how to do it safely.  Piranhas are more ${adjective} during the day, so cross the river at night.  Avoid areas with netted ${animal} traps - piranhas may be waiting there looking to ${verb} them!  Piranhas are attracted to fresh ${typeOfLiquid} and will migrate to it as often as possible.  Whatever you do, if you have an open wound, try to find another way to get back to the ${place}.');
}

storyButton.addEventListener("click", tellMyStory);
//end Mad Libs

//Multiples
let loopToThirtyBySevens = document.getElementById('loop-to-thirty-by-sevens');

//ICU is reminder on for loops for (initializer; counter; update)
for (var i = 7; i <= 30; i += 7) {

    loopToThirtyBySevens.innerHTML += i + '<br/>';
}//end Multiples

//Celsius to Fahrenheit Converter
function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML = valNum * 9 / 5 + 32;
}

window.onload = function () {
    $("calculate").onclick = calculate_click;
}//End C to F converter

//Change Lab
var $ = function (id) {
    return document.getElementById(id);
}

var calculate_click = function () {
    var cents = $("cents").value;
    if ($("cents").value > 24) {
        var quarters = Math.floor(cents / 25);
        cents = cents % 25;
        $("quarters").value = quarters
    }
    if ($("cents").value > 9) {
        var dimes = Math.floor(cents / 10);
        cents = cents % 10;
        $("dimes").value = dimes
    }
    if ($("cents").value > 4) {
        var nickels = Math.floor(cents / 5);
        cents = cents % 5;
        $("nickels").value = nickels
    }
    if ($("cents").value > 0) {
        var pennies = Math.floor(cents);
        $("pennies").value = pennies
    }
}
window.onload = function () {
    $("calculate").onclick = calculate_click;
}

//Area Calculators
//Rectangle
function calculateArea() {
    var width = +document.getElementById("width").value;
    var height = +document.getElementById("height").value;
    var area = width * height;
    document.getElementById("area").value = area;
}

//Triangle
function calcTriangleArea() {
    var widthTriangle = document.getElementById("widthTriangle").value;
    var heightTriangle = document.getElementById("heightTriangle").value;
    var areaTriangle = widthTriangle * heightTriangle / 2;
    document.getElementById("areaTriangle").value = areaTriangle;
}

//Circle
function calcCircleArea() {
    var radiusCircle = document.getElementById("radiusCircle").value;
    var areaCircle = radiusCircle * radiusCircle * 3.14;
    document.getElementById("areaCircle").value = areaCircle;
}

//Ring area calculator
function calcRingArea() {
    var radiusInner = document.getElementById("radiusInner").value
    var radiusOuter = document.getElementById("radiusOuter").value
    var ringArea = 3.14 * (Math.pow(radiusOuter, 2) - Math.pow(radiusInner, 2));
    document.getElementById("ringArea").value = ringArea;

}

//Simple calculator
var inputIdFirst = "valueOfX", inputIdSecond = "valueOfY", outputId = "resultHere";
var getInputs = function (id) {
    return parseInt(document.getElementById(id).value);
}
var showOutput = function (outputValue) {
    //if no argument is given then by default "outputId" taken
    document.getElementById(outputId).innerHTML = outputValue;
}
var manipulateAs = function (operationName, valueOfX, valueOfY) {
    if (operationName == 'add')
        return valueOfX + valueOfY;
    else if (operationName == 'sub')
        return valueOfX - valueOfY;
    else if (operationName == 'mul')
        return valueOfX * valueOfY;
    else if (operationName == 'div')
        return valueOfX / valueOfY;

}
var operation = function (operationName) {
    x = getInputs(inputIdFirst);
    y = getInputs(inputIdSecond);
    output = manipulateAs(operationName, x, y);
    showOutput(output);

};

//Advanced calculator
function showResult(choice) {
    var n1 = parseFloat(document.getElementById('num1').value);
    var n2 = parseFloat(document.getElementById('num2').value);
    var r;
    var c = choice;

    switch (c) {
        case '1':
            r = n1 + n2;
            break;
        case '2':
            r = n1 - n2;
            break;
        case '3':
            r = n1 * n2;
            break;
        case '4':
            r = n1 / n2;
            break;
        default:
            break;
    }//end switch

    document.getElementById('result').value = r;
}