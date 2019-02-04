var numberButton = 1;
//déclaration de la variable
$(document).ready(function(){
  //Après la déclaration de la méthode click on déclare une fonction
  // qui lors de chaque évenement click incrémentera la valeur de numberButton
  $('#clickMe').click(function(){
    $('#number').each(function(){
      $('#number').val(numberButton ++);
    });
  });
});
