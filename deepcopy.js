// example1
let X=[1,2,3,4,5]
z ={...X}
console.log(z)
// example2
let fruits2 = [
     {name: "Apple",weight:"1Kg"},{price:280},
     {name: "Orange",weight:"1Kg"},{price:180},
    {name: "Pomegranate",weight:"1Kg"},{price:250}
 ]
 let fruits3=fruits2;
 console.log(fruits3);
 let out2=fruits2.map((val)=>{
     return {...val}
 })
 
 console.log(out2);

 let arr = [1, 2, 3];
let arr2 = [4, 5];
 
arr = [...arr, ...arr2];
console.log(arr); // [ 1, 2, 3, 4, 5 ]




// example3
let item1 = ['a', 'b', 'c'];
let item2 = [...arr];
 
console.log(item1); 
// [ 'a', 'b', 'c' ]
 
arr2.push('d'); 

 
console.log(item2); 
// [ 'a', 'b', 'c', 'd' ]
console.log(item1);
 // [ 'a', 'b', 'c' ]
 