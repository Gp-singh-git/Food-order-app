$(document).ready(function () {

$(() => {

  $.ajax({
    method: "GET",
    url: "/orders"
  }).done((items) => {
    for(item of items) {

      $("<div>").text(item.name).appendTo($("body"));
    }
  });;
});
});
