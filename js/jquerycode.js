/*<reference path="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"/>*/
//XML reference above gives us intellisense for jQuery

//Below is a fully qualified ready event.
//The ready event waits for all HTML and CSS to load before executing the code inside of the function.
jQuery(document).ready(function () {
    console.log("jQuery is working!");
});

//You can also use this shortcut for the ready event
$(function () {
    //Code in here executes AFTER HTML and CSS have loaded.

    //Syntax to select elements:
    //$("css-selector").method(params);

    //Target the <li> tags inside of the ul#highlights then we will hide/fadeIn
    $("#highlights li").hide().fadeIn(3000);

    //.html() and .text() are similer to .innerHTML and .textContent from our JS module
    //.html() will render any HTML characters and .text() will escape them

    //When assigning a jQuery selection to a variable, the name of the variably is typically preceded with a $.

    let $writeless = $("#highlights li:last-child");
    
    $writeless.text("<em>Write Less Do More with jQuery</em>"); //prints <em> tags as text
    $writeless.html("<em>Write Less Do More with jQuery</em>"); //renders <em> tags as HTML

    //When the h2#slide is clicked, slideToggle() the next sibling (<p>)
    $("#slide").on("click", function () {
        $(this).next().slideToggle(); //this is a keyword which references the item selected in the function
    });
    $("#slide").css("cursor", "pointer");
    //The line above makes the h2 look clickable by changing the way the cursor appears when a user hovers over it.

    /**MINI-LAB!!
     * Change the font-style of the <p> after the h2 with the id="fade" to italic.  When the h2 with the id="fade" is clicked, fadeToggle() the next sibling element.  All of this should be done inside the ready event.*/

    //Make the <p> after the h2#fade italic
    $("#fade").next().css("font-style", "italic");
    //$("#fade + p").css("font-style", "italic");
    let $someIpsum = $("#fade p:last-child");


    $("#fade").on("click", function () {
    $(this).next().fadeToggle(); //this is a keyword which references the item selected in the function
    });
     
    $("#fade").css("cursor", "pointer");

    ///Custom Lightbox///
    $(".thumb").on("click", function () {
        //Find the src of the image that was clicked and store it as a variable
        var imgSrc = $(this).attr("src");

        //Plug an <img> into #lightbox-content - use imgSrc as the src of the new <img> tag

        $('#lightbox-content').html('<img src="' + imgSrc + '" class="img-responsive" />');

        //Make the lightbox visible by fading in
        $('#lightbox-container').fadeIn(500);

        //When the user clicks anywhere in the #lightbox-container, fadeOut()
        $("#lightbox-container").on("click", function () {
            $(this).fadeOut(500);
        });

    });

}); //end of the ready()