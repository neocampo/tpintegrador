//defino valor de entrada
const precio=200

//defino valor de descuentos

let sincateg=0
let estudiante=80;
let trainee=50;
let junior=15;

//capturo datos de los imputs

let nombre=document.getElementById("nombre");
let apellido=document.getElementById("apellido");
let mail=document.getElementById("mail");
let cantidad=document.getElementById("cantidad");
let categoria=document.getElementById("categoria");
let sinselec=document.getElementById("sinselec");

let x=document.getElementById("botonresumen");
x.addEventListener("click",resumen);


function resumen()
{     
    limpiarElementos()
    let puedoCalcular = true
    
    if (nombre.value==="")
    {
        nombre.classList.add("is-invalid");    
        document.getElementById("nonombre").innerHTML="Escriba su Nombre";
        puedoCalcular = false
    }

    
    if (apellido.value==="")
    {
        apellido.classList.add("is-invalid");
        document.getElementById("noapellido").innerHTML="Escriba su Apellido";
        puedoCalcular = false
    }

    if (mail.value==="")
    {
        mail.classList.add("is-invalid");
        document.getElementById("nomail").innerHTML="Escriba su Correo";
        puedoCalcular = false
    }
    else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.value)))
    {
        mail.classList.add("is-invalid");
        document.getElementById("nomail").innerHTML="Escriba un Correo Válido";
        puedoCalcular = false

    }

   
    if ((!Number.isInteger(+cantidad.value)) || (cantidad.value<=0))
    {
        cantidad.classList.add("is-invalid");
        document.getElementById("nocantidad").innerHTML="Coloque una Cantidad válida";
        puedoCalcular = false
    }
   
    if (categoria.value==="-Sin Selección-")
    {
        categoria.classList.add("is-invalid");
        document.getElementById("nocateg").innerHTML="Seleccione su Categoría";
        puedoCalcular = false
    }
   
      if(puedoCalcular)
    {
        let lista=document.getElementById('categoria');
        let seleccion=lista.options[lista.selectedIndex].id;

        let preciototal=precio*~~cantidad.value
                
        document.getElementById("total").innerHTML="Total a Pagar: $ "

        switch(seleccion)
       
         {
            case "sincateg":
                document.getElementById("total").innerHTML+=preciototal;
                break;

            case "estudiante":
                document.getElementById("total").innerHTML+=preciototal-(preciototal*estudiante/100);
                break;

            case "trainee":
                document.getElementById("total").innerHTML+=preciototal-(preciototal*trainee/100);
                break;

            case "junior":
                document.getElementById("total").innerHTML+=preciototal-(preciototal*junior/100);
                break;
         }
         
    }

   
}

function limpiarElementos()
{
    nombre.classList.remove("is-invalid");
    apellido.classList.remove("is-invalid");
    mail.classList.remove("is-invalid");
    cantidad.classList.remove("is-invalid");
    categoria.classList.remove("is-invalid");
    document.getElementById("total").innerHTML="Total a Pagar: $";

}

let y=document.getElementById("botonborrar");
y.addEventListener("click",borrarInputs);

function borrarInputs()
{
    let inputs=document.getElementsByClassName("borrar");

    // for (let i=0; i<inputs.length; i++){
    //     inputs[i].value=""
    // }
        
    for(const item of inputs){        
        item.value=""
    }
    document.getElementById("total").innerHTML="Total a Pagar: $"
}


