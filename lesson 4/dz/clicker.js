const plus = document.getElementById('plus');
const count = document.getElementById('count');
const minus = document.getElementById('minus');
const reset = document.getElementById('reset');
let num = 0;
plus.onclick = () => {
    num ++;
    count.innerText = num.toString();
};
console.log(num);
minus.onclick = () => {
    num --;
    if (num < 1){
        num = 0;
    }
    count.innerText = num.toString();
};
reset.onclick = () => {
    num = 0;
    count.innerText = num.toString();
};
