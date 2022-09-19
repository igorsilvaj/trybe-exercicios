function hydrate(param) {
    let resultado = 0;
    let regex = /\d+/g;
    let matches = param.match(regex);
    matches = matches.map(Number);
    for (let index = 0; index < matches.length; index += 1) {
        resultado += matches[index];
    }
    if (resultado > 1) {
        resultado = `${resultado} copos de água`;
    } else {
        resultado = `${resultado} copo de água`;
    }
    return resultado;
}
module.exports = hydrate;