$.fn.drawing = function(){

	var canvasWidth = screen.width;
	var canvasHeight = screen.height;
	var canvas = document.createElement('canvas');
	canvas.setAttribute('width', canvasWidth);
	canvas.setAttribute('height', canvasHeight);
	canvas.setAttribute('id', 'canvas');
	// console.log(document.body);
	document.body.appendChild(canvas);
	$('#canvas').hide();


	context = canvas.getContext("2d");
	canvas.fillStyle = 'rgba(255,255,255,0)';


	$(this).on('click', function(e){
		e.preventDefault();
		var buttonContainer = $('<div>').attr('id','buttons');
		buttonContainer.append('<button id="clear">Clear</button>');
		// console.log('clear');
		buttonContainer.append('<button data-hex="#ffcf33">Yellow</button>');
		buttonContainer.append('<button data-hex="#659b41">Green</button>');
		buttonContainer.append('<button data-hex="#cb3594">Purple</button>');
		// console.log('button clicked');
		$('body').append(buttonContainer);
		$('#buttons').show().css({"z-index":"9999999999" ,"position":"relative", "top":"0", "display":"inline-block"});
		$('#canvas').show().css({"position":"absolute","top":"0"});
		

	
		$('#canvas').on('mousedown', function(e){
		// $('#canvas').on.mousedown(function(e){
			var mouseX = e.pageX - this.offsetLeft;
			var mouseY = e.pageY - this.offsetTop;
			console.log('paint');

			paint = true;
			addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
			redraw();

		});

		$('#canvas').on('mousemove',function(e){
			if(paint){
				addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
				redraw();
			}
		});

		$('#canvas').on('mouseup',function(e){
			paint = false;
		});

		$('#canvas').on('mouseleave',function(e){
			paint = false;
		});
		// add and event listener to the button
		// and when button is clicked it will change the colour of the stroke
		$('body').on('click','button',function(){
			curColor = $(this).data('hex');
			// console.log(hexCode);

		});
		$('body').on('click', 'button#clear', function() {
			clearCanvas();
		});
		// if they want other colours all they have to do is create another button with a hex code
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
		  
		  context.strokeStyle = "#df4b26";
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
		function clearCanvas() {
			clickX.length = 0;
			clickY.length = 0;
			clickDrag.length = 0;
			context.clearRect(0, 0, canvas.width, canvas.height);
		};
	}); //End of click event
};