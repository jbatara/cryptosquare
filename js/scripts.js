$(document).ready(function(event){
  function squareSize(arrayLength){
    return Math.ceil(Math.sqrt(arrayLength));
  }

  function cleanString(userInput){
    var userInputLC = userInput.toLowerCase();
    var noPunctuation = userInputLC.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var userInput = noPunctuation.split("");
    return userInput;
  }
  function fillMatrix(array){
    var matrix = [];
    var dimension = squareSize(array.length);
    var counter = 0;

    for(var i; i<dimension; i++){
      for(var j; j<dimension; j++){
        if(counter<string.length){
          if(j===0){
            matrix[i] = [];
            matrix[i].push(array[counter]);
            counter++;
          }
          else{
            matrix[i].push(array[counter]);
            counter++;
          }
        }
        else{
          matrix[i].push("");
          counter++;
        }
      }
    }
    console.log(matrix);
    return matrix;
  }

  function encrypt(matrix){
    var encryptedMessageNS = [];
    var encryptedMessage = "";
    for(var j; j<matrix.length; j++){
      for(var i; i<matrix.length; i++){
        encryptedMessageNS.push(matrix[i][j]);
      }
    }

    encryptedMessageNS.forEach(function(char, i){
      if ((i+1)%5 === 0){
        encryptedMessage+=char = " ";
      }
      else{
        encryptedMessage+=char;
      }
    })

    return encryptedMessage;
  }

$("form").submit(function(event){
  event.preventDefault();
  var userInput = $("input[name=number]").val();
  var answer = encrypt(fillMatrix(cleanString(userInput));
  $(".encrypted").append("<p>" + answer + "</p>");

});

});
