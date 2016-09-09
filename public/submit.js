$(document).ready(function(){
    
    $("#subbtn").on("click", function(event){
       
        event.preventDefault();
        
        var postTitle = $("#title").val(),
            postBody  = $("#content").val();
            
        
        $("#title").val("");
        $("#content").val("");
        
        var html = "<div class='wrapper'><div class='panel panel-default'><div class='vote'><p class='button plus'><i class='fa fa-arrow-up' aria-hidden='true'></i></p><p class='count'>0</p><p class='button minus'><i class='fa fa-arrow-down' aria-hidden='true'></i></p></div><div class='pic'><img src='https://upload.wikimedia.org/wikipedia/en/8/84/AtlasShrugged.jpg'></div><h3>'" + postTitle + "</h3><p>" + postBody + "</p></div></div>";
        $("body").append(html);
    });
});

$(".form-group").on("keypress", function(){
  if ( event.which === 13 ){
      event.preventDefault();
    
        var postTitle = $("#title").val(),
            postBody  = $("#content").val();
            
        
        $("#title").val("");
        $("#content").val("");
        
        var html = "<div class='wrapper'><div class='panel panel-default'><div class='vote'><p class='button plus'><i class='fa fa-arrow-up' aria-hidden='true'></i></p><p class='count'>0</p><p class='button minus'><i class='fa fa-arrow-down' aria-hidden='true'></i></p></div><div class='pic'><img src='https://upload.wikimedia.org/wikipedia/en/8/84/AtlasShrugged.jpg'></div><h3>'" + postTitle + "</h3><p>" + postBody + "</p></div></div>";

        $("body").append(html);
  } 
});


var counter = 0;

$(document).on("click", ".plus", function() {
  var counter = $(this).siblings(".count").text();
  counter++;
  $(this).siblings(".count").text(counter);
});
$(document).on("click",".minus", function() {
  counter--;
  var counter = $(this).siblings(".count").text();
  counter--;
  $(this).siblings(".count").text(counter);
});

