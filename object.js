// object --->non-primitive(mixed type values)
// Declare an object
const bottle = {
    color: 'white',
    brand: 'RFL',
    price: 100,
    isClean: true,
    useingTime: 2,
    shape: ['square','round','triangle'],
    'fav color': ['red','green','white'],
    unique: {
        color: 'yellow',
        duration: {
            time: 7
        }
    }
}
bottle.quality = 'good';
// console.log(bottle);
// .................
const pen = new Object();
// console.log(pen);

// ...........
var PP = {
    name: 'abc'
    // age: 24
};
const pencil = Object.create(PP);
// console.log(pencil);
// for in.........................
for(const p in bottle){
    // console.log(p); //Object.keys(bottle)
    // console.log(bottle[p]);
}

// for of [keys...]
const k = Object.keys(bottle);
console.log(k.length);
// console.log(k);

for(const i of k){
    console.log(i, ':', bottle[i]);
}

bottle.shape[2] = 'circle';
bottle.unique.duration.time = 77;
// console.log(bottle.unique.duration.time);

// delete property
delete bottle.useingTime;

// console.log(bottle);
// console.log(bottle);

// *...............DOT Notation(dot diye obj er property er value access kora)
// property er moddhe space, colon or others kichu thakle access korte pare na
// console.log(bottle.price);
const value = bottle.price;
// console.log(value);

// ***Third Bracket diye access kora ....Bracket Notation
// console.log(bottle['fav color']);
// console.log(bottle['brand']);
const brandName = bottle['brand'];
// console.log(brandName);

// reassign value is possible
bottle.price = 120;
bottle['useingTime'] = 3;
// console.log(bottle);

// property assign..
const keyName = 'color';
// console.log(bottle[keyName]);
bottle[keyName] = 'displayColor';
// console.log(bottle);


// Property Name display using keys
const keys = Object.keys(bottle);
// console.log(keys);

// display property values
const values = Object.values(bottle);
// console.log(values);
