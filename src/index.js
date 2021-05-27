// const name = "katekichi";
// const age = 43;

// const msg1 = "私の名前は" + name;
// console.log(msg1);

// const msg2 = `私の名前は${name}です`;

// console.log(msg2);

const func2 = (str) => str;

console.log(func2("This is func2"));

const func3 = (num1, num2) => num1 + num2;

console.log(func3(10, 20));

// const myProfile = {
//   name: "katekichi",
//   age: 43
// };

// const { name, age } = myProfile;
// const msg3 = `名前は${name}です。年齢は${age}です`;
// console.log(msg3);

const myProfile = ["katekichi", 43];
const [name, age] = myProfile;
const msg3 = `名前は${name}です。年齢は${age}です`;
console.log(msg3);

const sayHello = (name = "Guest") => console.log(`名前は${name}です`);
sayHello("katekichi");

const ary1 = [1, 2];
console.log(...ary1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(...ary1);

// まとめる
const ary2 = [1, 2, 3, 4, 5];
const [num1, num2, ...ary3] = ary2;
console.log(num1);
console.log(num2);
console.log(ary3);

// 配列のコピー
const ary4 = [10, 20];
const ary5 = [30, 40];

const ary6 = [...ary4];
console.log(ary6);

const ary7 = [...ary4, ...ary5];
console.log(ary7);

// mapとfilter
const nameAry = ["Tanaka", "Yamada", "katekichi"];
