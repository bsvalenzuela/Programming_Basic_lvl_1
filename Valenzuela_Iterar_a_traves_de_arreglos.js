// #1
var arr1 = [8, 6, 7, 5, 3, 0, 9];
// #2
var arr2 = [4, 7, 13, 13, 19, 37, -2];
// #3
var arr3 = [6, 2, 12, 14, -24, 5, 0];

for(i=0;i<=arr1.length-1;i+=1){
    console.log(arr1[i])//imprime cada numero
    console.log(arr1[i]+i) //imprime la suma del numero y el indice del numero en el arreglo
}
for(i=0; i<=arr2.length-1;i+=1){
    if (arr2[i]>5){
        console.log(arr2[i]) // imprime solo los numeros mayores a 5
    }
    else {
        arr2[i] = 'no hay datos'
    }
}
    
    
