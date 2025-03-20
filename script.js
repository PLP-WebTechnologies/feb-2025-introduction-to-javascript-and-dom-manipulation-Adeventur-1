// Function to change text content
function changeText() {
    document.getElementById("description").innerText = "The text has been changed dynamically!";
}

// Function to modify CSS styles
function changeStyle() {
    document.body.style.backgroundColor = "lightblue"; // Change background
    document.getElementById("title").style.color = "red"; // Change text color
}

// Function to add a new element dynamically
function addElement() {
    let newElement = document.createElement("p");
    newElement.innerText = "This is a dynamically added paragraph!";
    newElement.setAttribute("id", "dynamicPara"); // Add ID
    document.getElementById("container").appendChild(newElement);
}

// Function to remove the dynamically added element
function removeElement() {
    let element = document.getElementById("dynamicPara");
    if (element) {
        element.remove();
    } else {
        alert("No element to remove!");
    }
}
