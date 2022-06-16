'use strict';
//严格模式
////////////////////////////////////
//////////functions
//定义函数
function logger() {
    console.log("test!");
}
//调用函数
logger();
//带参函数
function addNum(a, b) {
    a = Number(a);
    b = Number(b)
    return a + b;
}
console.log(addNum(2, 4));
console.log(addNum('2', '4'));
//不同的函数定义
//第一种
function calcAge1(birthYear) {
    const age = 2022 - birthYear;
    return age;
}
const age1 = calcAge1(1996)
console.log(age1);
//第二种(调用必须在定义后)
const calcAge2 = function(birthYear) {
    const age = 2022 - birthYear;
    return age;
}
const age2 = calcAge2(1996)
console.log(age2);
//第三种 Arrow function  (值=>返回表达式) 没有this指针
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1996);
console.log(age3);
const yearsUntilRetirement = (birthYear, name) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${name} will retire in ${retirement}`;
}
console.log(yearsUntilRetirement(1996, 'zj'));

////////////////////////////////////
//////////数组
const friend1 = "Aada";
const friend2 = "Bada";
const friend3 = "Cada";
//声名数组方法1
const friends = [friend1, friend2, friend3, [1, 2, 3], 'Hsad'];
console.log(friends);
////声名数组方法2
const years = new Array(1993, 1996, 1997);
console.log(years);
console.log(`${friends[0]} is birth in ${years[0]}`);
//数组长度
console.log(friends.length);
//friends = years;这样是错误的，但是还是可以改变数组里面的值
//改变某个值
friends[1] = "Dada";
console.log(friends);
// friends[2] = 123;
// console.log(friends);
//在数组末尾添加元素
friends.push("Eada");
console.log(friends);
//在数组开头添加元素
console.log(friends.unshift("AAsad")); //返回数组长度
console.log(friends);
//从数组删除最后的元素
console.log(friends.pop()); //返回删除的元素
console.log(friends);
//从数组删除第一个元素
console.log(friends.shift()); //返回删除的元素
console.log(friends);
//返回元素index
console.log(friends.indexOf('Dada'));
//判断数组是否有该元素
console.log(friends.includes('Dada'));

////////////////////////////////////
//////////对象
console.log('--------对象--------');
const zj = {
    name: 'zj',
    age: 26,
    friends: friends,
    addFriend: function(friendName) {
        this.friends.push(friendName)
    }
};
console.log(zj);
console.log(zj.name);
console.log(zj['name']);
//添加值
zj.test = 'test';
console.log(zj['test']);
zj['test2'] = 'test2';
console.log(zj.test2);
console.log(zj);

// const re = prompt(zj.name); //弹窗
// console.log(re);
//对象方法
zj.getFriendsNum = function() { return this.friends.length; }
console.log(zj.getFriendsNum());
zj.getLastFriendName = () => zj.friends[zj.friends.length - 1];
console.log(zj['getLastFriendName']());
//this
zj.addFriend('Fasd');
console.log(zj.getLastFriendName());
////////////////////////////////////
//////////循环
console.log("------------循环----------");
//for循环
for (let i = 1; i <= 10; i++) {
    console.log(i + 'for');
}
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
    if (friends[i] == 'Dada') {
        break;
    }
}
//while循环
let i = 0
while (i <= 10) {
    console.log(i + "while");
    i++
}
let dice = 0;
while (dice !== 6) {
    dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
}