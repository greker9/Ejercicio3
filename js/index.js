
//formula 1 final
function metros() {
    let n1 = parseInt(document.getElementById('txtN1').value)
   


    if (isNaN(n1)) {
        alert('Por favor, no deje campos en blanco');
    
              
    } else {
        let metros = (n1*1000);
        document.getElementById('txtResultado').value = metros

       
    }
}

    function limpiar() {
        document.getElementById('txtN1').value = ''
       
        document.getElementById('txtResultado').value = ''
    }



    //formula 1 final

//formula 2 incio




function centimetros() {
    let n2 = parseInt(document.getElementById('txtN2').value)
   


    if (isNaN(n2)) {
        alert('Por favor, no deje campos en blanco');
    
              
    } else {
        let centimetros = (n2*100);
        document.getElementById('txtResultado2').value = centimetros

       
    }


}


function limpiar2() {
    document.getElementById('txtN2').value = ''
   
    document.getElementById('txtResultado2').value = ''
}
//formula 2 final



//formula 3 incio




function pulgadas() {
    let n3 = parseInt(document.getElementById('txtN3').value)
   


    if (isNaN(n3)) {
        alert('Por favor, no deje campos en blanco');
    
              
    } else {
        let pulgadas = (n3*12);
        document.getElementById('txtResultado3').value = pulgadas

       
    }


}


function limpiar3() {
    document.getElementById('txtN3').value = ''
   
    document.getElementById('txtResultado3').value = ''
}
//formula 3 final



//formula 3 incio




function yardas() {
    let n4 = parseInt(document.getElementById('txtN4').value)
   


    if (isNaN(n4)) {
        alert('Por favor, no deje campos en blanco');
    
              
    } else {
        let yardas = (n4*12);
        document.getElementById('txtResultado4').value = yardas

       
    }


}


function limpiar4() {
    document.getElementById('txtN4').value = ''
   
    document.getElementById('txtResultado4').value = ''
}
//formula 3 final
