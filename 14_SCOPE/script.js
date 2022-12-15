// let, var i const
let a = 5;
var b = 10;
console.log(a, b);

a++;
b++;
console.log(a, b);

a = 5;
var b = 10;
console.log(a, b);

////////////////

let x = 10;
var y = 20;

if(true) {
    let x = 15;
    var y = 25;
    console.log(x, y); // 15, 25
    if(true) {
        console.log(x, y); // 15, 25
        let x = 17;
        console.log(x, y); // 17, 25
    }
    console.log(x, y); // 15, 25
}

console.log(x, y);

////////////////

