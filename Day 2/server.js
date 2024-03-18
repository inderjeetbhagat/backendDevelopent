// function add(a, b) {
//     return a + b;
// }

// var addition = function (a, b) {
//     return  a +b;
// }
//  let result = add(2,155);
//  console.log(result);
//  console.log(addition(15,89));


//  // var add = (a, b) => a+b;

//  (function (a, b) {
//     console.log("Auto run function");
// })();

// function callBack(){
//     console.log("Inder is calling a callback function");
// }

// const add = function(a,b,callBack){
//     var result = a + b;
//     console.log("Result" +result);
//     callBack();
// }

// add(3,4,callBack);

const add = function(a,b,callBack){
    var result = a + b;
    console.log("Result" +result);
    callBack();
}

add(2,3, () => {
    console.log("Inder is calling a callback function");
})