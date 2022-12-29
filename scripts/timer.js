
$(document).ready(function(){
    var time = 0;

    alert("Welcome to Timer!");
    $(".send").click(function(){
      if(($(".input").val() >= 0) && (time == 0)){
        time = $(".input").val();
        $(".time_left").html($(".input").val());
        
        var runtime = setInterval(function(){

          time--;
          
          $(".time_left").html(time);
          
          
          if (time <= 0){
            $(".time_left").html("0");
            clearInterval(runtime);
            setTimeout(function(){alert("time's up!!!");},100);
          }

        },1000);
      }
      $(".input").val(""); //clear input
    });
});
