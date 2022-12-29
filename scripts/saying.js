$(document).ready(function(){
    alert("Welcome to Saying!");

    $("#blue").click(function(){ //must be "function"
        $("#headline").css("color", "blue");
    });
    $("#green").click(function(){ //must be "function"
        $("#headline").css("color", "green");
    });
    $("#red").click(function(){ //must be "function"
        $("#headline").css("color", "red");
    });
    $("#haha").click(function(){ //must be "function"
        $("#headline").html("哈哈哈哈哈哈哈");
    });
    $("#restore").click(function(){ //must be "function"
        $("#headline").css("color", "black");
        $("#headline").html("要變色的文字");
    });
    $("#send").click(function(){
        if($(".input").val().length > 0){
            $("#headline").html($(".input").val());
            $(".input").val(""); //clear input
        }
    });
    $("#headline").hover(function(){
        $("#headline").css("font-size", "50px");
    }, function(){
        $("#headline").css("font-size", "");
    });
});//document.ready