//////////////////////////////////////////////////
////////part 1
// let js = 'amzing';
// // if (js == "amzing")
// //     alert("sdas");
// //在控制台输出
// console.log(123 + 32434);
// //let var const
// let age = 30;
// age = 31;
//////////////////////////////////////////////////
////////part 2
//文字模板
let year = 2022;
let name = "zj";
let birth = 1996;
job = "student";
const txt = `I'm ${name},${year-birth} old.`;
console.log(txt);
console.log('line1\nline2\n\
line3');
console.log(`line1
line2
line3`)
    //类型转换
const inputYear = '1996';
console.log(inputYear + 10);
console.log(Number(inputYear) + 10);
console.log(String(100));
//假：0,false,'',undefined,null,NaN
console.log(Boolean(0));
console.log(Boolean(false));
console.log(Boolean(''));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

//'||'：第一个为真则，返回第一个，否则返回第二个
console.log(3 || 'Jonas'); //结果为3，两个都为真，则返回第一个
console.log('' || 'Jonas'); //结果为Jonas
console.log(null || '' || true || false || 1); //结果为true
//a不为0的情况下
a = 12;
const guest = a ? a : 10;
const guest2 = a || 10;
//'&&':从左往右，遇到假就返回假，如果全为真，则返回最后一个真
console.log(3 && 'Jonas'); //结果为Jonas，两个都为真，则返回第一个
console.log(12 && 'hjk' && 12); //结果为12
console.log(12 && 'hjk' && 12 && 0 && 'sda'); //结果为0
//Number
//parsing
console.log(Number.parseInt('23.321', 10));
console.log(Number.parseFloat('23.321', 10));
//isNaN
console.log(Number.isNaN(222)); //false
console.log(Number.isNaN('2213')); //false
console.log(Number.isNaN(2 / 0)); //false
console.log(Number.isNaN(NaN)); //true
//isFinite
console.log(Number.isFinite(222)); //true
console.log(Number.isFinite('2213')); //false
console.log(Number.isFinite(2 / 0)); //false
console.log(Number.isFinite(NaN)); //false

//Math
//sqrt
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
//max min
console.log(Math.max(12, 34, 6));
console.log(Math.min(12, 34, 6));
//random
console.log(Math.trunc(Math.random() * 6) + 1);
const randomInt = (min, max) => Math.trunc(Math.random() * (max + 1 - min) + min);
console.log(randomInt(2, 5));

//setTimeout
let sss = 0;
const st = setTimeout(() => sss = 6, 2000);
clearTimeout(st);
console.log(sss);
setTimeout((a) => console.log(a), 3000, 'zj');
//setInterval
// setInterval(() => {
//     const now = new Date();
//     console.log(now);
// }, 5000);

/////////////////dom
//选择元素
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
console.log(document.querySelector('h1')); //返回满足条件的第一个元素
console.log(document.querySelectorAll('h1')); //返回满足条件的所有元素
console.log(document.getElementById('head'));
console.log(document.getElementsByTagName('h1')); //HTMLCollection 实时的
console.log(document.getElementsByClassName('head')); //HTMLCollection 实时的
//创建插入html
//insertAdjacentHTML()
h1 = document.querySelector('h1');
h1.insertAdjacentHTML('afterBegin', '<div>insertAdjacentHTML</div>');
//createElement()
let message = document.createElement('div'); //创造元素，不显示
message.classList.add('cookie-messgae'); //添加class
message.textContent = 'createElemnet!!!';
//添加元素
document.body.prepend(message); //在body最前面添加该元素
// document.body.append(message); //在body最后面添加该元素
document.body.append(message.cloneNode(true)); //true表示子元素也会被复制
h1.before(message.cloneNode(true)); //在h1前面添加该元素
h1.after(message.cloneNode(true)); //在h1后面添加该元素
//删除元素
message.remove();
// message.parentElement.removeChild(message);
//Styles
h1.style.fontSize = '5rem';
console.log(h1.style);
console.log(h1.style.fontSize); //5rem
console.log(h1.style.color); //空白 因为只显示内联样式
//显示元素所有style
console.log(getComputedStyle(h1));
console.log(getComputedStyle(h1).color); //rgb(255,255,255)
h1.style.fontSize = Number.parseFloat(getComputedStyle(h1).fontSize, 10) - 10 + "px";
//直接设置值
h1.style.setProperty('color', 'red');

//Attributes
console.log(h1.id);
console.log(h1.className); //注意 不是class
console.log(h1.getAttribute('class'));
h1.setAttribute('woner', 'zj');
console.log(h1.getAttribute('woner'));
//classes
h1.classList.add('test'); //可带多个className，用‘，’隔开
h1.classList.remove('test');
h1.classList.toggle('test');
console.log(h1.classList.contains('test'));




// document.addEventListener('keydown', function(e) {
//     console.log(e.key);
// });