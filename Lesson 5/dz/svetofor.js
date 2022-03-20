// let svetofor = prompt('Какой цвет?');
// const red = document.querySelector('.red');
// const green = document.querySelector('.green');
// const yellow = document.querySelector('.yellow');
//
// switch (svetofor) {
//     case 'red':
//         red.style.background =  'red'
//
//         break;
//     case 'green':
//         green.style.background = 'green'
//
//         break;
//     case 'yellow':
//         yellow.style.background = 'yellow'
//
//         break;
// }

// const red = document.querySelector('.red');
// const yellow = document.querySelector('.yellow')
// const green = document.querySelector('.green')
//
//
// red.addEventListener('click', () => {
//     red.style.background = 'red'
//     yellow.style.background = ''
//     green.style.background = ''
// })
// yellow.addEventListener('click', () => {
//     yellow.style.background = 'yellow'
//     red.style.background = ''
//     green.style.background = ''
// })
// green.addEventListener('click', () => {
//     green.style.background = 'green'
//     red.style.background = ''
//     yellow.style.background = ''
// })

const svetofor = prompt('Введите цвет, пример: Red ');
switch (svetofor) {
    case 'red':
        document.querySelector('.red').style.backgroundColor = svetofor;
        console.log('stop!');
        break;
    case 'yellow':
        document.querySelector('.yellow').style.backgroundColor = svetofor;
        console.log('wait!');
        break;
    case 'green':
        document.querySelector('.green').style.backgroundColor = svetofor;
        console.log('Go!');
        break;
    default:
        console.log('Error');
        break;
}