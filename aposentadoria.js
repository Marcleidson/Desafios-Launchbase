const nome = 'Maria'
const sexo = 'F'
const idade = 50
const contribuicao = 35

function calcular() {
    if (sexo == 'M' & contribuicao > 34 | sexo == 'F' & contribuicao > 34) {
        if (sexo == 'M' & (idade + contribuicao >= 95) | sexo == 'F' & (idade + contribuicao >= 85)) {
            console.log (`${nome}, você pode se aposentar.`)
        } else {
            console.log (`${nome}, você não pode se aposentar.`)
        }
    }   else {
        console.log (`${nome}, você não pode se aposentar.`)
    }
}

calcular()
