function arrayNombres1 (array:string[]){

    // let TodosM:boolean;
    let i=0;
    let eureka =false 

    do{
        
        if(array[i][0] == "M"){
            // TodosM = true;
            eureka = true;
        }else{
            // TodosM = false
            eureka = false;
        } 
        i++
    
    }while ( i<array.length && eureka == true)
    console.log(eureka);
}

arrayNombres1(["Maria", "Sofia", "David", "Marco", "Sullivan", "Mike", "Mortawa"]);









function par1(array:number[]){
    let i=0;
    let par =[];
    let eureka = false;
    do{
    
        if(array[i] % 2 == 0){
            
            // console.log(array[i]);
            par.unshift(array[i]);

            eureka = true;
        }
        i++
        // console.log(par);

    }while(i<=array.length && eureka == false)
    console.log(par);
}
par1([1, 3, 4, 5, 6, 7]);









function contarImpares1(numeroMax:number){

    let numImpar:number;
    let i = 0
    do{

        if(i % 2 != 0){

            console.log(i);
            numeroMax
        }   
        i++
    }while (i <numeroMax )
}

console.log(contarImpares1(38));









//@kehomaxd



export function sumCaractere1(array:string[]){
   let a:number = 0;
    for (let i = 0; i<array.length; i++){

        a += array[i].length
        // console.log(a);
       
    }

    console.log(a);
    return a;
}
let arrayString = ["Hola", "¿Oyes eso?", "Si como un zumbido", "excato"];
// console.log(sumCaractere(arrayString));










import  {parEimpar} from "./parEimpar";
import {sumCaractere} from "./sumCaracteres";

let arr1 = ["Casa", "Coche", "Ciudad", "Cesta"];
let arr2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let arr3 = ["Venezuela", "Veneno", "Voltaje"];

let t3;

t3 = sumCaractere(arr3);

parEimpar(t3);