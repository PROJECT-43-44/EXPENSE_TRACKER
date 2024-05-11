// cash_script.js
document.getElementById('numberLabel').textContent = '';

let date = localStorage.getItem('message');
document.getElementById('title').innerText = date;
let connector = "in";
let new_date = date + ' ' + connector;

document.addEventListener("DOMContentLoaded", function() {
    const cash_out = document.getElementById("button2");

    cash_out.addEventListener("click", function() {
        window.location.href = 'cash_out.html';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const staffButton = document.getElementById("button1");

    staffButton.addEventListener("click", function() {
        window.location.href = "cash_in.html";
    });
});

const total_cash_in = localStorage.getItem(new_date);
const total_cash_out = localStorage.getItem(date);

const numberLabel = document.getElementById("numberLabel");
numberLabel.innerText = total_cash_in - total_cash_out;

const ctx = document.getElementById('myPieChart').getContext('2d');
const width = 200; 
const height = 200; 

const data = {
    labels: ['cash in', 'cash out'],
    datasets: [{
        label: 'Expense',
        data: [total_cash_in, total_cash_out],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ]
    }]
};

const myPieChart = new Chart(ctx, {
    type: 'pie',
    data: data
});
