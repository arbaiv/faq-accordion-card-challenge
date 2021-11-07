$(function(){
    var $accordionContentBox = $("div#faq-accordion");
    $accordionContentBox.on('click keypress', "div.content-question", function(){
        // Cache the class attr value in contentState
        var contentState = $(this).attr("class");
        // If class value is equal to not-activated than remove the class not-activated and add class activated
        if( contentState.split(" ")[1] === "not-activated"){
            $(this).removeClass("not-activated").addClass("activated");
        } else {
            $(this).removeClass("activated").addClass("not-activated");
        }
    });
});
