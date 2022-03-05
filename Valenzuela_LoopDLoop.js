//Este problema lo trabajaremos con un ciclo ya que nos estan pidiendo
//repetir una acción varias veces, y para no escribir tanto codigo
//es recomendable utilizar un ciclo.

//El punto de partida es el kilometro 0, hasta el kilometro 10, 
//donde ya no se necesitara el bucle

//Para detener el blucle utilizaremos condicionales

//En cada iteracion aumentaremos 1 kilometro 

//Solo utilizaremos dos variables, llamadas "kilometro" que indicara
//el kilometro en el que se encuentre el corredor
//y otra variable llamada "velocidad" que indicara la velocidad
//a la que esta corriendo.


var kilometro = 0

for (;kilometro <=10 ; kilometro +=1)
    if(Number.isInteger((kilometro)/3) && kilometro !=0){
        console.log('vas en el kilometro',kilometro,'ten un caramelo')
    }

//Caracteristica stretch 1
var kilometro = 0
var velocidad = 12
for(;kilometro <=10;kilometro +=1)
    if(Number.isInteger(kilometro/3) && kilometro !=0 && velocidad >9){
        console.log('vas en el kilometro',kilometro,'y tu velocidad es de',velocidad,'kilometros por hora,ten un caramelo :D')
    }