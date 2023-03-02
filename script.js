//1

function Numb(a,b,c){
return (a-b)/c;
}
console.log(Numb(10,3,3));

//2
function Sqr(d){
console.log('Куб числа:'+ Math.pow(d, 3));
console.log('Куб числа:'+ Math.pow(d, 2));
}
console.log(Sqr(10));

//3
function Min_Max(e,f) {
if(e < f){
    console.log('Меньшее число: ' + e + ' Большее число: ' + f);
} else if(e>f){
    console.log('Меньшее число: ' + f + ' Большее число: ' + e);
} else {
    console.log('Числа равны');
}
}
Min_Max(5,7);

//4

function Arr() {
let arr = [];
let x;
let y;
x = +prompt('Введите начальное число массива');
y = +prompt('Введите конечное число массива');
for (let i = 0; i < (y - x) + 1; i++) {
    arr.push(x + i);
}
    return arr;
}
Arrshow();
Arr();3

function Arrshow(){
    console.log(Arr);
}

//5

function isEven(l) {

if(l % 2 == 0) {
    return console.log(true); 
} else {
    return console.log(false);
}
}
isEven(+prompt('Введите число'));

//6
let ArR = [1,3,45,536,64,56,475,7,9,7];
let Even = [];
function isEvenArr(v){
    for (let i = 0;i < v.length;i++){
        if(ArR[i] % 2 == 0) {
        Even.push(ArR[i]);  
    }
}
console.log(Even);
}
isEvenArr(ArR);

//13
function ValidMail(mail){
    if(/^[a-z\.0-9]{2,}@[a-z\.0-9_-]*\.[a-z]{2,11}$/.test(mail) == true){
        console.log('Ваш email прошел валидацию!');
    } else {
        console.log('Ваш email не прошел валидацию!');
        }
    }
ValidMail(prompt("Введите ваш email"));