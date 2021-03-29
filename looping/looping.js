const cats = ['Bojangles', 'BigglesWorth', 'Coissant', 'Leroy', 'Tony']
let info = 'These are my cats names: ';
const para = document.querySelector("p");

for (let i = 0; i < cats.length; i++){
    info += cats[i] + ", ";
}

para.textContent = info;