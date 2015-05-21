$(function() {

	// Canvas element - append it to div canvasToday
	// doc window element height & width of current window
	var canvasWidth = screen.width;
	var canvasHeight = screen.height;
	var canvas = document.createElement('canvas');
	canvas.setAttribute('width', canvasWidth);
	canvas.setAttribute('height', canvasHeight);
	canvas.setAttribute('id', 'canvas');
	console.log(document.body);
	document.body.appendChild(canvas);

	context = canvas.getContext("2d");

	$('#canvas').mousedown(function(e){
		var mouseX = e.pageX - this.offsetLeft;
		var mouseY = e.pageY - this.offsetTop;

		paint = true;
		addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
		redraw();

	});

	$('#canvas').mousemove(function(e){
		if(paint){
			addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
			redraw();
		}
	});

	$('#canvas').mouseup(function(e){
		paint = false;
	});

	$('#canvas').mouseleave(function(e){
		paint = false;
	});
	// add and event listener to the button
	// and when button is clicked it will change the colour of the stroke
	$('button').on('click',function(){
		curColor = $(this).data('hex');
		// console.log(hexCode);

	});
	// if they want other colours all they have to is create another button with a hex code
	var curColor = '#cb3594';
	var clickColor = new Array();

	var clickX = new Array();
	var clickY = new Array();
	var clickDrag = new Array();
	var paint;

	function addClick(x, y, dragging)
	{
		clickX.push (x);
		clickY.push (y);
		clickDrag.push(dragging);
		clickColor.push(curColor);
	}

	function redraw(){
	  context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
	  
	  // context.strokeStyle = "#df4b26";
	  context.lineJoin = "round";
	  context.lineWidth = 5;
				
	  for(var i=0; i < clickX.length; i++) {		
	    context.beginPath();
	    if(clickDrag[i] && i){
	      context.moveTo(clickX[i-1], clickY[i-1]);
	     }else{
	       context.moveTo(clickX[i]-1, clickY[i]);
	     }
	     context.lineTo(clickX[i], clickY[i]);
	     context.closePath();
	     context.strokeStyle = clickColor[i];
	     context.stroke();
	  }
	}
});