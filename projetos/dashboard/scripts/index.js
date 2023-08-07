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
                data: [100, 150, 200, 120, 180, 300, 100, 90, 120, 200, 30, 100], // Eixo Y - valores do gráfico
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
                data: [100, 150, 200, 120, 180, 300, 100, 90, 120, 200, 30, 100], // Eixo Y - valores do gráfico
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
            labels: [
                "employee1",
                "employee2",
                "employee3",
                "employee4",
                "employee5",
                "employee6"
            ],
            datasets: [{
                data: [100, 150, 200, 120, 180, 300, 100, 90, 120, 200, 30, 100],
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
                data: [100, 150, 200, 120, 180, 300, 100, 90, 120, 200, 30, 100],
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

new Profit()
new Expenses()
new Sales()
new EmployeeSales()