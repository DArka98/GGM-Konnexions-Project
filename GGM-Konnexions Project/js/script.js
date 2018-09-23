$(function(){
  var galleryImage = $(".gallery").find("img").first();
  var images = [
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
    "images/11.jpg",
    "images/12.jpg",
    "images/13.jpg"
  ];

  var i = 0;

  setInterval(function(){
    i = (i+1) % images.length;
    galleryImage.fadeOut(function(){
        $(this).attr('src', images[i]);
        $(this).fadeIn();
    });
  }, 2000);

});

$(document).ready(function(){
    $("#flip").click(function(){
        $(".content").slideToggle("slow");
    });
});
