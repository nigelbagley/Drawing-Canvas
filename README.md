#draw.js

Getting started

1. Link to jQuery from your HTML document. Below that, link to the location of draw.js in your directory.


		<script src="http://code.jquery.com/jquery-1.10.1.min.js"&lt;/script>;
		<script src="scripts/draw.js"</script>		


2. Add in the below code to your main.js or make a script tag in your html


		<script $('#drawingStuff').draw();</scrip>	


3. Finally after you have added in all of the above, you then add in the id of 'drawingStuff' to a button in order to make the canvas and colour options show up.

		<a href="#" id="drawingStuff">Test me out!</a>

4. If the colours don't fit your fancy, you can easily change the data-hex that is being used in the draw.js file

		<button data-hex="#cb3594">Purple</button>