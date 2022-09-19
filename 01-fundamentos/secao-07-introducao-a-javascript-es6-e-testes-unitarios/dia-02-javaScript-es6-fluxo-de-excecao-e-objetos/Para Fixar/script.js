const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        throw new Error('Os valores devem ser numéricos');
    }
};

const sum = (value1, value2) => {
    try {
        verifyIsNumber(value1, value2);
        return value1 + value2;
    } catch (error) {
        return error.message;
    }
};

console.log(sum(2, '3'));


const coolestTvShow = {
    name: 'BoJack Horseman',
    genre: 'adult animation',
    createdBy: 'Raphael Bob-Waksberg',
    favoriteCharacter: 'Princess Carolyn',
    quote: 'Princess Carolyn always lands on her feet.',
    seasons: 6,
};

// for (const property in coolestTvShow) {
//     console.log(property);
// }
// console.log(Object.keys(coolestTvShow));

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
};

const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    let skillList = [];
    for (const index in arrayOfSkills) {
        list.push(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
    return skillList;
};

// console.table(listSkills(student1));

// console.log('Estudante 2');
// listSkills(student2);


// for (const property in coolestTvShow) {
//     console.log(coolestTvShow[property]);
// }
console.log(Object.values(coolestTvShow));

const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
};

const listSkillsValuesWithFor = (student) => {
    const skills = [];
    for (skill in student) {
        skills.push(student[skill]);
    }
    return skills;
};

const listSkillsValuesWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(`Sem Object.values [${listSkillsValuesWithFor(student)}]`);

// Com Object.values
console.log(`Com Object.values [${listSkillsValuesWithValues(student)}]`);

console.log(`Object.entries [${Object.entries(coolestTvShow)}]`);

const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);
for (index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
};

console.log(Object.keys(países)); // Array com todas as chaves
console.log(Object.values(países)); // Array com todas os valores das chaves
console.log(Object.entries(países)); // Array de arrays com todos as chaves e valores

const person = {
    name: 'Roberto',
};

const lastName = {
    lastName: 'Silva',
};

const newPerson = Object.assign({}, person, lastName); // primeiro arg é o objeto que vai mesclar os outros os seguintes terão as props adicionadas a ele. Se tiver prop com mesmo nome ele substitui o valor;
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);



const clone = Object.assign(person, lastName);
console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person); // { name: 'Roberto', lastName: 'Silva' }

console.log(person.name);
let data1 = [1, 2, 3];
console.log(data1.length);

const top3Albums = {
    1: 'Nightfall in Middle-Earth',
    2: 'Imaginations from the Other Side',
    3: 'Somewhere Far Beyond',
};
console.log(Object.entries(top3Albums));

const getDayName = (number) => {
    const dayNumber = number - 1;
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    return days[dayNumber];
};

const printDayname = (dayNumber) => {
    console.log(getDayName(dayNumber));
};

printDayname(8);

const band = {
    name: 'Blind Guardian',
    formedIn: 1986,
    lastAlbum: 'Beyond the Red Mirror',
};

const info = {
    genre: 'Power Metal',
    lastAlbum: 'Twilight Orchestra: Legacy of the Dark Lands',
};

const newObj = Object.assign({}, band, info);

console.log(band)
console.log(info)
console.log(newObj)