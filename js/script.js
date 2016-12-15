var snap = 10; /* the value of the snap in pixels */

  $( function() {
    $( "#draggable" ).draggable({ 
    	grid: [ 10, 10 ]
     });
    $( "#draggable" ).draggable({
 	 containment: $("#container")
});


  } );