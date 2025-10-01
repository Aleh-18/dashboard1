
 let ejercicio = 0

while(ejercicio<1 || ejercicio>10){
    ejercicio = prompt("¿Qué ejercicio quieres cargar?");
}




/*1.Crea un objeto persona con las propiedades nombre, edad y ciudad.
Luego muestra su contenido en consola.*/
if(ejercicio==1){

    let persona = {
        nombre: "Kiko",
        edad: 112,
        ciudad: "Republica dominicana"

    };

    console.log(persona);
}


/*2.  Dado el objeto:
Muestra por consola la marca del coche.
Cambia el año a 2024.
Agrega una propiedad color con valor "rojo".*/

if(ejercicio==2){
    
    let coche = {
        marca: "Javibrumrbum",
        modelo: "el mejo",
        año: 2077,
   
    };

    console.log(coche.marca)
    coche.año=2024;
    coche.color="rojo";
    console.log(coche);
}

/*3. Crea un objeto animal con propiedades tipo, nombre y edad.
Elimina la propiedad edad y muestra el resultado.*/

if(ejercicio==3){
    
    let animaliko = {
        nombre:"Victordiarrea",
        edad: 1000
    };

    delete animaliko.edad;
    console.log(animaliko);

}

/*4. Crea un objeto empresa que contenga dentro otro objeto direccion con propiedades calle, numero y ciudad. */

if(ejercicio==4){

    let empresa={

        nombre: "Kikoinmobiliaria",
        direccion:{
            calle:"Almendro",
            numero:17,
            ciudad:"Badajoz"
        },
    };


    console.log(empresa);
}

/*5. Escribe una función filtrarPorTipo(obj, tipo) que devuelva un nuevo objeto solo con las propiedades cuyo valor es del tipo indicado.*/

if(ejercicio==5){

    /*function filtrarPorTipo(obj,tipo){
        for( let recorrer in obj){
            if(recorrer.valueOf())
        }
    }*/

}