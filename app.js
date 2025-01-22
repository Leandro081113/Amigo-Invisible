/*
Fucionalidades:
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.



 */
let listaAmigos = [];

function agregarAmigo() {
    // Obtener el valor del campo de texto
    let amigos = document.getElementById("amigo");
    let nombreAmigo = amigos.value;
    
    // validacion de entrada
    if (nombreAmigo === "") {
        alert("Ingrese un nombre válido");
        
    }
    else

    // Agregar el nombre a la lista
    listaAmigos.push(nombreAmigo);

    // Mostrar la lista en la consola
    console.log(listaAmigos);

    nombresIngresados();

    // Limpiar el campo de texto
    amigos.value = "";
}

//Funcion para mostrar los nombres ingresados hasta el momento por pantalla (html)
function nombresIngresados(){
    let listaHtml = document.getElementById("listaAmigos");

    //limpiar antes de actualizar
    listaHtml.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        const li = document.createElement("li");  // Crear un nuevo <li>
        li.textContent = listaAmigos[i];  // Asignar el nombre del amigo al <li>
        listaHtml.appendChild(li);  // Agregar el <li> al <ul>
    }

}

//funcion sortear amigos 
function sortearAmigo() {
    if (listaAmigos === 0){ 
        alert("La lista de amigos esta vacia")
    }
    else{
    
     let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = "El amigo secreto es: " + amigoSorteado;
    }
        
}