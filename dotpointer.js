$(document).ready(function(){
    
    $(document).bind("mousemove", function(e) {
        //$("#dot").css("background-color", "greenyellow");
        document.getElementById("dot").style.left = e.pageX + "px";
        document.getElementById("dot").style.top = e.pageY + "px";
    });

    $(document).mouseenter(function() {
        document.getElementById("dot").style.display = "block";
        $("#dot").css("background-color", "greenyellow");
    });
    $(document).mouseleave(function() {
        document.getElementById("dot").style.display = "none";
    });



    $("a").hover(function(){
        $("#dot").css("background-color", "red");
            }, function(){
        $("#dot").css("background-color", "greenyellow");
    });
  });