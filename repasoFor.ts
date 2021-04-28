function invertirArray1(array:number[]){

    let arrayInvertida = [];
    let num = array.length;

for(let i=0; i<num; i++){

    let x = array.pop();
    arrayInvertida.push(x);

}

console.log(arrayInvertida);

}

let arrCopy = [1, 2, 3, 4, 5, 6, 7, 8];
invertirArray1(arrCopy);









//@kehomaxd


let mycolor1 = ["Gris", "Rojo", "Blanco", "Marron", "Celeste", "Negro", "Dorado"]
function colorArcoiris1(color:string[]){

    let arcoiris = ["Rojo", "Naranja", "Amarillo", 
    "Verde", "Celeste", "Azul","Morado"];
    
    
    for(let i=0; i<=mycolor1.length; i++){
          let x = arcoiris[i]

        if(x == "Gris"){

            console.log("Gris no esta en el arcoiris")
        
        }else if(x == "Rojo"){
        
            console.log("Rojo esta en el arcoiris")
        
        }else if(x == "Blanco"){
        
            console.log("Blanco esta en el arcoiris")
        
        }else if(x == "Marron"){
        
            console.log("Marron no esta en el arcoiris")
        
        }else if(x == "Celeste"){

            console.log("Celeste esta en el arcoiris")
        
        }else if(x == "Negro"){
        
            console.log("Negro no esta en el arcoiris")
        
        }else if(x == "Dorado"){
        
            console.log("Dorado no esta en el arcoiris")
        
        }

        
    }
}


colorArcoiris1(mycolor1);