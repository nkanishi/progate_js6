// 1 push メソッド 配列に要素追加
const characters = ["にんじゃわんこ","ベイビーわんこ","ひつじ仙人"];
console.log(characters);

characters.push("とりずきん");
console.log(characters);


// 2 forEach メソッド　配列の要素を順番に出力
const characters = ["にんじゃわんこ","ベイビーわんこ","ひつじ仙人","とりずきん"];
characters.forEach((character) => {console.log(character);});


// 3 findメソッド　指定の条件を探す
const numbers = [1,3,5,7,9];

const foundNumber = numbers.find((number) => {return number % 3 ===0});

console.log(foundNumber);

const characters = [
 {id:1, name:"にんじゃわんこ", age:6},
 {id:2, name:"ベイビーわんこ", age:2},
 {id:3, name:"ひつじ仙人", age:100},
 {id:4, name:"とりずきん", age:21}
];

const foundCharacter = characters.find((character)=>{return character.id === 3});
console.log(foundCharacter);

// 4 filterメソッド
const numbers = [1,2,3,4];

const evennumbers = numbers.filter((number)=>{return number % 2 ===0});

console.log(evenNumbers);

const characters = [
    {id:1,name:"にんじゃわんこ",age:14},
    {id:2,name:"ベイビーわんこ",age:5},
    {id:3,name:"ひつじ仙人,age:100"}
];

const underTwenty = characters.filter((character)=>{return character.age<20});
console.log(undertwenty);

// 5 map メソッド　要素全てにある処理をして、別の配列作成









