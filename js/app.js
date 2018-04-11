do {

  do{

    var msj= prompt('Por favor, ingrese una palabra o frase a descifrar.');

      if(msj=== ''){//en esta condicion se validara que el usuario no ingrese un campo vacio.
          alert('Campo vacio. Recuerda ingresar una palabra o frase.');
          break;

      }else{//en esta condicion se iterara a cada elemento del mensaje para descartar caracteres diferentes a las letras de acuerdo con ayuda de  codigo Ascii.
        for (var i=0; i<msj.length; i++){
          var ascii=msj.charCodeAt(i);
            if((ascii<65 || ascii>90) && (ascii<97 || ascii>122)){
              alert('Caracteres invalidos. Recuerda ingresar solamente letras.');
            }//cierre del if
            break;
        }//cierre for
      }//cierre else

    }while((ascii<65 || ascii>90) && (ascii<97 || ascii>122));//mientras no se ingresen letras, pedira ingrasar una palabra.
    
}while(msj==='');//mientras no se ingrese nada, pedira ingresar una palabra.


function cipher (message){//en esta funcion se ingresara al msj del usuario para pasarlo a un array de numeros de acuero al codigo Ascii
  var ascii;
  var arrayAscii= [];


    for(var j= 0; j<message.length; j++){//en itera sobre cada elemento del mensaje que contiene letras para posteriormente convertirlo a Ascii y obtener un array de numeros
      ascii=message.charCodeAt(j);
        arrayAscii.push(ascii);
        //console.log(arrayAscii);
    }//cierre for en j
    return arrayAscii;

}//cierre fuction
function descipher (msjAscii){
  var ascii;
  var resultStr='';
  var finalStr='';

  for (var k=0; k<msjAscii.length; k++){

    ascii=(msjAscii[k]- 65 +33) %26 +65;

      resultStr=String.fromCharCode(ascii);

        finalStr+= resultStr;
    }//cierre for

    alert('Tu codigo cifrado es: ' + finalStr);

    return finalStr;
}//function

descipher(cipher(msj));
