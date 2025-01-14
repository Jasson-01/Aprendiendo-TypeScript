var interMiami = 11;
var fcDallas = 11;
var messi = 1;
var juegaMessi = true;
var palabras = "Me emocioné al verlo a Messi";
function jugar(equipo1, equipo2, juegaMessi) {
    var motivo = "";
    if (juegaMessi) {
        equipo1 += messi;
        motivo = " por que juega Messi";
    }
    if (equipo1 > equipo2)
        console.log("Gana Inter Miami".concat(motivo));
    if (equipo1 == equipo2)
        console.log("Empatan");
    if (equipo1 < equipo2)
        console.log("Gana FC Dallas");
}
jugar(interMiami, fcDallas, juegaMessi);
