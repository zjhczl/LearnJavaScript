// Remember, we're gonna use strict mode in all scripts now!
'use strict';
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function(temperatures) {
        let max = temperatures[0];
        let min = temperatures[0];

        for (let i = 0; i < temperatures.length; i++) {
            let temp = temperatures[i];
            //console.log(typeof(temp));
            if (typeof(temp) == 'number') {
                if (max < temp)
                    max = temp;
                if (min > temp)
                    min = temp;

            }
        }
        return max - min;

    }
    //console.log(calcTempAmplitude(temperatures));
console.log('10' + 273)
    //coding challenge#1
function printForecast(temps) {
    let tstring = '...';
    for (let i = 0; i < temps.length; i++) {
        tstring = tstring + ` ${temps[i]}C in ${i+1} days...`;
    }
    console.log(tstring);
}
printForecast([2, 3, 5, 6, 7]);
////////////////////////////////////////////////////////
////////string
const airline = 'Tap Air Portugal';
const plane = 'A320';
console.log('asd' [1]);
//indexof
console.log('asdasd'.indexOf('a')); //0 ,第一个
console.log('asdasd'.lastIndexOf('a')); //3
console.log('asdasd'.indexOf('sd')); //1
//slice
console.log(airline.slice(4));
console.log(airline.slice(4, 5));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(1 + airline.lastIndexOf(' ')));
console.log(airline.slice(0, -9));
//改变大小写
const str1 = 'asdsddSDD';
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
//trim:去掉空格和换行
const Email = ' Hello@qq.com \n'
console.log(Email.trim());
//repalce
const priceGB = '123,56$';
console.log(priceGB.replace('$', "¥").replace(',', '.'));
const str2 = 'asd asd asd';
console.log(str2.replace('asd', 'A')); //替换第一个
console.log(str2.replaceAll('asd', 'A')); //替换全部

//bolleans
console.log(plane.includes('A32')); //true
console.log(plane.startsWith('A32')); //true
console.log(plane.endsWith('320')); //true
//split
const str3 = 'qwe-wqe-sdf-sdf';
const strs = str3.split('-');
console.log(strs);
//join 数组转string
console.log(strs.join(''));
//填充字符
const message = 'Go to gate 23';
console.log(message.padStart(25, '+')); //++++++++++++Go to gate 23
console.log(message.padEnd(25, '+')); //Go to gate 23++++++++++++
const maskGreditCard = function(number) {
    const str = number + '';
    console.log(str.slice(-4).padStart(str.length, '*'));
}
maskGreditCard(12334564567);
//repeat
const message2 = 'bad waether... '
console.log(message2.repeat(4));
//code chanllenge
const changeStr = function(str1) {
    const strs = str1.toLowerCase().split('-');
    const newStrs = [];
    for (const item of strs) {
        newStrs.push(item[0].toUpperCase() + item.slice(1));
    }
    return newStrs.join('');
}
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const btn = document.querySelector('button');
btn.textContent = '确认';
btn.addEventListener('click', function() {
    const text = document.querySelector('textarea').value;
    console.log(text);
    const newtext = changeStr(text);
    console.log(newtext);
})