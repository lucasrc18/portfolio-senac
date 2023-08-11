const img = {
    Blog: "./assets/Bloging.svg",
    ECommerce: "./assets/Internet.svg",
    Portfolio: "./assets/Portfolio.svg",
    SignUp: "./assets/Login.svg",
    Dashboard: "./assets/Dashboard.svg"
}

const products = [
    {
        image: img.Blog,
        page: "Blog",
        price: "1199,99",
        desc: "Um blog para discutir dos mais variados temas!"
    },
    {
        image: img.ECommerce,
        page: "E-commerce",
        price: "1599,99",
        desc: "Realize seu negócio online!"
    },
    {
        image: img.Portfolio,
        page: "Portfolio",
        price: "1599,99",
        desc: "Registre seus trabalhos, e faça seu nome conhecido!"
    },
    {
        image: img.SignUp,
        page: "Cadastro",
        price: "800,00",
        desc: "Uma página de cadastro para acomodar seus clientes!"
    },
    {
        image: img.Dashboard,
        page: "Dashboard",
        price: "999,99",
        desc: "Acompanhe o andamento de seu negócio!"
    }
]

const ref = {
    image: document.querySelector("#product_image"),
    name: document.querySelector("#product_name"),
    desc: document.querySelector("#product_description"),
    price: document.querySelector("#product_price"),

    left_arrow: document.querySelector("#left_arrow"),
    right_arrow: document.querySelector("#right_arrow")
}

// Handlers
ref.left_arrow.addEventListener("click", () => {
    if(cur - 1 < 0) {
        cur = products.length - 1
    } else {
        cur -= 1
    }

    updateProduct()
})
ref.right_arrow.addEventListener("click", () => {
    if(cur + 1 > products.length - 1) {
        cur = 0
    } else {
        cur += 1
    }

    updateProduct()
})

// Animations
ref.left_arrow.addEventListener("mouseover", () => {
    ref.left_arrow.src = "./assets/filled_left_arrow.svg"
})
ref.left_arrow.addEventListener("mouseout", () => {
    ref.left_arrow.src = "./assets/left_arrow.svg"
})

ref.right_arrow.addEventListener("mouseover", () => {
    ref.right_arrow.src = "./assets/filled_right_arrow.svg"
})
ref.right_arrow.addEventListener("mouseout", () => {
    ref.right_arrow.src = "./assets/right_arrow.svg"
})

let cur = 0
function updateProduct(){
    ref.name.innerHTML = products[cur].page
    ref.desc.innerHTML = products[cur].desc
    ref.price.innerHTML = products[cur].price
    ref.image.src = products[cur].image
}

window.onload = updateProduct

document.querySelector("button").addEventListener("click", () => {
    alert("Compra efetuada com sucesso!")
})