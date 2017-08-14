$("button").on('click', function(){
	var music = $(this).attr("data-search");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + music + "&api_key=";
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

	
	 $('<img>').on("click", function(){
            
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
      

function renderButtons(bandList) { 
	$("#buttonsView").empty();
	for (var i = 0; i < bandList.length; i++){
		var a = $('<button>');
		a.addClass("music");
		a.attr("data-search", bandList[i]);
		a.text(bandList[i]);
		$("#buttonsView").append(a);
		$("#musicview").prepend

	}
}
var musicArray =[];
	
$("#music-form").on("submit", function(event){
event.preventDefault();
//console.log("music-form");
var bandBtn = $("#music-input").val().trim();
musicArray.push(bandBtn);



renderButtons(musicArray);

return false;

})





        


		
     


