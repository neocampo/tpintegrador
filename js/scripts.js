//defino valor de entrada
const precio=200

//defino valor de descuentos

var sincateg=0
var estudiante=80;
var trainee=50;
var junior=15;

//capturo datos de los imputs

var nombre=document.getElementById("nombre");
var apellido=document.getElementById("apellido");
var mail=document.getElementById("mail");
var cantidad=document.getElementById("cantidad");
var categoria=document.getElementById("categoria");

var x=document.getElementById("botonresumen");
x.addEventListener("click",resumen);


function resumen()
{        
    if (nombre.value==="")
    {
        nombre.className+=" is-invalid";
        document.getElementById("nonombre").innerHTML+="Escriba su Nombre";
    }
    else
    {        
        nombre.className = nombre.className.replace(" is-invalid","")        
    }

    
    if (apellido.value==="")
    {
        apellido.className+=" is-invalid";
        document.getElementById("noapellido").innerHTML+="Escriba su Apellido";
    }
    else
    {        
        apellido.className = apellido.className.replace(" is-invalid","")        
    }

    if (mail.value==="")
    {
        mail.className+=" is-invalid";
        document.getElementById("nomail").innerHTML+="Escriba su Correo";
    }
    else
    {        
        mail.className = mail.className.replace(" is-invalid","")        
    }

    if (cantidad.value==="")
    {
        cantidad.className+=" is-invalid";
        document.getElementById("nocantidad").innerHTML+="Coloque la Cantidad deseada";
    }
    else
    {        
        cantidad.className = cantidad.className.replace(" is-invalid","")        
    }


    if(nombre.value!=="" && apellido.value!=="" && mail.value!=="" && mail.value!=="" && cantidad.value!=="")
    {
        var lista=document.getElementById('categoria');
        var seleccion=lista.options[lista.selectedIndex].id;
        
        console.log("valor de cat: "+seleccion)
        console.log("valor de stringcat: "+String(seleccion))

        document.getElementById("total").innerHTML="Total a Pagar: $ "

        switch(seleccion)
       
         {
            case "sincateg":
                document.getElementById("total").innerHTML+=precio;
                break;

            case "estudiante":
                document.getElementById("total").innerHTML+=precio-(precio*estudiante/100);
                break;

            case "trainee":
                document.getElementById("total").innerHTML+=precio-(precio*trainee/100);
                break;

            case "junior":
                document.getElementById("total").innerHTML+=precio-(precio*junior/100);
                break;
         }
         
    }

    else
    {
        document.getElementById("total").innerHTML+="Bu";
    }

}