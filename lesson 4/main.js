// const blocks = document.getElementsByClassName('block');
// // console.log(blocks);
//
// const block = document.getElementById('block3');
// // console.log(block.classList);
//
// // block3.classList.add('changeClass');
// // block3.classList.remove('changeClass');
// //
// // block3.onclick = () => {
// //     block3.classList.toggle('active')
// // };
// // // console.log(block3.classList);

const button = document.getElementById('button');
const input = document.getElementById('input');
button.onclick = () => {
    const div = document.createElement('div');
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'delete';
    deleteButton.onclick = (e)=>{
        console.log(e)
    };

    div.setAttribute('class', 'block');
    div.innerText = input.value;

    div.append(deleteButton);
    document.body.append(div)
};
