// variables
const rangeInput = document.getElementById('number');
const rangeValue = document.getElementById('number-value');
const solucion = document.getElementById('solucion');
const run = document.getElementById('run');
const frase = document.getElementById('frase');
const alfabeto = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789áéíóúÁÉÍÓÚ @#$%^&*()_+|~`-={}[]:;'<>?,./";

// eventos
rangeInput.addEventListener('input', () => {
    rangeValue.textContent = rangeInput.value;
});

run.addEventListener('click', (e) => {
    e.preventDefault();
    let texto = frase.value;
    let salto = parseInt(rangeInput.value);
    solucion.textContent = cifrar(texto, salto);
});

// funcion de cifrado
function cifrar(cadena, paso) {
    let resultado = "";

    for (let i = 0; i < cadena.length; i++) {
        let letra = cadena[i];
        let pos = alfabeto.indexOf(letra);

        if (pos !== -1) {
            let nuevaPos = (pos + paso) % alfabeto.length;
            resultado += alfabeto[nuevaPos];
        } else {
            resultado += letra;
        }
    }
    return resultado;
}