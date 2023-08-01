const titles = [
    "Fusquinha"
]

const t = document.querySelector("#section-title")

let i = 0
let char = 0
const loop = setInterval(() => {
    const cur = titles[i]
    
    if(char == 0)
        t.innerHTML = cur.charAt(char)
    else
        t.innerHTML += cur.charAt(char)
    
    if(char + 1 > cur.length-1){
        char = 0
        i++
    }
    else 
        char++

    if(i > titles.length-1)
        i = 0
}, 375)