let pontos = 0;

function responder(botao, correta){

    const questao = botao.parentElement;

    if(questao.classList.contains("respondida")){
        return;
    }

    questao.classList.add("respondida");

    if(correta){
        pontos++;
        botao.style.background = "green";
    }else{
        botao.style.background = "red";
    }

    const total = document.querySelectorAll(".question").length;

    const respondidas =
        document.querySelectorAll(".respondida").length;

    if(respondidas === total){

        document.getElementById("resultado").innerHTML =
            `Você acertou ${pontos} de ${total} perguntas! 💜`;
    }
}