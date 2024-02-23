let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; //Almacena cada numero del 1 al 10 que va saliendo para que no se repita en el juego
let numeroMaximo = 10;

console.log(numeroSecreto);

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto';


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;  
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroSecreto); Esta linea la ejecutamos si queremos ver por consola el valor de la variable numeroDeUsuario  
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1 ? 'vez' : 'veces')}`); // operador terminario
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{ 
        // El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto){ 
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
} // dentro de la funcion verificarIntento() estamos otra funcion asignarTextoElemento()

function limpiarCaja() {
   document.querySelector('#valorUsuario').value = ''; 
}

function generarNumeroSecreto() {
    let = numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 

    console.log(numeroGenerado); 
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros salieron en el juego
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles')
    }else {
        // Si el numero generado esta incluido en la lista, seguimos una instruccion o si no hacemos otra (si no esta en la lista se puede jugar"). 
        if (listaNumerosSorteados.includes(numeroGenerado)){  //".includes" recorre todo el arreglo "listaNumerosSorteados" y verifica si el numero que salio ya esta dentro de la lista
        // y el recibe como parametro el numero a chequear osea "numeroGenerado"   
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado); // ".push" incluye en "listaNumerosSorteados" ese "numeroGenerado"
            return numeroGenerado;
        }
    }    
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto¡');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

    
}

condicionesIniciales();

