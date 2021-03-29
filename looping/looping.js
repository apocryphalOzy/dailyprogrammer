const cats = ['Bojangles', 'BigglesWorth', 'Coissant', 'Leroy', 'Tony']
let info = 'These are my cats names: ';
const para = document.querySelector("p");

for (let i = 0; i < cats.length; i++) {
    if (i === cats.length - 1) {
        info += "and " + cats[i] + "."
    } else (
        info += cats[i] + ", "
    )
}

para.textContent = info;