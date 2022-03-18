var bestPeople = [
    {
        name: 'Nazira',
        salary: 34600
    },
    {
        name: 'Meerim',
        salary: 38000
    },
    {
        name: 'Firdavs',
        salary: 47263
    },
    {
        name: 'Nurdin',
        salary: 15000
    },
    {
        name: 'Temirlan',
        salary: 58456
    },
    {
        name: 'Semen',
        salary: 56654
    },
    {
        name: 'Syimyk',
        salary: 76543
    },
    {
        name: 'Luisa',
        salary: 59452
    },
    {
        name: 'Kutman',
        salary: 63213
    },
    {
        name: 'Luisa',
        salary: 59452
    },
    {
        name: 'Chyngyzhan',
        salary: 23459
    },
    {
        name: 'Aliya',
        salary: 45697
    }
];
// First
let sort = bestPeople.filter((sort)=> sort.name[0]==='S');
console.log(sort);
// Second
let dollar = bestPeople.map (function ({salary}) {
    return salary / 95;
});
console.log(dollar);
// Third
let resut = bestPeople.reduce((accumulator, sum) => accumulator + sum.salary, 0);
console.log(resut);