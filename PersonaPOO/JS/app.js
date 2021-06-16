class Persona{
    constructor(nombre,edad,cedula,sexo,peso,altura){
        this.nombre = nombre;
        this.edad = edad;
        this.cedula =cedula;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
    calcularIMC(peso,altura){
        peso = parseFloat(document.getElementById("peso").value);
        altura = parseFloat(document.getElementById("altura").value);
        var resultadoimc= peso/(altura*altura);
        var estadopersona;

        if(resultadoimc<20){
            estadopersona= 'Peso ideal';
        }
        if(resultadoimc>=20 && resultadoimc<=25){
             estadopersona= 'Debajo de su peso ideal';
        }
        if(resultadoimc>25){
            estadopersona= 'Sobrepeso';

    }
    document.getElementById("resultadoIMC").innerHTML = "IMC: " + resultadoimc.toFixed(3);
    document.getElementById("estadopersona").innerHTML = "Estado: " + estadopersona;
  }
  

    esMayor(edad){
        edad= parseInt(document.getElementById("edad").value);
        if(edad>18){
            alert("Es mayor de edad")
        }
}
}
var resultadoIMC = new Persona;
var mayoredad = new Persona;
