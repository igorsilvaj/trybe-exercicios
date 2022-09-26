const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
];

function verifyGrades() {
    students.forEach((student, index) => {
        if (student.grade >= 60) {
            students[index].approved = 'Aprovado';
        } else {
            students[index].approved = 'Recuperação';
        }
    });
}

verifyGrades();

// console.log(students);

// [
//   { name: 'Maria', grade: 70, approved: 'Aprovado' },
//   { name: 'José', grade: 56, approved: 'Recuperação' },
//   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
//   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// ]


// const arr = ['a', 'b', 'c', 'd', 'e'];
// const printArr = (arr) => {
//     arr.forEach((item, index, array) => {
//         console.log(item);
//         console.log(index);
//         console.log(array);
//     })
// }
// printArr(arr);

const numbers = [19, 22, 30, 3, 45, 22, 15];

// const verifyEven = (number) => number % 2 === 0;
// const isEven = numbers.find(verifyEven);
// const isEven2 = numbers.find((number) => number % 2 === 0);

// console.log(isEven); // 30
// console.log(verifyEven(9)); // False
// console.log(verifyEven(14)); // True
// // Outra forma de ser realizada sem a necessidade de criar uma nova função.
// console.log(isEven2); // 30

const findDivisibleBy3And5 = (numbers) => {
    return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
}

console.log(findDivisibleBy3And5(numbers));

const names = ['João', 'Irene', 'Fernando', 'Maria'];
const findNameWithFiveLetters = (array) => array.find((name) => name.length === 5);
console.log(findNameWithFiveLetters(names));