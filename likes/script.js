var numbers = [
    document.querySelector("#numlikes0").innerText,
    document.querySelector("#numlikes1").innerText,
    document.querySelector("#numlikes2").innerText
]

function like(num){
    numbers[num]++
    
    document.querySelector(`#numlikes${num}`).innerText = numbers[num]
}

