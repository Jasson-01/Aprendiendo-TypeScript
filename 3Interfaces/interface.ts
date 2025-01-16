interface Programador  {
    nombre: string,
    tecnologias: string[],
    tomarMate?: boolean | null 
}

let dev: Programador = {
    nombre: "Jasson",
    tecnologias: ["Reacr", "HTML", "CSS"],
    tomarMate: false
}

let dev2  = {
    nombre: "Aldayr",
    tecnologias: ["HTML","TypeScprit"],
    tomarMate: null,
    apellido: "Buenardo",
    recibido: false
}

function enviarCurriculum( programador : Programador){
    console.log(`Este Curriculum es de ${programador.tecnologias}`)
}

enviarCurriculum(dev2)
