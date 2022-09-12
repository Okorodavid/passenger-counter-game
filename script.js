let numberEl = document.getElementById("number")
let saveEnt = document.getElementById("entries")
let counter = 0

function count() {
   counter += 1
   numberEl.textContent = counter 
}

function saveit() {
   let saving = counter + " - "
   saveEnt.textContent += saving
   counter = 0
   numberEl.textContent = 0
}

