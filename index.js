// document.getElementById("count").innerText=4
let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
// saveEl.innerHTML=""
function increment() {
    count += 1
    countEl.innerText = count
}
function save(){
    saveEl.textContent += (count+" - ")
    // console.log(count)
    countEl.textContent = 0
    count = 0
}