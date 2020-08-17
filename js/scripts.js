$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const objectInput= $("input#object").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    event.preventDefault();

   let spanArray = ['person1', 'person2', 'object', 'exclamation', 'verb', 'noun'];

   spanArray.forEach(function(span){
    console.log(span);
    let thisInput = $('input#' + span).val();
      $('.' + span).text(thisInput);
    });
    $('#story').show();
  });
});

/* let newArray = ['tag1', 'tag2', 'tag3', 'tag4'];

newArray.forEach(function(news) {
  let thisInput = $('input#' + news).val();
  $('.' + news).text(thisInput);
})

$('#story').show(); */