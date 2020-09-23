window.addEventListener('mousemove', function(e){
    document.getElementById("dot").style.display = "block";
    document.getElementById("dot").style.left = e.pageX + "px";
    document.getElementById("dot").style.top = e.pageY + "px";
});

window.addEventListener('mouseout', function(e){
    document.getElementById("dot").style.display = "none";
});

$(document).ready(function(){
    $("a").hover(function(){
        $("#dot").css("background-color", "red");
            }, function(){
        $("#dot").css("background-color", "greenyellow");
    });
  });