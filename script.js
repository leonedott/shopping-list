var button = document.getElementById("enter")
var userinput = document.getElementById("userinput")
var unlist = document.querySelector("ul")
var listElements = unlist.getElementsByTagName("li")


function inputLenght(something){
	return something.value.length
}

function addDeleteIcon(){
	var deleteIcon = document.createElement("button")
	deleteIcon.className = "deleteIcon"
	return deleteIcon
}

function createListElement() {
	var li = document.createElement("li")
	li.appendChild(document.createTextNode(userinput.value))
	li.appendChild(addDeleteIcon())
	unlist.appendChild(li)
	userinput.value = ""
}

function addElementAfterClick() {
	if(inputLenght(userinput) > 0){
		createListElement()
	}
}

function addElementAfterEnter(event) {
	if(inputLenght(userinput) > 0 && event.code === "Enter"){
		createListElement()
	}
}

function crossElement(event) {
	var target = event.target
	target.classList.toggle("done")
}

function deleteElement(event) {
	var target = event.target
	var parent = target.parentNode
	if (target.className === "deleteIcon") {
		parent.parentNode.removeChild(parent)
	}
}

unlist.addEventListener("click", deleteElement)
unlist.addEventListener("click", crossElement)
button.addEventListener("click", addElementAfterClick)
userinput.addEventListener("keydown", addElementAfterEnter)