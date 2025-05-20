let a = 1;
let b = a;
b = 2;
console.log(a);
console.log(b);

// 객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달
let apple = {
    name:'사과'
};
let orange = apple;
orange.name = '오렌지';
console.log(apple);
console.log(orange);