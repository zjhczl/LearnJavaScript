'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


const displayMovement = function(movements, sort = false) {
    containerMovements.innerHTML = '';
    const movs = sort ? [...movements].sort((a, b) => a - b) : movements;
    movs.forEach(function(mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
            <div class="movements__value">${mov} €</div>
        </div>`;
        containerMovements.insertAdjacentHTML('afterbegin', html);
        // containerMovements.innerHTML += html;
    });
};
// displayMovement(account1.movements);
const createUserName = function(accs) {
    accs.forEach(function(acc) {
        acc.userName = acc.owner.toLowerCase().split(' ').map((str) => str[0]).join('');
    });
};
// const user = 'Steven Thomas Williams';
createUserName(accounts);
const calcDisplayBalance = function(acc) {
        let movements = acc.movements;
        const balance = movements.reduce((acc, mov) => acc + mov, 0);

        labelBalance.textContent = `${balance} €`;
        acc.balance = balance;
    }
    // calcDisplayBalance(account1.movements);
const calcDisplaySummary = function(account) {
    let movements = account.movements;
    const incomes = movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes} €`
    const outcomes = movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs( outcomes)} €`
    const interest = movements.filter(mov => mov > 0).map(mov => mov * account.interestRate / 100).filter(mov => mov >= 1).reduce((acc, mov) => acc + mov, 0);
    labelSumInterest.textContent = `${interest} €`;
};
const updateUI = function(acc) {
    displayMovement(acc.movements);
    calcDisplayBalance(acc);
    calcDisplaySummary(acc);
};
// calcDisplaySummary(account1.movements);
let currentAccount;
btnLogin.addEventListener('click', function(e) {
    //禁止提交表单
    e.preventDefault();
    currentAccount = accounts.find(act => act.userName === inputLoginUsername.value);
    // console.log(currentAccount);
    if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
        //展示界面
        labelWelcome.textContent = `welcome ${currentAccount.owner.split(' ')[0]}`;
        containerApp.style.opacity = '100%';
        updateUI(currentAccount);
        inputLoginUsername.value = inputLoginPin.value = '';
    }
});
document.body.addEventListener('keydown', function(e) {
    console.log(e.key);
});
btnTransfer.addEventListener('click', function(e) {
    //防止刷新页面
    e.preventDefault();

    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(function(acc) { return acc.userName === inputTransferTo.value });
    // console.log(receiverAcc);
    if (receiverAcc && amount > 0 && amount <= currentAccount.balance && receiverAcc.userName !== currentAccount.userName) {

        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);
        updateUI(currentAccount);
        inputTransferAmount.value = inputTransferTo.value = '';
    }

});

btnClose.addEventListener('click', function(e) {
    e.preventDefault();
    if (inputCloseUsername.value === currentAccount.userName && Number(inputClosePin.value) === currentAccount.pin) {
        console.log('in');
        const index = accounts.findIndex(acc => acc.userName === currentAccount.userName);
        accounts.splice(index, 1); //
        inputCloseUsername.value = inputClosePin.value = '';
        containerApp.style.opacity = '0';
    }
});
btnLoan.addEventListener('click', function(e) {
    e.preventDefault();
    const amount = Number(inputLoanAmount.value);
    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount / 10)) {
        currentAccount.movements.push(amount);
        updateUI(currentAccount);
        inputLoanAmount.value = ''
    }

});
// const accountMovements = accounts.map(acc => acc.movements);
// const allMovements = accountMovements.flat();
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
const overalBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);
let sorted = true;
btnSort.addEventListener('click', function(e) {
    e.preventDefault();
    sorted = !sorted;
    displayMovement(currentAccount.movements, sorted);

});