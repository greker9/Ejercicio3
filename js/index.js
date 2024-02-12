function promedio() {
    let n1 = parseInt(document.getElementById('txtN1').value)
    let n2 = parseInt(document.getElementById('txtN2').value)
    let n3 = parseInt(document.getElementById('txtN3').value)

    if (isNaN(n1)) {
        alert('Por favor, ingrese todas las notas');
    
    } else if(isNaN(n2)) {
        alert('Por favor, ingrese todas las notas');
       
       
    } else if(isNaN(n3)) {
        alert('Por favor, ingrese todas las notas');
    } else {
        let promedio = (n1+n2+n3)/3;
        document.getElementById('txtResultado').value = promedio

        if (promedio >= 0 && promedio <= 59) {
            alert("Reprobado");
        } else if (promedio >= 60 && promedio <= 79) {
           alert("Bueno");
        } else if (promedio >= 80 && promedio <= 89) {
            alert("Muy bueno");
        } else if (promedio >= 90 && promedio <= 100) {
           alert("Sobresaliente");
        } else {
            alert("El promedio está fuera del rango válido");
        }


    }


}



function limpiar() {
    document.getElementById('txtN1').value = ''
    document.getElementById('txtN2').value = ''
    document.getElementById('txtN3').value = ''
    document.getElementById('txtResultado').value = ''
}