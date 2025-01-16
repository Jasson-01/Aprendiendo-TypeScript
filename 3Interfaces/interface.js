var dev = {
    nombre: "Jasson",
    tecnologias: ["Reacr", "HTML", "CSS"],
    tomarMate: false
};
var dev2 = {
    nombre: "Aldayr",
    tecnologias: ["HTML", "TypeScprit"],
    tomarMate: null,
    apellido: "Buenardo",
    recibido: false
};
function enviarCurriculum(programador) {
    console.log("Este Curriculum es de ".concat(programador.tecnologias));
}
enviarCurriculum(dev2);
