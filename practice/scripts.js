let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers.forEach((a) => {
    //prints odds
    if (a % 2 !== 0) {
        console.log(`Odd ${a}`)
    }
})

numbers.forEach((a) => {
    //print evens
    if (a % 2 === 0) {
        console.log(`Even ${a}`)
    }
})