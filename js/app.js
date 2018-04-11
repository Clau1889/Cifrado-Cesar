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
