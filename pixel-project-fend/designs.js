// Select color input
const color = document.getElementById('colorPicker');


// Select size input
const row = document.getElementById('inputHeight');
const col = document.getElementById('inputWidth');


// When size is submitted by the user, call makeGrid()
const draw = document.getElementById('sizePicker');
const design = document.getElementById('pixelCanvas');

function makeGrid(e) {
    // Your code goes here!
    while(design.firstElementChild){
    	design.firstElementChild.remove();
    }

    console.log(row.value, col.value, color.value);
    for (let i = 1; i <= row.value; i++) {

        const tableRow = document.createElement('tr');
        tableRow.setAttribute("id", "row" + i);
        design.appendChild(tableRow);

        for (let j = 1; j <= col.value; j++) {
            const rowCol = document.createElement('td');
            document.getElementById('row' + i).appendChild(rowCol);
        }
    }
    e.preventDefault();
}

draw.addEventListener('submit', makeGrid);

design.addEventListener('click', function(e) {
    e.target.bgColor = color.value;
    console.log(e.target);

})