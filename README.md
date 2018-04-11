# Codigo Cesar.

#### Descripcion:
Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha.

Ejemplo:
```javascript
Texto recibido: ABCDEFGHIJKLMNOPQRSTUVWXYZ
```
```javascript
Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG
```
```javascript
Consideraciones Específicas

1. El programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas.  
2. El código debe estar compuesto por funciones con los siguientes nombres: cipher y decipher.
3. El usuario no debe poder ingresar un campo vacío o que contenga números
```

###### Codigo Ascii
ASCII (American Standard Code for Information Interchange) es un código que fue propuesto como una solución para unificar la representación de caracteres alfanuméricos en las computadoras.

Como funciona:
* Convertir mayusculas, minusculas, numeros y caracteres a un texto de numeros especificado segun el codigo ASCII.

Conoce mas, da click al siguiente vinculo : [Codigoo ASCII](http://lacomputadora.org/que-es-el-codigo-ascii-y-para-que-sirve/166)

###### Cifrado Cesar
Es un tipo de cifrado por sustitución en el que cada letras del mensaje original, seran reemplazas por otra letra del alfabeto segun la posicion asignada por el programador.

Conoce mas, da click al siguiente vinculo : [Cifrado Cesar](https://www.sangakoo.com/es/temas/el-metodo-cesar)


#### Pseudocodigo
###### Procedimiento para desarrollar el proyecto paso a paso.

1. El usuario ingresara un mensaje o frase deseable para decifrar.

2. Se validara que no se ingrese campo vacio.

3. Se validara que el programa acepte unicamente letras mayusculas y minusculas.

4. Por medio de una funcion llamada *cipher* el mensaje se cifrara a codigo Ascii.

5. Con otra funcion llamada *decipher* el mensaje anterior se decifrara a codigo Cesar.

6. Se retornara el mensaje resultante descifrado.

### Diagrama de flujo
###### A continuacion se representa de manera grafica la secuencia de flujo del proyecto:

![Diagrama de flujo Cifrado Cesar](assets/img/diagrama-flujo-cifrado-Cesar.png)
