$(document).ready( () =>  {
  $(".spl1").each( (i, elem)=> {
    // console.log(elem);
    $(elem).on("submit", (evt)=> {
      evt.preventDefault();
      console.log(evt.target.action);
      $.post(evt.target.action, {quantity:evt.target.parentElement.children[4].firstChild.value})
        .then( ()=> {
          console.log("done!!");
        })
    })
  })
})
