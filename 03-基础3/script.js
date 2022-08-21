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

};
//console.log(calcTempAmplitude(temperatures));
console.log('10' + 273);
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

////////
//面向对象编程

//构造函数
//1.创建空{}
//2.调用函数，并且 this = {}
//3.{} linked to prototype
//4.返回{}
const Person = function(name, birthYear) {
    // console.log(this);
    this.name = name;
    this.birthYear = birthYear;
    //bad way
    // this.calcAge = function() {
    //     console.log(2037 - this.birthYear);
    // };
    // console.log(this);
};
const zj = new Person("zj", 1996);
console.log(zj);
new Person("zj2", 1996);
const zj3 = {
    name: 'zj',
    birthYear: 1999
}
console.log(zj3);
console.log(zj instanceof Person);
console.log(zj3 instanceof Person);

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
};
zj.calcAge();
console.log(zj);
// Person.prototype.i = 6;
// console.log(zj.i);
console.log(zj.__proto__.__proto__);

const arr = [1, 23, 4, 5, 5];
//test
// Array.prototype.forEach = function() {
//     console.log("yes");
// };
// arr.forEach();
// {
//     var a = 10;
//     let b = 10;
// }

// function a() {};

// console.log(typeof a); //number
// // console.log(b);

//coding challenge
const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
};
Car.prototype.accelerate = function() {
    this.speed = this.speed + 10;
    console.log(this.make + "速度是：" + this.speed);
};
Car.prototype.brake = function() {
    if (this.speed >= 5)
        this.speed = this.speed - 5;
    console.log(this.make + "速度是：" + this.speed);
};
const car1 = new Car("BMW", 50);
car1.accelerate();
car1.accelerate();
car1.brake();
const car2 = new Car("MER", 60);
//ES6方法
class PersonCl {
    //构造函数
    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    };
    //函数
    calcAge() {
        console.log(2022 - this.birthYear);
    }
    static hey() {
        console.log("hey!");
    }

}

const jso = new PersonCl("jso", 1996);
console.log(jso);
jso.calcAge();
//getter and setter
const acc = {
    owner: "zj",
    movements: [12, 324, 63, 678],
    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        this.movements.push(mov);
    }
};
//不用使用（）
console.log(acc.latest);
acc.latest = 777;
console.log(acc.movements);
//static
Person.hey = function() {
    console.log("hey!");
}
PersonCl.hey();

//Object.create
const PersonProto = {
    calcAge() {
        console.log(2022 - this.birthYear)
    },

    init(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    },
};
const per1 = Object.create(PersonProto);
console.log(per1);
per1.calcAge(); //NaN
per1.birthYear = 1999;
per1.calcAge(); //23
const per2 = Object.create(per1);
console.dir(per2);
per2.calcAge();
//报错
// per3 = new per1();
// per3.calcAge();
per1.init('zj', 1900);
console.log(per1);

//coding challenge
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    };
    accelerate() {
        this.speed = this.speed + 10;
        console.log(this.make + "速度是：" + this.speed);
    };
    brake() {
        if (this.speed >= 5)
            this.speed = this.speed - 5;
        console.log(this.make + "速度是：" + this.speed);
    };

    get speedUs() {
        return this.speed / 1.6;
    };
    set speedUs(speed) {
        this.speed = speed * 1.6;
    };
}
const carA = new CarCl("qew", 55);
carA.speedUs = 3;
carA.accelerate();
console.log(carA.speedUs);
///////////////////////
//继承
//方法一 构造函数
const Student = function(name, birthYear, course) {
    // this.name = name;
    // this.birthYear = birthYear;
    // Person.bind(this)(name, birthYear);
    Person.call(this, name, birthYear);
    this.course = course;
};
//手动创建连接，Student.prototype linked to Person
Student.prototype = Object.create(Person.prototype);
//使构造函数指向Student
Student.prototype.constructor = Student;

Student.prototype.introduce = function() {
    console.log("My name is " + this.name);
};
const stu1 = new Student('zj', 1996, 'math');
console.log(stu1);
stu1.introduce();
stu1.calcAge();
console.dir(Student.__proto__);
console.dir(Student.prototype);
console.dir(stu1.__proto__);
console.dir(stu1.prototype);
console.dir(Person.__proto__);
console.dir(Person.prototype);
//coding challenge
const EV = function(make, speed, battery) {
    Car.call(this, make, speed);
    this.battery = battery;
};
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function(battery) {
    this.battery = battery;
};

const ev1 = new EV("qwe", 50, 75);
ev1.chargeBattery(90);
ev1.accelerate();
console.log(ev1);
//方法二 ES6（继承）
class StudentCl extends Person {
    //如果没有增加新的属性，则constructor默认调用super：constructor可以不用写
    constructor(name, birthYear, course) {
        // Person.call(this, name, birthYear);
        super(name, birthYear) //父类的构造函数
        this.course = course;
    }
    introduce() {
        console.log(this.name, this.birthYear, this.course);
    }
}
const st1 = new StudentCl('as', 1233, 'sda');
st1.introduce();

//方法三 object.create
const StudentProto = Object.create(PersonProto);
const jay = Object.create(StudentProto);

//其他
class Account {
    constructor(owner, currency, pin) {
            this.owner = owner;
            this.currency = currency;
            this.pin = pin;
            this.movements = [];
        }
        //存钱
    deposit(val) {
            this.movements.push(val);
        }
        //取钱
    withdraw(val) {
        this.deposit(-val);
    }
}

const acc1 = new Account('zj', 'EUR', 1111)
console.log(acc1);
acc1.deposit(50);
acc1.withdraw(23);

//数据私有和封装
//假封装，在属性前面加_ 例如：_movements
//真私有和封装
class Account2 extends Account {
    //public fields(instances)
    _movements = [];
    //private fields(instances)
    //#movements = [];
    //#pin

}