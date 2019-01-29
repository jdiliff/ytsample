
$(function() {
    console.log('working'); 
        $("form").on("submit", function(e) {
            e.preventDefault(); 

            var request = gapi.client.youtube.search.list({
                url: "https://www.googleapis.com/youtube/v3",
                part: 'snippet',
                type: 'video',
                q: encodeURIComponent($('#user-input').val()).replace(/%20/g, "+"),
                maxResults: 10, 
                order: "viewCount", 
            });

            request.execute(function(response) {
                var results = response.result; 
                $.each(results.items, function(index, item) {
                    console.log(item); 
                });
            });
        });
    }); 

function init() {
    gapi.client.setApiKey("AIzaSyB8LA4BQojhhjwpGFhSFEYQrJHdC1PXiYI");
    gapi.client.load("youtue", "v3", function() {

    });
}




    // function onClientLoad() {
    //     gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
    // }
    // // Called automatically when YouTube API interface is loaded (see line 9).
    // function onYouTubeApiLoad() {
    //     gapi.client.setApiKey('AIzaSyB8LA4BQojhhjwpGFhSFEYQrJHdC1PXiYI');
    // }
     
    // // Called when the search button is clicked in the html code
    // function search() {
    //     var query = document.getElementById('query').value;
    //     // Use the JavaScript client library to create a search.list() API call.
    //     var request = gapi.client.youtube.search.list({
    //         part: 'snippet',
    //         type: 'video',
    //         q: encodeURIComponent($('#user-input').val()).replace(/%20/g, "+"),
    //         maxResults: 10, 
    //         order: "viewCount", 

    //     });
    //     // Send the request to the API server, call the onSearchResponse function when the data is returned
    //     request.execute(onSearchResponse);
    // }
    // // Triggered by this line: request.execute(onSearchResponse);
    // function onSearchResponse(response) {
    //     var responseString = JSON.stringify(response, '', 2);
    //     document.getElementById('response').innerHTML = responseString;
    // }
    


    // if ( $('#user-input') === 'p' ) {
    //     //pull specific query results from youtube
    // }
