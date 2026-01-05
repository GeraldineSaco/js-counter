function add(){    
    //Escribir tu código que aumenta
    const nroCount = document.getElementById("number");
    let currentNumber = parseInt(nroCount.textContent);
    nroCount.textContent = currentNumber + 1;
}

function reset(){
    //Escribir tu código que hace un reset a 0
    const nroCount = document.getElementById("number");
    nroCount.textContent = 0;
}

function decrease(){
    //Escribir tu código que resta
    const nroCount = document.getElementById("number");
    let currentNumber = parseInt(nroCount.textContent);
    if (nroCount.textContent > 0){
        nroCount.textContent = currentNumber - 1;
    }
};

export {add, reset, decrease}