const usuarios = [
  { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
  { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
  { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
]

function listaUsuarios(usuarios) {
    for (let i = 0; i < usuarios.length; i++) {
        console.log (`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}.`)
    }
}

function checaUsuarioUsaCSS(usuarios) {
    for (let i = 0; i < usuarios.length; i++) {
        for (let k = 0; k < usuarios[i].tecnologias.length; k++) {
            if (usuarios[i].tecnologias[k] === 'CSS') {
                console.log (`O usuário ${usuarios[i].nome} trabalha com CSS`)
            }
        }

    }
}
console.log ('----------------------------------')
listaUsuarios(usuarios)
console.log ('----------------------------------')
checaUsuarioUsaCSS(usuarios)
console.log ('----------------------------------')
