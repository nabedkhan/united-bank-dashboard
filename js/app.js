// login area selector variable
const email = document.getElementById('inputEmail');
const password = document.getElementById('inputPassword');
const loginContent = document.querySelector('#header');
const loginBtn = document.querySelector('#form');

//loader selector
const loader = document.querySelector('.loader');

// dashboard area selector variable
const dashboard = document.querySelector('.dashboard');
const inputDeposit = document.querySelector('#inputDeposit');
const depositBtn = document.querySelector('#depositBtn');
const inputWithdraw = document.querySelector('#inputWithdraw');
const withdrawBtn = document.querySelector('#withdrawBtn');
const depositValueText = document.querySelector('.depositValue');
const withdrawValueText = document.querySelector('.withdrawValue');
const totalBalanceText = document.querySelector('.totalBalance');

// Login button event handler
loginBtn.addEventListener('submit', function (event) {
    //login form & dashboard hide
    loginContent.style.display = 'none';
    dashboard.style.display = 'none'
    //loader show
    loader.style.display = 'flex';

    setTimeout(function () {
        //loader hide
        loader.style.display = 'none';
        //dashboard show
        if (email.value && password.value) {
            loginContent.style.display = 'none';
            dashboard.style.display = 'flex'
        }
    }, 2000);
    event.preventDefault();
});

// Deposit button event handler
depositBtn.addEventListener('click', function () {
    if (inputDeposit.value === '') {
        alert('Please Enter Your Deposit Amount');
    }
    else {
        calculation(inputDeposit, depositValueText, 'deposit');
        calculation(inputDeposit, totalBalanceText, 'deposit');
        inputDeposit.value = "";
    }
});

// Withdraw button event handler
withdrawBtn.addEventListener('click', function () {
    if (parseInt(totalBalanceText.innerText) > parseInt(inputWithdraw.value)) {
        if (inputWithdraw.value === '') {
            alert('Please Enter Your Withdraw Amount');
        }
        else {
            calculation(inputWithdraw, withdrawValueText, 'deposit');
            calculation(inputWithdraw, totalBalanceText, 'withdraw');
            inputWithdraw.value = "";
        }
    }
    else {
        alert('Your have no enough balance for withdraw!');
    }
});

// function add amount in deposit, withdraw, balance
function calculation(input, valueText, getTask) {
    const getId = input.value;
    const inputAmount = parseFloat(getId);
    const currentAmount = parseFloat(valueText.innerText);
    let totalAmount = 0;
    if (getTask == 'deposit') {
        totalAmount = inputAmount + currentAmount;
    }
    if (getTask == 'withdraw') {
        totalAmount = currentAmount - inputAmount;
    }
    valueText.innerText = totalAmount;
}