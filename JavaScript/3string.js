let string = '문자열';
string = '안녕!';
console.log(string);
//특수 문자 출력
string = "'안녕!'";
console.log(string);

string = '안녕!\n반가워\t\t!!';
console.log(string);

//템플릿 리터럴
let id = 'sy';
let greetings = "'안녕!, " + id + "\n 즐거운 하루 보내!'";
console.log(greetings);

greetings = `'안녕, ${id}
즐거운 하루 보내!'`;
console.log(greetings);