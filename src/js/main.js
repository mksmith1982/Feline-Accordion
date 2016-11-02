import $ from "jquery";

// function accordion (event) {
//   var target = event.target
//   var container1 = $("container1");
//   var container2 = $("container2");
//   var container3 = $("container3");


function showContent (event) {
  var target = $(event.target);
  // console.log(target[0].id);
    if (target[0].id == "header1") {
      $(".container1").addClass("showContent");
      $(".container2").removeClass("showContent");
      $(".container3").removeClass("showContent");
      $(".container4").removeClass("showContent");
  } else if (target[0].id == "header2") {
      $(".container1").removeClass("showContent");
      $(".container2").addClass("showContent");
      $(".container3").removeClass("showContent");
      $(".container4").removeClass("showContent");
  } else if (target[0].id == "header3") {
      $(".container1").removeClass("showContent");
      $(".container2").removeClass("showContent");
      $(".container3").addClass("showContent");
      $(".container4").removeClass("showContent");
  } else if (target[0].id == "header4") {
      $(".container1").removeClass("showContent");
      $(".container2").removeClass("showContent");
      $(".container3").removeClass("showContent");
      $(".container4").addClass("showContent");
}
}



$(".header").click(showContent); 
