console.log(2 == 2);
console.log(2 != 3);
console.log(2 === '2');

console.clear();
const obj1 = {
    name : 'js',
};
const obj2 = {
    name : 'js',
};

console.log(obj1 == obj2);
console.log(obj1 === obj2);
console.log(obj1.name == obj2.name);

let obj3 = obj2;
console.log(obj3 == obj2);
console.log(obj3 === obj2);