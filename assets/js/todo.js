// Check off specific Todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click on X to delete corresponding Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// Create new Todo
$("input[type='text']").on("keypress",function(event){
    var todoText;
    // enter Key pressed
    if (event.which === 13){
        todoText = $(this).val();
        // reset input field
        $(this).val("");
        // create a new li and add to ul
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
});
