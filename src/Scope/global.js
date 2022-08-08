var a; //declarando
var b='b' //inicializando 
b= 'bb' //reasignando
var a='1'; //re declarando

//global scope
var fruit='apple';
function frutas(){
    console.log(fruit)
}

frutas(fruit)

function countries(){
    country= 'CaracasCaracasss' //global
    console.log(country)
}
countries()
console.log(country)