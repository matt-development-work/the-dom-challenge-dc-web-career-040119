// var countUp = setInterval(number, 1000);
//
// function number() {
//   var x = 0;
//   x++;
// }

let counter = 0;
let countUp = setInterval(function(){
  document.querySelector('#counter').innerHTML = counter++;
}, 1000);
