


//Query Selectors 

const frame = document.querySelector('.selection-container');
var colorInput = document.getElementById("color-input");
const colorButton = document.querySelector(".confirm");





//Event Listeners
colorButton.addEventListener("click", changeColor);


//Functions


function changeColor(e){
    color = colorInput.value;
    console.log(color)
    if(e == colorButton){
        frame.style.backgroundColor = String(color);
    }

}