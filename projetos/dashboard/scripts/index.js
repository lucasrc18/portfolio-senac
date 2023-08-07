const jsonURL = "data.json"
const request = new  XMLHttpRequest()
request.open("GET", jsonURL)
request.responseType = "json"
request.send()

let data;

request.onload = () => {
    data = request.response
    new Profit()
    new Expenses()
    new Sales()
    new EmployeeSales()

    let incomes = 0
    let expenses = 0
    data.profit.forEach(i => {incomes += i})
    data.expenses.forEach(i => {expenses += i})
    const total = incomes - expenses;

    document.getElementById("income").getElementsByTagName("b")[0].innerHTML = incomes.toFixed(2)
    document.getElementById("expenses").getElementsByTagName("b")[0].innerHTML = expenses.toFixed(2)
    document.getElementById("total").getElementsByTagName("b")[0].innerHTML = total.toFixed(2)
    if(total < 0){
        document.getElementById("total").style.background = "#BD1717"
        document.getElementById("total").style.boxShadow = "0px 0px 7px #DD1717"
    }
}

function getOptions(t){
    return {
        responsive: true, // Tornar o gráfico responsivo
        maintainAspectRatio: false, // Manter a proporção
        scales: {
            y: {
                beginAtZero: true, // Começar o eixo Y no valor zero
            }
        },
        plugins: {
            title: {
                display: true,
                text: t,
                font: {
                    size: 23,
                    style: "italic"
                },
                color: "#fff"
            },
            legend: {
                display: false
            }
        }
    }
}

const months = [
    "Janeiro", 
    "Fevereiro", 
    "Março", 
    "Abril", 
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
]

class Profit  {
    constructor(){
        this.data = {
            labels: months, // axis X
            datasets: [{
                data: data.profit, // Eixo Y - valores do gráfico
                borderColor: "#1260A9", // Cor da linha
                borderWidth: 2, // Espessura da linha
                fill: false, // Preenchimento desativado para ter apenas a linha
            }]
        }

        this.graph = new Chart(document.getElementById("profit-graph"), {
            type: "line",
            data: this.data,
            options: getOptions("Lucro por mês")
        })
    }
}

class Expenses { 
    constructor(){
        this.data = {
            labels: months, // axis X
            datasets: [{
                data: data.expenses, // Eixo Y - valores do gráfico
                borderColor: "#1260A9", // Cor da linha
                borderWidth: 2, // Espessura da linha
                fill: false, // Preenchimento desativado para ter apenas a linha
            }]
        }

        this.graph = new Chart(document.getElementById("expenses-graph"), {
            type: "line",
            data: this.data,
            options: getOptions("Despesas por mês")
        })
    }
}

class EmployeeSales {
    constructor(){
        this.data = {
            labels: data.employes.labels,
            datasets: [{
                data: data.employes.data,
                backgroundColor: "#1260A9",
                borderWidth: 2, 
                fill: true
            }]
        }

        this.graph = new Chart(document.getElementById("employee-graph"), {
            type: "bar",
            data: this.data,
            options: getOptions("Total de vendas por funcionario")
        })
    }
}

class Sales {
    constructor(){
        this.data = {
            labels: months,
            datasets: [{
                data: data.sales,
                borderColor: "#1260A9", 
                borderWidth: 2, 
                fill: false
            }]
        }

        this.graph = new Chart(document.getElementById("sales-graph"), {
            type: "line",
            data: this.data,
            options: getOptions("Quantidade de vendas mensais")
        })
    }
}