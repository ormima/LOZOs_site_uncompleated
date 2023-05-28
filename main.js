var wyn = document.querySelector('.wynik');
var l1 = document.querySelector('.number1');
var l2 = document.querySelector('.number2');
var obl = document.querySelector('.oblicz');
var res = document.querySelector('.reset');

obl.addEventListener('click', () => {

    const a = parseFloat(l1.value);
    const h = parseFloat(l2.value);

    //console.log(a, h);

    const pole = (a*h)/2;

    wyn.innerText = `Wynik to: ${pole}`;
})

res.addEventListener('click', () => {

    location.reload();
})