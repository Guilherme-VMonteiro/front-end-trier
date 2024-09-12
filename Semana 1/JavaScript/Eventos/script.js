function alerta(){
    alert("ALERTA")
}

function log(){
    console.log("LOG"); 
}

function coletaEnvio(event){
    event.preventDefault()
    console.log(event);
}