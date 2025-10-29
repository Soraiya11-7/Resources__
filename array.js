const numbers = [12, 22, 54, 64];
const name = ['Abul', 'Babul','Dabul'];
const passed = [true, false ,true];
const mixedArray = [12, 'Abul', true, 55.7690];
// console.log(mixedArray);
// array index (position of element) starting from always 0; first element array[0]

const number = [12, 22, 54, 64, 77];
// array total elements = array.length
// console.log(number.length);

// first element and last element
console.log('First element is:', number[0] + "; Last element is: ", number[number.length-1] );

// set or update element value by index
number[1] = 99;
// console.log(number);


//****************************************** */
// push (add elements in the last of the array)................
number.push(1000);
number.push(97, 11);
// console.log(number);

// unshift (add elements in the first of the array)................
number.unshift(11111111);
number.unshift(7,77,777);
// console.log(number);

// pop (removes the last elements from the array)................
const n1 = number.pop();
const n2 =  number.pop();

// console.log(number);
// console.log(n1,n2);

// shift (removes the first elements from the array)................
number.shift()
// console.log(number);

//**************arrayName.include('element')[case sensitive] to check the element is exist or not in that array and return the boolean result */
console.log(number.includes(1000));


// arrayName.indexOf(element) if element is exist then return the position(index of that element) , index -1 means not exist that element
console.log(number.indexOf(11));

// To check array or not using Array.isArray(arrayName)
console.log(Array.isArray(number));
const age = 15;
const food = "Orange Apple";
const num = [];
// console.log(Array.isArray(age));
// console.log(Array.isArray(food));
// console.log(Array.isArray(num));
// console.log(Array.isArray('[]'));

// join() method returns an array as a string, does not change the original array, any separator can be specified (default is comma(,))
/* console.log(number.join());
console.log(number.join('+'));
console.log(number.join('-')); */

// array1.concat(array2) two array add and returns a one array
/* console.log(number.concat(name)); */

// slice() returns selected elements in an array, as a new array
// slice(2,5) new array elements are index 2 to index 4 (index 5 value is not included)
/* console.log(number.slice(2,6)); */

// ************************************
// splice()  adds and/or removes array elements and overwrites the original array


// console.log(number);
// console.log(number.splice(5,2)); //delete_count is 2, so two elements will be removed starting from index 5 that means (5,6 elements are removed from the array)

// ***********************************
// console.log(number);
// console.log(number.splice(2)); //starts removing elements from index 2




// *****************Array More*****................
/*
FOR OF----> ARRAY LOOP
FOR IN ----> OBJECT LOOP 
 */
// FOR OF 
for(const n of name){
    // console.log(n);
}

// FOR LOOP
for(let i=0; i<name.length;i++){
    // console.log(name[i]);
}
let j=0;
while(j<name.length){
    console.log(name[j]);
    j++;
}
// Reverse..... arrayName.reverse()
console.log(number);
// const reversed = number.reverse();
// console.log(reversed);

// reverse using for of
const rev = [];
for(const n of number){
    // console.log(n);
    rev.unshift(n);

}
console.log(rev);


// *********Sort**********
// ascending................
const xyz = [4,5,9,3,1];
// console.log(xyz.sort());

const xyz2 = [4,5,9,30,1];
// console.log(...xyz2.sort(function(a,b){return a-b }));
// console.log(xyz2.sort(function(a,b){return b-a }));


// 
var names = ['Tom', 'Tim', 'Tin', 'Tik'];
var join = '';
for(const n of names){
    join += n;
    // console.log(join);

}

// 
const statement = 'I am a hard working person'
const reversedStatement = console.log(statement.split(' ').reverse().join(' '));
// console.log();