// Dear Connor/Ryan/Joel: This is objectively stupidly written code.
// The variable and function names are often non-descript, and there
// are next to no comments. However, a weekend without touching code
// did my brain a tremendous amount of good.

$(function(){
  var randomGIF = "";
  var gifTag = "";
  var randomSticker = "";
  var stickerTag = "";
  var search = "";
  var searchTag = "";
  var i = 0;
  var thing = "";

// handles random gif form submission.
  $(".makeGIF").on("submit", function(event){
    event.preventDefault();
    gifTag = $(this.gifTag).val();
    if(gifTag != ""){
      randomGIF = $.ajax("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + gifTag);
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

// Handles sticker form submission.
  $(".makeSticker").on("submit", function(event){
    event.preventDefault();
    stickerTag = $(this.stickerTag).val();
    if(stickerTag != ""){
      randomSticker = $.ajax("http://api.giphy.com/v1/stickers/random?api_key=dc6zaTOxFJmzC&tag=" + stickerTag);
    } else{
      randomSticker = $.ajax("http://api.giphy.com/v1/stickers/random?api_key=dc6zaTOxFJmzC");
    }
    randomSticker.then(function(data){
      var sticker = data.data.image_url;
      $(".container").empty();
      $(".container").append('<img src="' + sticker + '" />')
    }).catch(function(){
      $(".container").append("<p>nothing appeared</p>")
    });
  });

// The following is some hot garbage code made of fairy whispers
// and recycled duct tape. DO NOT TOUCH.
  $(".makeSearch").on("submit", function(event){
    event.preventDefault();
    searchTag = $(this.searchTag).val();
    if(searchTag != ""){
      search = $.ajax("http://api.giphy.com/v1/gifs/search?q=" + searchTag + "&api_key=dc6zaTOxFJmzC");
    } else{
      alert("You must provide a search term!");
    }
    search.then(function(data){
      j = 0;
      i = 0;
      $(".container").empty();
      for(i = 0; i< 5; i++){
        thing = data.data[i].images.original.url;
        $(".container").append('<img src="' + thing + '" />');
      }
      $(".next5").on("click", function(){
        $(".container").empty();
        var j = i + 5;
        for(i; i< j; i++){
          if(i === data.data.length){
            $(".container").append('<p>All out of wacky pictures! Try a new search!</p>');
            return;
          }else{
            thing = data.data[i].images.original.url;
            $(".container").append('<img src="' + thing + '" />');
          }
        }
      });
    }).catch(function(){
      $(".container").append("<p>nothing appeared</p>")
    });
  });



});
