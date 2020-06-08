$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    console.log(person1Input)
    console.log(person2Input)
    console.log(animalInput)
    console.log(exclamationInput)
    console.log(verbInput)
    console.log(nounInput)


    let madlibs = [person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput];
   
    console.log(madlibs);

    madlibs.forEach(function(madlib) {
     
      // $('.output').replaceWith('<ul>' + madlib + '</ul>');
        $('.output').append('<ul>' + madlib + '</ul>');
      // $('.output').append(madlib);
      console.log(madlib);
    });
    


    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);

    $(".output").show();

    
  });
});