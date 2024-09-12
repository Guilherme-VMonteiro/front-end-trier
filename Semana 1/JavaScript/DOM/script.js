// function coletaEnvio(event) {
//     const inputNome = document.getElementById("nomeInput")
//     console.log(inputNome.value);

//     const labelTopo = document.getElementsByClassName("label-topo")
//     console.log(labelTopo);

//     const forms = document.getElementsByTagName("form")
//     console.log(forms);

//     const selector = document.querySelectorAll("div")
//     console.log(selector);

//     event.preventDefault();
// }

function manipulando(event) {
    const labelTopo = document.getElementsByClassName("label-topo")[0]
    labelTopo.textContent = "Hello World"
    labelTopo.innerHTML = '<a href="https://www.google.com/">TESTE</a>'
    labelTopo.style.backgroundColor = "pink"

    event.preventDefault();
}

function atualizaLabelInput(){
    const inputNome = document.getElementById("nomeInput")
    const labelInput = document.getElementById("label-input")
    labelInput.textContent = inputNome.value

    const divVazia = document.getElementById("divVazia");
    const novaLabel = document.createElement("label");

    novaLabel.textContent = inputNome.value

    divVazia.appendChild(novaLabel)
}