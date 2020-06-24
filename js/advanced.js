//Variables to keep track of player, aliens, and keys
var ninja = {
    speed: 256
};

var alien = {};

var aliensCaught = 0;

var keysDown = {};

//Detect when the user hits a key, record which key they hit, and put that information in the keysDown object.
document.addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;  //e.keyCode is the unicode encoding behind the key pressed
    //stop keys from scrolling the entire browser window
    e.preventDefault();
});

//Detect when the user stops pressing a key, remove that property from the keysDown ojbect
document.addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
    //stop keys from scrolling the entire browser window
    e.preventDefault();
});

//Capture the gameboard element and the output element for the score
var gameboard = document.getElementById("gameboard");
var score = document.getElementById("score");

//set up the alien image
var alienElement = document.getElementById("alien");
alienElement.style.display = "inline-block";
alienElement.style.position = "absolute";

//Randomly define the position of the alien on the screen.  The function below will be called when the page first loads and after an alien is killed.
var reload =
    function () {
        alien.x = 32 + (Math.random() * (gameboard.offsetWidth - 64));
        alien.y = 32 + (Math.random() * (gameboard.offsetHeight - 64));

        alienElement.style.top = alien.y + "px";
        alienElement.style.left = alien.x + "px";

        score.textContent = aliensCaught;
    }

//Get the ninja character element
var ninjaElement = document.getElementById("ninja");

//Set up the ninja's location and call the reload() to randomly set the location of the alien.

var set = function () {
    ninja.x = gameboard.offsetWidth / 2;
    ninja.y = gameboard.offsetHeight / 2;
    ninjaElement.style.top = ninja.y + "px";
    ninjaElement.style.left = ninja.x + "px";
    reload();
}

//Update the ninja character's position and determine if the alien has been killed
var update = function (modifier) {
    if (37 in keysDown) {//left arrow
        ninja.x -= ninja.speed * modifier;
        ninjaElement.style.left = ninja.x + "px";
        ninjaElement.style.transform = "scaleX(-1)"; //makes image face left if it's going that direction
    }
        
    if (39 in keysDown) {//right arrow
        ninja.x += ninja.speed * modifier;
        ninjaElement.style.left = ninja.x + "px";
        ninjaElement.style.transform = "scaleX(1)"; //makes image face right if it's going that direction   
    }
    if (38 in keysDown) {//up arrow
        ninja.y -= ninja.speed * modifier;
        ninjaElement.style.top = ninja.y + "px";
    }
    if (40 in keysDown) {//down arrow
        ninja.y += ninja.speed * modifier;
        ninjaElement.style.top = ninja.y + "px";
    }

    //Determine if we have killed the alien
    if (ninja.x <= (alien.x + 32) && alien.x <= (ninja.x + 32) && ninja.y <= (alien.y + 32) && alien.y <= (ninja.y + 32)) {
        ++aliensCaught;
        reload();
    }
}



//initiate the game
var main = function () {
    var now = Date.now();
    //returns the number of milliseconds since 01/01/1970

    var delta = now - then;

    update(delta / 1000);
    //introduces some randomness into the speed of the player

    then = now;

    requestAnimationFrame(main);
    //This recursion calls the main() continuously so the game keeps playing without the input from the user to continue.  This function tells the browser that you wish to create an animation and that you want to call a specific function to do that before the next repaint.  The method that is passed in is called a callback function which is a function that is to execute once another function has finished executing.  The callback function is normally called 60x/sec and will generally match the display refresh rate in most web browsers.  This is how the main() continues to be called throughout the game.

}

//Get the number of milliseconds since 1970 when the page first loads.
var then = Date.now();

//Call set() to setup the gameboard
set();

//Call main() to initialize the game
main();