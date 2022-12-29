$(document).ready(function(){
    alert("Welcome to Calculator!");
    var operator_mode = 0; //哪一種計算方法
    var a,b,ans,temp; //value1, value2
    
    $("#plus").click(function(){
        $("#operator").html("+");
        operator_mode = 1;
    });//#plus.click
    $("#minus").click(function(){
        $("#operator").html("-");
        operator_mode = 2;
    });//#minus.click
    $("#time").click(function(){
        $("#operator").html("*");
        operator_mode = 3;
    });//#time.click
    $("#divide").click(function(){
        $("#operator").html("/");
        operator_mode = 4;
    });//#divide.click
    $("#modulo").click(function(){
        $("#operator").html("%");
        operator_mode = 5;
    });//#modulo.click

    $(".send").click(function(){
        a = Number($("#input1").val());
        b = Number($("#input2").val()); //轉型別


        if(operator_mode == 1){
            ans = a + b;
        }else if(operator_mode == 2){
            ans = a - b;
        }else if(operator_mode == 3){
            ans = a * b;
        }else if(operator_mode == 4){
            ans = a / b;
        }else if(operator_mode == 5){
            ans = a % b;
        }

        if(operator_mode != 0){
            $("#input1").val("");
            $("#input2").val(""); //clear input
            $("#answer").html(ans);

            temp = $("#record").html() + "<br>" + a + " "  //html會讀<br>
            + $("#operator").html() + " " + b + " = " + ans;
            $("#record").html(temp);//紀錄
        }
    });//.send.click

    $("#clear").click(function(){
        $("#record").html("");//clear record
    })//#clear.click

});//document.ready