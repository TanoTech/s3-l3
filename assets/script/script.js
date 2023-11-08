function addTask (){
    const mainDiv = document.querySelector('main > ul')
    const taskRow = document.createElement('li')
    taskRow.innerText = document.getElementById('taskIn').value
    
    mainDiv.appendChild(taskRow)
    document.getElementById('taskIn').value = ""

    const newSpan = document.createElement("span")
    const textSpan = document.createTextNode("X")

    newSpan.className = "close"
    newSpan.appendChild(textSpan)
    taskRow.appendChild(newSpan)

    const clickClose = document.getElementsByClassName("close")
    for (c = 0; c < clickClose.length; c++) {
        clickClose[c].onclick = function() {
        const div = this.parentElement
        div.style.display = "none"
        }
    } 

    taskRow.addEventListener('click', function() {
    taskRow.style.textDecoration = "line-through" 
    })
}


const aggiungiBTN = document.getElementById('add-btn')
aggiungiBTN.addEventListener("click", addTask)



