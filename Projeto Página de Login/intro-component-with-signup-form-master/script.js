function enviar(){
    let txtNome = document.getElementById("firstName");
    let txtSobrenome = document.getElementById("lastName");
    let txtEmail = document.getElementById("email")
    let txtPassword = document.getElementById("password")
    let submit = true;

    if(txtNome.value === ""){
        let label = document.getElementById("lblFirstName");
        alertarInputVazio(label, txtNome);
        submit = false;
    }
    if(txtSobrenome.value === ""){
        let label = document.getElementById("lblLastName");
        alertarInputVazio(label, txtSobrenome);
        submit = false;
    }
    if(txtEmail.value === ""){
        let label = document.getElementById("lblEmail");
        alertarInputVazio(label, txtEmail);
        submit = false;
    }
    if(!validarEmail(txtEmail.value)){
        txtEmail.value = ""
        txtEmail.style.border = "2px solid red";
        txtEmail.setAttribute("placeholder", "email@example.com");
        txtEmail.setAttribute("class", "red");
        submit = false;
    }
    if(txtPassword.value === ""){
        let label = document.getElementById("lblPassword");
        alertarInputVazio(label, txtPassword);
        submit = false;
    }

    if(submit){
        let form = document.querySelector("form");
        form.setAttribute("onsubmit", "return true");
        form.submit();
    }
}

function alertarInputVazio(label, input){
    label.style.display = "block"
    input.style.border = "2px solid red"
    input.setAttribute("placeholder", "");
}

function validarEmail(email){
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email);
}