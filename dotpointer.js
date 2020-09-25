$(document).ready(function(){
    
    // mouse moving in the page
    $("body").bind("mousemove", function(e) {
        
        let bodyWidth = $("body").width();
        let bodyHeight = $("body").height();

        document.getElementById("dot").style.left = e.pageX + "px";
        document.getElementById("dot").style.top = e.pageY + "px";
        
        if ( (e.pageX + 10 > bodyWidth) || (e.pageY + 10 > bodyHeight) ){
            document.getElementById("dot").style.display = "none";        
        } else {
            document.getElementById("dot").style.display = "block";
        }

    });

    // mouse enter and leave the page
    $("body").mouseenter(function() {
        document.getElementById("dot").style.display = "block";
        $("#dot").css("background-color", "greenyellow");
    });
    $("body").mouseleave(function() {
        document.getElementById("dot").style.display = "none";
    });

    // mouse over link
    $("a").hover(function(){
        $("#dot").css("background-color", "#e342f5");
            }, function(){
        $("#dot").css("background-color", "greenyellow");
    });
  });