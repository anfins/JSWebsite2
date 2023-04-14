


//Query Selectors 

const frame = document.querySelector('.selection-container');
var colorInput = document.getElementById("color-input");
const colorButton = document.querySelector(".confirm");





//Event Listeners
colorButton.addEventListener("click", changeColor);


//Functions


function changeColor(e){
    color = colorInput.value;

    if(e.target == colorButton){ //e.target specifiec the target of the event
        frame.style.backgroundColor = String(color);
    }

}