//@kehomaxd

function signo_Zodiacal (birthday) {
    var date = birthday.split("/");
    var dia = date[0];
    var mes = date[1];
    var anio = date[2];
    var signo;
    if (dia >= "21" && mes == "03" || (dia <= "20" && mes == "04")) {
        signo = "Aries";
    }
    else if (dia >= "21" && mes == "04" || (dia <= "20" && mes == "5")) {
        signo = "Tauro";
    }
    else if (dia >= "21" && mes == "05" || dia <= "21" && mes == "06") {
        signo = "Geminis";
    }
    else if (dia >= "22" && mes == "06" || dia <= "22" && mes == "07") {
        signo = "Cancer";
    }
    else if (dia >= "23" && mes == "07" || dia <= "22" && mes == "08") {
        signo = "Leo";
    }
    else if (dia >= "23" && mes == "08" || dia <= "22" && mes == "09") {
        signo = "Virgo";
    }
    else if (dia >= "23" && mes == "09" || dia <= "22" && mes == "10") {
        signo = "Libra";
    }
    else if (dia >= "23" && mes == "10" || dia <= "22" && mes == "11") {
        signo = "Escorpio";
    }
    else if (dia >= "23" && mes == "11" || dia <= "21" && mes == "12") {
        signo = "Sagitario";
    }
    else if (dia >= "22" && mes == "12" || dia <= "20" && mes == "01") {
        signo = "Capricornio";
    }
    else if (dia >= "21" && mes == "01" || dia < "18" && mes == "02") {
        signo = "Aquarius";
    }
    else if (dia >= "19" && mes == "02" || dia <= "20" && mes == "03") {
        signo = "Picis";
    }
    console.log(dia);
    console.log(mes);
    console.log(anio);
    console.log("Tu fecha de nacimiento es " + birthday + " eres " + signo);
}
signo_Zodiacal("21/05/1999");




//CONTINENTES




//@kehomaxd

let asia1 = ["Irak",  "Japon",  "Yemen",  "Indonesia", "China"];
let europa1 = ["Chipre", "Grecia", "Portugal", "Espana", "Noruega"];
let america1 = ["Canada", "Venezuela", "Argentina", "Mexico", "Colombia"]; 
let africa1 = ["Camerun", "Nigeria", "Marruecos", "Uganda", "Sudafrica"];
let oceania1 = ["Australia", "Nueva Zelanda", "Palaos", "Tuvalu", "Samoa"];

let paises1 = {asia1, europa1, america1, africa1, oceania1};
 let introducir1:string;

function continentes(introducir){
    let continente:string;


    for(let i = 0; i <= 5; i++){ 

        
        if(asia1[i] == introducir){
            
            continente = "Asia";
        
        }else if (europa1[i] == introducir){

            continente = "Europa";

        }else if (america1[i]== introducir){

            continente = "America";

        }else if (africa1[i] == introducir){

            continente = "Africa";

        }else if (oceania1[i] == introducir){

            continente = "Oceania";

        }
    }

    console.log(`Te encuentras en ${continente} en el pais ${introducir} Bienvenido, disfrute de su estadia`);

}

continentes("Japon");









//@kehomaxd 

export function parEimpar1(num:number){

    if(num % 2 == 0){
        console.log(`El numero es par`);

    }else{
        console.log(`El numero es impar`);
    }

}
// parEimpar(17);