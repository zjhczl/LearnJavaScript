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

//-------高级用法（数组）---------
const arr = [2, 3, 4]
const a = arr[0];
const b = arr[1];
const c = arr[2];
//等价写法（解构数组）
const [x, y, z] = arr;

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(startIndex, mainIndex) {
        return [this.starterMenu[startIndex], this.mainMenu[this.mainIndex]];
    },
};
//跳跃式赋值
let [first, , third] = restaurant.categories;
//用解构数组交换变量值
[first, third] = [third, first];
//使用解构让函数返回多个值
const [starter, mainCourse] = restaurant.order(2, 1);
//数组嵌套
const nested = [2, 4, [2, 7]];
const [j, k, [l, m]] = nested;
//默认值
// const [p,q,r] = [8,9];//报错
const [p, q, r = 1] = [8, 9];
//...
///传播运算符
const arr2 = [2, 6, 8];
const badArr = [1, 2, arr2[0], arr2[1], arr2[2]];
const goodArr = [1, 2, ...arr2]; //等价于上面的badArr

console.log(1, 2, 3);
console.log(...[1, 2, 3]);
//在=左边使用。
const [aq, bq, ...others] = [1, 2, 3, 4, 5, 6]; //others = [3,4,5,6]
//
const add = function(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
}
add(1, 2);
add(1, 2, 3, 4, 5);



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
//--------------对象高级用法------

const restaurant2 = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    orderDelivery: function({ adress, mainIndex = 1, time }) {
        console.log(adress, mainIndex, time);
    },
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};
//解构对象(变量名和对象属性名相同)
const { name, openingHours, categories } = restaurant2;
//解构对象(变量名和对象属性名不同)
const { name: reName, openingHours: hours, categories: tags } = restaurant2;
//默认值
const { menu = [], starterMenu: startMenu = [] } = restaurant2;
//改变原有变量值
let aqq = 123;
let bqq = 123;
const obj = {
    a: 2,
    b: 34,
    c: 5,
};
({ aqq, bqq } = obj); //注意括弧
//对象嵌套
const { sat: { open, close } } = openingHours;
//使用函数
restaurant2.orderDelivery({ time: '22:20', adress: "asdas##", mainIndex: 2, startIndex: 2 });

//...
//浅拷贝
const restaurantcopy = {...restaurant2 };



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
//for-of
const arr3 = [1, 2, 5, 7, 98, 0, 3, 32];
for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}
for (const item of arr3) {
    console.log(arr3);
}
////////////////////////////////////
//////////集合
const ordersSet = new Set(['asd', 'basd', 'basd', 'dasd']);
console.log(ordersSet);
//集合元素个数
console.log(ordersSet.size);
//判断元素是否在集合中
console.log(ordersSet.has('asd')); //true
console.log(ordersSet.has('assd')); //false
//添加元素
ordersSet.add('easd');
//删除元素
ordersSet.delete('basd');
//清除所有元素
//ordersSet.clear();
//循环集合
for (const item of ordersSet) {
    console.log(item);
}
//集合转数组
const orderArr = [...ordersSet];
console.log(orderArr);
////////////////////////////////////
//////////map
//定义map
const rest = new Map();
//添加值，set返回map本身
rest.set('name', 'map');
rest.set(1, '123');
rest.set('zj', 123).set('wqe', 'qew');
console.log(rest);
//获取值
console.log(rest.get('zj'));
//检索是否有值
console.log(rest.has('zj'));
//删除值
console.log(rest.delete('zj'));
console.log(rest);
//元素个数
console.log(rest.size);
//清除所有元素
rest.clear();
//
console.log(rest.set(document.querySelector('h1'), 'h1'));
//part2
const question = new Map([
    ['name', 'zj'],
    ['test', '12', ],
    [123, 2]
]);
console.log(question);
//对象转map
const objMap = new Map(Object.entries(restaurant));
console.log(objMap);
//迭代
for (const [key, value] of question) {
    console.log(key, value);
}
//map转数组
console.log([...objMap]);
console.log([...objMap.entries()]);
console.log([...objMap.keys()]);
console.log([...objMap.values()]);