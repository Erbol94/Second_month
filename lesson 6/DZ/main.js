// //First
// let mass = [1,2,3,4,5];
// let mass2 = [6,7,8,9,10];
// let mass3 = [11,12,13,14,15];
// let mass4 = [16,17,18,19,20];
// let mass5 = [21,22,23,24,25];
// let allMass = [...mass, ...mass2, ...mass3, ...mass4, ...mass5]; //второй способ
// // console.log(`${mass},${mass2},${mass3},${mass4},${mass5}`); //первый способ
// console.log(allMass);

//Second
//
// const obj = {
//     first_name: 'Erbol',
//     last_name: 'Shakeev',
//     full_name: 'Shakeev Erbol',
//     age: 27,
//     location: 'Bishkek'
// };
// const obj2 = {
//     ...obj,
//     email: 'shakeeverbol.com',
//     phone: +996553125133,
//     country: 'Kyrgyzstan'
// };
// console.log(obj2);

//Third

const list = [];

const addButton = document.getElementById('button');
const input = document.getElementById('input');

function deleteObj(id) {
    const index = list.findIndex(t => t.id === id);
    list.splice(index, 1);
    render()
}

function render() {
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'list')
    for (let i = 0; i < list.length; i++){
        const div = document.createElement('div');
        div.setAttribute('class','todoBlock');

        const p = document.createElement('p');
        p.innerText = list[i].text;
        div.append(p);

        const buttons = document.createElement('div');
        buttons.setAttribute('class', 'actions');

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'delete');
        deleteButton.onclick = () => {
            deleteObj(list[i].id)
        };
        deleteButton.innerText = 'Delete';
        buttons.append(deleteButton);
        div.append(buttons);
        mainDiv.append(div);

    }
    const form = document.querySelector('.form');
    document.querySelector('.list').remove();
    form.append(mainDiv);
}

addButton.onclick = function () {
    const obj = {
        id: list.length,
        text: input.value + ' hello'
    };
    console.log(list);
    list.push(obj);
    render()
};

