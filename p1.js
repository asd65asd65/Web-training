$(document).ready(function(){
    $("#tabs").tabs();

    $("#btn1").click(
        function(){
            alert("歡迎您拜訪此網頁");
        }
    );

    $("#btn2").click(
        function(){
            var s = "";
            s += $("#text1").val();
            $("#p1-div2").html(s);
        }
    );

    var goldClickCount = 0;
    $("#count").html(goldClickCount);
    $("#info").click(function(){
        if ($(this).hasClass('close')) {
            $(this).next().fadeOut();
            $(this).removeClass("close");
            $("#count").html(goldClickCount);
        } else {
            $(this).next().fadeIn();
            $(this).addClass("close");
        }
    });

    $(".treasury tr td").click(function(){
        if ($(this).hasClass('Takelight')) {
            $(this).removeClass("Takelight");
            $(this).html('金')
        } else {
            $(this).addClass("Takelight");
            goldClickCount++;
            $("#count").html(goldClickCount);
            $(this).html('空')
        }
    });

    $.getJSON("test.json",function(data){
        $.each(data,function(index,value){
            $("#test3 ul").append("<li>"+index+":"+value.Id+" "+value.Name+"</li>");
        });
    });
    
});

function changeStyle() {
    $("#title1").addClass("style-1");
}

function resetStyle() {
    $("#title1").removeClass("style-1");
}

function changeStyle2() {
    $("#title2").addClass("style-1");
}

function resetStyle2() {
    $("#title2").removeClass("style-1");
}
