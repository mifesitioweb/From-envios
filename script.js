const evento = document.getElementById('send')
const enviarFormulario =() => {
        let nombre = document.getElementById('nombres').value;
        let marca = document.getElementById('marca').value;
        let redes = document.getElementById('redes').value;
        let info = document.getElementById('info').value;
        let direcciones = document.getElementById('direcciones').value;
        let telefono = document.getElementById('telefono').value;
        let entrega = document.getElementById('entrega').value;
        let entregados = document.getElementById('entregados').value;

        let mensaje = document.getElementById('mensaje').value;
        let numero= 5491140949936;
        
var win= window.open(`https://wa.me/${numero}?text=
Hola%20soy%20*${nombre}*%20Estos%20son%20mi%20datos%20para%20mi%20tarjetas,%20Gracias.%20%E2%98%BA%EF%B8%8F%20%0A
*Destinatario:*%20${marca}%0A
*Cuit:*%20${redes}%0A
*Teléfono:*%20${info}%0A
*Domicilio:*%20${direcciones}%0A
*Código:*%20${telefono}%0A
*Transporte  %20de%20entrega:*%20${entrega},%0A
*Transporte  %20de%20entrega:*%20${entregados},%0A
*Provincia:*%20${mensaje}`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)