$("button").on('click', function(){
	var music = $(this).attr("data-search");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + music + "&api_key=dc6zaTOxFJmzC&limit=10";
	$.ajax({
		url:queryURL,
		method:'GET'})
	.done(function(response){
	for ( var i=0 ; i < response.data.length; i++){
		var p = $('<p>').text('Rating:', response.data[i].rating);
		//console.log(response);
		var musicDiv = $('<div>');
		var musicImage = $('<img>');
		musicImage.attr('src', response.data[i].images.fixed_height.url)
						;
			musicDiv.append(p);
			musicDiv.append(musicImage);
			$('#musicView').prepend(musicDiv);

		}

	})

});

	
	 $("#musicview").on("click", function(){
            
            var state = $(this).attr("data-state"); 

             var MusicDiv = $("<div class='music'>");

             if (state === "still") {
                    
            $(this).attr("src", $(this).data("data-animate"));
                    
            $(this).attr("data-state", "animate");

             } else {
                            
            $(this).attr("src", $(this).data("still"));
                    
           $(this).attr("data-state", "still"); 
}

})
      

        function renderButtons() {
	$("#buttonsView").empty();
for (var i = 0; i < response.data.length; i++){
var a = $('<button>');
a.addClass("music");
a.attr("data-search", music[i]);
a.text(music[i]);
$("#buttonsView").append(a);

}
	
$("#addmusic").on("click", function(event){
event.preventDefault();

var music = $("#musicinput").val().trim();
music.push(music);

renderButtons();

         
     	})
     }
	
		





        


		
     


