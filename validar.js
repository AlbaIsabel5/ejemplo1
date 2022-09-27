function validar () 
{
    var UsuarioIngresado=document.getElementById("textusuario").value;
    var PasswordIngresado=document.getElementById("textpass").value;

    


    if (UsuarioIngresado=="INED" && PasswordIngresado=="123456") 
    {
        alert("Bienvenido,sus datos son correctos");
        window.open("https://youtu.be/1GS7wxWPaxc");    
    }

    else{
        alert ("no son correctos sus datos");
        window.open("index.html");
    }


    
}