
//Paso 1, creación de variables
var age = 12 // edad
var height = 55; //altura en centimetros
//Paso 2, creación de condicionales 
if (height >=52) //es mayor o igual a 52, entonces se ejecuta lo siguiente
{
 console.log('¡Súbete, chico!')   
}
else {
    console.log('Lo siento, chico. Tal vez el próximo año')
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
//Característica stretch 1
if (height >=52 && age >=10)
{
    console.log('¡Súbete, chico!')
}
else {
    console.log('Lo siento, chico. Tal vez el próximo año')
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//Característica stretch 2
if(height >=52){
    console.log('¡Súbete, chico!')
}
else if (age >=10){
    console.log('¡Súbete, chico!')
}
else {
    console.log('Lo siento, chico. Tal vez el próximo año')
}