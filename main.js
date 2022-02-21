function addNewList() {

}

function createTemplateItem(text) {
    let newItem = document.createElement("li");

    newItem.innerHTML = `${text}
    <input id="check-eggs" type="checkbox" class="complete-item" onclick="completeListItem(this)">
    <button class="delete-button" onclick="deleteListItem(this.parentNode)"><img class="trash-icon" alt="delete" src="trash.svg"/></button>
    `;
    return newItem;
}

function onAddItem() {
    let list = document.getElementById("grocery-list");
    let itemInput = document.getElementById("text_input");
    // let newItem = document.createElement("li");

    // newItem.appendChild(document.createTextNode(itemInput.value));
    let newItem = createTemplateItem(itemInput.value);
    list.appendChild(newItem);
}

function deleteListItem(item) {
    console.log(item);
    item.parentNode.removeChild(item);
}

function completeListItem(item) {
    if (item.checked) { // true if the input checkbox is checked
        item.parentNode.style.textDecoration = "line-through";
        // in css, this would be: "text-decoration: line-through"
    } else {
        item.parentNode.style.textDecoration = "none";
        // in css, this would be: "text-decoration: none"
    }
}

window.onload = () => {
    let list = document.getElementById("grocery-list");
    for(let text of ["eggs", "milk", "cereal"]) {
        let newItem = createTemplateItem(text);
        list.appendChild(newItem);
    }
}