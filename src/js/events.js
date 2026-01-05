import {add, reset, decrease} from './counter.js'

//Aquí estarán los eventos que ejecutarán cada una de las funciones realizadas
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const addBtn = document.getElementById("add");

decreaseBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);
addBtn.addEventListener("click", add);
