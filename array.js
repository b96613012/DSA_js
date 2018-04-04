'use strict';
((w)=>{
  console.log('array.js');
  //initial array
  var a = new Array();
  var b = new Array(1, 2, 3);
  var c = [];
  var d = ['a', 'b', 'c'];
  //example 1
  (()=>{
    var fibonacci = [0, 1, 1]; //用index 1開始 0不列入記算
    for(var i = 3; i < 20; i += 1){
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i -  1];
    }
    console.log(fibonacci);
  })();
  //adding element
  (()=>{
    var numbers = Array.apply(null, {length: 10}).map(Number.call, Number);
    console.log(numbers);
    //method 1
    numbers[numbers.length] = 10; //JavaScript array is mutable
    console.log('method 1')
    console.log(numbers);
    //method 2
    numbers.push(11);
    numbers.push(12, 13);
    console.log('method 2');
    console.log(numbers);
  })()
})(window)