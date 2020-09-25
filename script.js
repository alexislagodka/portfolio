$(document).ready(function(){
    
    // link 1
    $(".link1").click(function(){
      console.log("link1");
      $( ".main" ).empty();
      $(".main").load("pages/page1.html");
    });

    //link 2
    $(".link2").click(function(){
        console.log("link2");
        $( ".main" ).empty();
        $(".main").load("pages/page2.html");
      });
     
    // link 3
    $(".link3").click(function(){
        console.log("link3");
        $( ".main" ).empty();
        $(".main").load("pages/page3.html");
        });
    
    //link 4
    $(".link4").click(function(){
        console.log("link4");
        $( ".main" ).empty();
        $(".main").load("pages/page4.html");
    });  

});