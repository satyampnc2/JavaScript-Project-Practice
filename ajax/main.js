// const fetch = require('node-fetch')
console.log("start");
// function fun1(name, callback) {
//     setTimeout(()=>{
//         console.log('my name is '+name);
//         callback(name);
//     },3000);
// }  
// fun1('satyam',(name) => {
//     console.log('callback called after 3 sec with name '+name);
// })

// fetch('./text.txt')
// .then(res => res.text())
// .then(res=> console.log(res));
function fun1(res){
    return res.text();
}
async function fun() {
    var res = await fetch('text.txt');
    res = await fun1(res);
    console.log(res);
}

fun();
console.log('end');