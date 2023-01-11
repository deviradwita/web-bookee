// console.log('sudah terkoneksi')
let total = 0;

function changePage(prev, next, num) {
    // pilih elementnya
    // console.log(prev);
    if (num) {
        total += num;
    }
    if (next === 'finish' && (total > 100 || total < 1)) {
        next = 'failed';
    }
    // console.log(next);
    document.getElementById(prev).style.display = 'none';
    document.getElementById(next).style.display = 'flex';
    
    // console.log(total)
    // ketika sudah sampai finish maka result kita rubah isinya menjadi total
    if (next === 'finish') {
        document.getElementById('result').textContent = total;
    }
    if (next === 'home') {
        total = 0;
    }
}