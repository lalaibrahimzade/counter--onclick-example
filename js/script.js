let counter = document.getElementById("counter")
let count = 0
let saveInfo = document.getElementById("save-res")

function increment() {
    count += 1
    counter.textContent = count
}

function saver() {
    let saverString =  count + " - "
    saveInfo.textContent += saverString
    counter.textContent = 0
    count = 0
}



