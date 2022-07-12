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
//-------------高级用法（函数）------------- 
//默认参数
const createBooking = function(numOfFlight = "F1", numOfPassengers = "44", price = "asd") {
    const booking = {
        numOfFlight,
        numOfPassengers,
        price,
    };
    console.log(booking);
}
const booking = [, 5, 3.5];
createBooking(...booking);
const flight = 'LH123';
const jonas = {
    name: 'jonas',
    passport: 123534456
}
const checkIn = function(flightNum, passenger) {
    flightNum = 'LH436';
    passenger.name = 'Mr.' + passenger.name;
}
checkIn(flight, jonas);
console.log(flight, jonas); //flight没变，jonas变了。
//高阶函数。在javascript中，函数可以被当作参数，也可以被返回
const oneWord = function(str) {
    return str.replaceAll(' ', '').toLowerCase();
}
const upperFirstWord = function(str) {
        const [first, ...others] = str.split(' ');
        return [first.toUpperCase(), ...others].join(' ');
    }
    //函数作参数
const transfromer = function(str, fn) {
    console.log("TS:" + fn(str));
    console.log('TS by ' + fn.name);
}
transfromer('Javascript is good!', upperFirstWord);
transfromer('Javascript is good!', oneWord);
//函数作返回值
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}
const greeterHey = greet('Hey');
greeterHey('jonas');
greet('hey')('jonas');
//箭头函数
const greet2 = greeting => name => console.log(`${greeting} ${name}`);
greet('hey')('jonas2');
//this
const luf = {
    airline: 'Luf',
    iataCode: 'LH',
    bookings: [],
    book: function(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name: name });
    },

}
luf.book(123, 'zj');
const book = luf.book;
//book(123,'zj'); //错误，因为this指向不明确
//用call明确this的指向
book.call(luf, 213, 'zj');

const eur = {
    airline: 'EUR',
    iataCode: 'EW',
    bookings: [],
}
book.call(eur, 213, 'zj');
//apply
book.apply(eur, [123, 'zj']);
//bind 返回一个新函数
const bookEU = book.bind(eur); //指定this指针
bookEU(123, 'zj');
const bookTe = book.bind(eur, 123); //指定this指针和第一个参数
bookTe('zj2');
//bind事件监听
// document.body.addEventListener('click', luf.book.bind(luf, 123, 'zj'));
//bind指定参数
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
const addTax2 = addTax.bind(null, 0.1);
console.log(addTax2(200));
//coding challenge
const poll = {
        question: "世界上最好的语言是？",
        options: ['0:Javascript', '1:Python', '2:C++', '3:Php'],
        answers: new Array(4).fill(0), //[0,0,0,0]
        registerNewAnswer() {
            const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(写下编号)`));
            console.log(answer);
            typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
            console.log(this.answers);
        },
        display() {
            console.log(this.answers);
        }
    }
    //poll.registerNewAnswer();
document.body.addEventListener('click', poll.registerNewAnswer.bind(poll));
poll.display.call({ answers: [1, 7, 9, 9] });
//只执行一次的函数 
(function() {
    console.log('run once!');
})();

(() => console.log('run once!'))();
//闭包
const secureBooking = function(passengerCount) {
    //let passengerCount = 10;
    return function() {
        passengerCount++;
        console.log(passengerCount + " passenger");
    }
}
let passengerCount = 0;
const booker = secureBooking(30);
booker(); //改变了函数定义中的passengerCount
booker();
booker();
console.log(booker);
console.dir(booker);
//闭包的几种情况
//1
let f;
const g = function() {
    const a = 23;
    f = function() {
        console.log(a);
    }
}
g();
f();
//2
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;
    //设置函数在1000毫秒后执行
    setTimeout(function() {
        console.log(n, perGroup);
    }, wait * 1000);
    console.log(wait);
}
boardPassengers(180, 4);
//coding challenge

(function() {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    header.addEventListener('click', function() {
        header.style.color = 'blue';
    })
})();









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
//reverse 会改变原来数组顺序 
const arrr = ['a', 'b', 'c', 'd', 'e'];
console.log(arrr.reverse());
console.log(arrr);
//concat 连接连个数组    
const letters = arrr.concat(['f', 'g']);
console.log(letters);
//join 
console.log(arrr.join('-'));
//forEach(contiue,break不起作用)
const movements = [21, 4563, 685, -234, 456, -235, 456];
for (let item of movements) {
    console.log(item);
}
movements.forEach(function(item, index, arr) {
    console.log(item);
});
//map 对每一个元素进行相同的操作
console.log(movements.map(function(mov, index, arr) {
    return mov * 10;
}));
console.log(movements.map(mov => mov * 10));
//filter return为true的会被保留
console.log(movements.filter(function(mov) {
    return mov > 0;
}));
//reduce 第二个参数是acc的初始值 return的值就是下次acc的值
console.log(movements.reduce(function(acc, mov, index, arr) {
    return acc + mov;
}, 0));
console.log(movements.reduce((acc, mov) => acc > mov ? acc : mov, movements[0])); //求最大值
//find 返回第一个满足条件的元素
console.log(movements.find(mov => mov < 0));
//findIndex 返回第一个满足条件的元素的index
console.log(movements.findIndex(mov => mov < 0));
//some 返回bool
console.log(movements.some(mov => mov > 0)); //true
//every 所有元素都满足返回true，否则返回false
console.log(movements.every(mov => mov > -1000));
//flat
const arr4 = [
    [1, 2, 3],
    [4, 5, 6], 7, 8
];
console.log(arr4.flat()); //[1,2,3,4,5,6,7,8]
const arrDeep = [
    [1, [2, 3]],
    [4, 5, 6], 7, 8
];
console.log(arrDeep.flat()); //[1,[2,3],4,5,6,7,8]

console.log(arrDeep.flat(2)); //[1,2,3,4,5,6,7,8]
//sort 排序A-Z 基于string的排序（改变原来数组顺序）
const owners = ['aasd', 'cdas', 'bdsa'];
console.log(owners.sort()); //['aasd', 'bdas', 'cdsa'];
console.log(movements.sort()); //[-234, -235, 21, 456, 456, 4563, 685]

//return <0;a,b
//return >0;b,a
console.log(movements.sort((a, b) => {
    return a - b;
})); //[-235, -234, 21, 456, 456, 685, 4563]

//Array
const xx = new Array(7);
console.log(xx); //[empty*7]
//fill 参数 （value,startIndex,endIndex）
xx.fill(1, -1, 'zj');
console.log(xx); //['zj','zj','zj','zj','zj','zj','zj']
//Array.from()
const xxx = Array.from({ length: 7 }, () => 'zj');
console.log(xxx); //['zj','zj','zj','zj','zj','zj','zj']

const xxxx = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(xxxx); //[1,2,3,4,5,6,7]




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
//forEach(contiue,break不起作用)
//const movements = [21, 4563, 685, -234, 456, -235, 456];
for (let item of movements) {
    console.log(item);
}
movements.forEach(function(item, index, arr) {
    console.log(item);
})




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
//forEach
ordersSet.forEach(function(value, key, map) {
    console.log(key, value); //key和value相同
});



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
//forEach
question.forEach(function(value, key, map) {
    console.log(key, value);
});