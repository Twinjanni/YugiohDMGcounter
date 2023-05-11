let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
function deleteDMG() {
    count = 0
    countEl.textContent = count
}
function deleteEntries() {
    countStr = null
    saveEl.textContent = null
}
function increment50() {
    count += 50
    countEl.textContent = count
}
function increment100() {
    count += 100
    countEl.textContent = count
}
function increment1000() {
    count += 1000
    countEl.textContent = count
}