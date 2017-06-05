$("button").on('click', function(){
	console.log('BUTTON CLICKED!');
})
		var musicians = ["selena","lorde","grouplove","bob marley","lauryn hill","bruno mars","shakira","j.cole","metallica","the ramones"];


		function displayMusicInfo(){
			var musician = $(this).attr('data-search');
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + music + "&api_key=dc6zaTOxFJmzC&limit=10";


		$.ajax({
			url: queryURL, 
			method: 'GET'})
	     .done(function(response);

     var results = response.data;
	  $(".gif").on("click", function(){
            
             var state = $(this).attr("data-state"); 

             var movieDiv = $("<div class='movie'>");

             if (state === "still") {
                    
            $(this).attr("src", $(this).data("data-animate"));
                    
            $(this).attr("data-state", "animate");

             } else {
                            
            $(this).attr("src", $(this).data("still"));
                    
           $(this).attr("data-state", "still");             }    
        
       });
     


