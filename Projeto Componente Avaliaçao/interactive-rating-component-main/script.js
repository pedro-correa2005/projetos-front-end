function enviar(){
    let pergunta = document.getElementsByClassName("pergunta")[0];
    let resposta = document.getElementsByClassName("resposta")[0];
    let rating = document.querySelector('input[name="rating"]:checked');
    let p = document.querySelector('p.rating')

    if(rating){
        p.innerHTML = "You selected "+ rating.value +" out of 5"
        console.log(rating.value)
        pergunta.style.display = "none";
        resposta.style.display = "flex";
    }

}