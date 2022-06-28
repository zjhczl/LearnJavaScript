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