$(function(){

  $("#arrow").hover(function(){
    $(this).addClass("on");
  });
  $("a.implementor").click(function(){
    $("#arrow").addClass("left");
    $("#arrow").removeClass("right");
  });
  $("a.developer").click(function(){
    $("#arrow").addClass("right");
    $("#arrow").removeClass("left");
  });
  $("a.implementor").mouseover(function(){
    $("#arrow").addClass("hleft").removeClass("hright");
  }).mouseout(function(){
    $("#arrow").removeClass("hleft");
  });
   $("a.developer").mouseover(function(){
    $("#arrow").addClass("hright").removeClass("hleft");
  }).mouseout(function(){
    $("#arrow").removeClass("hright");
  });
});

$(function(){

  $("a.implementor").click(function(){
    $("#implementor").addClass("show");
    $("#developer").removeClass("show");
    $(this).addClass("on");
    $(".learnmore").addClass("on");
    $("a.developer").removeClass("on");
    return false;
  });

  $("a.developer").click(function(){
    $("#developer").addClass("show");
    $("#implementor").removeClass("show");
    $(this).addClass("on");
    $(".learnmore").addClass("on");
    $("a.implementor").removeClass("on");
    return false;
  });
  $("a.developer.scroll").click(function(){
    $("a.developer").addClass("on");
  });

});


$(function(){

  $("#carousel li").click(function(){
    $(this).toggleClass("on");
    $(this).siblings().removeClass("on");

    if ($(this).hasClass("r")) {
      $("#carousel").addClass("r");
    }

    if ($("#carousel li.r.on").length === 0) {
      $("#carousel").removeClass("r");
    }
    return false;
  });
});

$(document).ready(function(){
  $(".scroll").click(function (event) {
      event.preventDefault();
      //calculate destination place
      var dest = 0;
      if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
          dest = $(document).height() - $(window).height();
      } else {
          dest = $(this.hash).offset().top;
      }
      //go to destination
      $('html,body').animate({
          scrollTop: dest
      }, 1000, 'swing');
  });
});
