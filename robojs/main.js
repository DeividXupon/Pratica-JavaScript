const estatistica = document.querySelectorAll("[data-estatistica]");
const botoes = document.querySelectorAll("[data-controle]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

let a = 0;

botoes.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        atualizaDados(evento.target.dataset.controle, evento.target.dataset.peca, evento.target.parentNode);
        modificador(evento.target.dataset.controle, evento.target.parentNode);
    })
})

function modificador(valor, controle){
    const inputPeca = controle.querySelector(".config__contador");
    if (parseInt(inputPeca.value) === 0 && valor === "-" || inputPeca.value === "99" && valor === "+"){
        inputPeca.valor = parseInt(inputPeca.valor);
    }else{
        if (valor === "+"){
            inputPeca.value = parseInt(inputPeca.value) + 1;
        } else{
            inputPeca.value = parseInt(inputPeca.value) - 1;
        }
    }  
}

function atualizaDados(valor, peca, controle){
    a = 0;
    const inputPeca = controle.querySelector(".config__contador");
    if (parseInt(inputPeca.value) === 0 && valor === "-" || inputPeca.value === "99" && valor === "+"){

    }else{
        estatistica.forEach( (elemento) => {
            if (valor == "+"){
                elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
            } else{
                elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
            }

            if(parseInt(elemento.textContent) >= 100){
                a += 1;
                if(a === 4){
                    const imagem = document.querySelector(".main__gifrobo");
                    imagem.setAttribute('src', './Assets/robo.gif');
                }
            }
        })
    }
}

