$(function(){
  var randomGIF = "";
  var tag = "";
  $(".makeGIF").on("submit", function(event){
    event.preventDefault();
    tag = $(this.tag).val();

    console.log(tag);
    if(tag != ""){
      randomGIF = $.ajax("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + tag);
    } else{
      randomGIF = $.ajax("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC");
    }
    randomGIF.then(function(data){
      var gif = data.data.image_url;
      $(".container").empty();
      $(".container").append('<img src="' + gif + '" />')
    }).catch(function(){

      $(".container").append("<p>nothing appeared</p>")

    });



  });




});
