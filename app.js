// Div Bilgisi Alma
let container = document.querySelector(".container")
let btnDiv = document.querySelector("#btnDiv")

// Buton Ayarlama
let btn = document.createElement("button")
btn.setAttribute("id", "btn")
btn.innerHTML = "Roll The Dice"
btnDiv.appendChild(btn)

//Reset Buton Ayarlama
let resetBtn = document.createElement("button")
resetBtn.setAttribute("id", "resetBtn")
resetBtn.innerHTML = "Reset"
btnDiv.append(resetBtn)

// Zar Bilgisi Alma
let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")

btn.addEventListener("click", () => {

    // Zar Sayıları Belirleme
    let dice_1 = Math.ceil(Math.random() * 6)
    let dice_2 = Math.ceil(Math.random() * 6)

    // Sayı Değerleri İle Dosya Çekme
    img1.setAttribute("src", `images/dice${dice_1}.png`)
    img2.setAttribute("src", `images/dice${dice_2}.png`)

    // Sonuç Belirleme
    if (dice_1 > dice_2) {
        document.querySelector("h1").innerHTML = "Player 1 Won 🚩"
    }
    else if (dice_2 > dice_1) {
        document.querySelector("h1").innerHTML = "Player 2 Won 🚩"
    }
    else {
        document.querySelector("h1").innerHTML = "Draw"
    }
})



resetBtn.addEventListener("click", () => {
    document.querySelector("h1").innerHTML = "Roll The Dice"
    img1.setAttribute("src", "")
    img2.setAttribute("src", "")
})
