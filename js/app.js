// login area selector variable
const loginBtn = document.getElementById('button');
const email = document.getElementById('inputEmail');
const password = document.getElementById('inputPassword');
const loginContent = document.querySelector('#header');

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
loginBtn.addEventListener('click', function (event) {
    if (email.value && password.value) {
        loginContent.style.display = 'none';
        dashboard.style.display = 'block'
    }
    event.preventDefault();
});

// Deposit button event handler
depositBtn.addEventListener('click', function () {
    if (inputDeposit.value === '') {
        alert('Please Enter Your Deposit Amount');
    }
    else {
        addAmount(inputDeposit, depositValueText);
        addAmount(inputDeposit, totalBalanceText);
        inputDeposit.value = "";
    }
});

// Withdraw button event handler
withdrawBtn.addEventListener('click', function () {
    if (inputWithdraw.value === '') {
        alert('Please Enter Your Withdraw Amount');
    }
    else {
        addAmount(inputWithdraw, withdrawValueText);
        withdrawAmount(inputWithdraw, totalBalanceText);
        inputWithdraw.value = "";
    }
});

// function add amount in deposit, withdraw, balance
function addAmount(input, valueText) {
    const depositAmount = parseFloat(input.value);
    const currentDeposit = parseFloat(valueText.innerText);
    const totalDeposit = depositAmount + currentDeposit;
    valueText.innerText = totalDeposit;
}

// function remove amount from balance
function withdrawAmount(input, valueText) {
    const depositAmount = parseFloat(input.value);
    const currentDeposit = parseFloat(valueText.innerText);
    const totalDeposit = currentDeposit - depositAmount;
    valueText.innerText = totalDeposit;
}