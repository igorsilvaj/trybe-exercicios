function techList(techs, names) {
    let objTechs = {
        techs: [],
    };
    if (names !== '' && techs.length !== 0) {
        techs.sort();
        for (let index = 0; index < techs.length; index += 1) {
            objTechs.techs.push({ tech: techs[index], name: names });
        }
        return objTechs.techs;
    }
    return 'Vazio!';
}
module.exports = techList;
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));