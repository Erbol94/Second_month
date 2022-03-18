let num = 0;
const plus = () => {
    const count = document.getElementById('count');
    num ++;
    count.textContent = num.toString()
}
plus()