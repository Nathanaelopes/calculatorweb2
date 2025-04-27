/*function exemplo(){
    document.getElementById('ligar') ;   
    document.getElementById('img').scr=("/img/desligar.jpg");

}

function exemplo2(){
    document.getElementById('img').scr("img/ligar.jpg");

}*/

function insertToDisplay(data){
    document.querySelector('#resultado').value+=data 
}

function clean() {
    document.querySelector('#resultado').value='';
}

function back(){

resultado = document.querySelector('#resultado');
resultado.value = resultado.value.slice(0, -1);
}

function result(){
    const display= document.querySelector('#resultado');
    try{
       display.value = eval(display.value)
    } catch{

    }

}



function somar(){
    x= parseInt(document.getElementById('n1').value);
    y= parseInt(document.getElementById('n2').value);
    soma = x + y;

    document.getElementById('resultado').value=soma;
}

function sub(){
    x= parseInt(document.getElementById('n1').value);
    y= parseInt(document.getElementById('n2').value);
    resultado = x - y;

    document.getElementById('resultado').value=resultado;
}

function div(){
    x= parseInt(document.getElementById('n1').value);
    y= parseInt(document.getElementById('n2').value);
    resultado = x / y;

    document.getElementById('resultado').value=resultado;
}

function mult(){
    x= parseInt(document.getElementById('n1').value);
    y= parseInt(document.getElementById('n2').value);
    resultado = x * y;

    document.getElementById('resultado').value=resultado;
}

function trocarcor(cor){
     
     document.getElementById('calculadora').style.backgroundColor=cor;
}

function foto(){
  document.body.src='/img/calc.jpg'
}




 
 






















