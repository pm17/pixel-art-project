// Select color input
// Select size input
const TABLE = $('#pixelCanvas');
var height, width, color;

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(event){
	/*alert("call1");*/
	makeGrid();
	event.preventDefault();

});

function makeGrid() {

// Your code goes here!
const TABLE = $('#pixelCanvas');
 height = $('#inputHeight').val();
 width = $('#inputWeight').val();
 color = $('#colorPicker').val();
/*alert(height + width+ color);*/

for (var i = 0; i < height; i++) {

	TABLE.append('<tr></tr>');
	for (var j = 0; j < width; j++) {
		TABLE.children().last().append('<td></td>');
	}
}

}

//For Coloring the canvas
$('#pixelCanvas').on("click","td",function(event){
	/*alert('td click');*/
	color = $('#colorPicker').val();
	$(this).css("background-color",color);
	event.preventDefault();

});