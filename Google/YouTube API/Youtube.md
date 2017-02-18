# Youtube 


https://www.codecademy.com/en/courses/javascript-intermediate-en-757J2/0/1?curriculum_id=50ecb8d45f787a6332000042







https://www.w3.org/TR/selectors4/#matches



https://w3c.github.io/web-animations/

https://www.w3.org/TR/web-animations-1/





##  YouTube Data API

https://developers.google.com/youtube/v3/


Introduction
If you've never used the YouTube Data API before, this lesson is a perfect starting point.

While there's a whole host of different ways you can use the API to integrate with YouTube, we'll be covering a basic integration that performs searches for YouTube content.

The same basic concepts and client library framework that you learn here can be used for other types of YouTube integration later on.



http://code.google.com/p/google-api-javascript-client/

##  Google APIs JavaScript client library


https://github.com/google/google-api-javascript-client

https://support.google.com/cloud#topic=3340599





Loading the JavaScript client library

We'll start with a exercise that performs some common setup tasks needed to make YouTube Data API calls using the Google APIs JavaScript client library. Don't worry—we'll get to the exciting stuff as soon as that's done!

This boilerplate code sets up a basic HTML document, search.html, and includes two JavaScript files. One is the Google APIs JavaScript client library, and the other, search.js, is what we'll use for our custom code.

When the client library is loaded, it automatically calls onClientLoad() [line 11] for us. That, in turn, loads in some extra code needed to make YouTube requests [line 12]. Finally, once that's complete, we set an API key [line 19]. When you're writing your own programs that talk to the YouTube API, you'll need to apply for your own key, but for now, we can use an existing key set up for this lesson.

In the course of this lesson, we'll need to display the results of YouTube Data API calls in the browser. showResponse() [line 5] is a simple function that takes a JavaScript value and adds it to a visible element in our HTML page.




To get familiar with displaying output, modify the existing sample to add in a call to the showResponse() function right after the API key is set inside onYouTubeApiLoad() [line 22]. Pass in a string like "Hooray!" to showResponse(), and confirm that it shows up in your HTML on the Result panel.







https://developers.google.com/youtube/v3/docs/search/list


https://support.google.com/cloud/answer/6158862

https://support.google.com/cloud/answer/6310037

https://support.google.com/cloud/answer/6158867?hl=en&ref_topic=6262490


A basic search.list()


Now that we have all the setup out of the way, let's make some calls to the API!

We'll start with a basic request to search YouTube—the underlying API call is search.list().

The new search() function [line 24] added to the previous code makes the API call. The code specifies one parameter, part: 'id' [line 27], which tells the API that we want to retrieve back only the YouTube ids of the search results. (We'll cover how to get back more information in an upcoming exercise.)

Once the API call completes, the onSearchResponse() [line 36] function is called automatically by the client library.

The only thing left to do is to handle the search response—in this case, we just want to display the raw JavaScript value on our web page.




Add a call to showResponse(response); inside the onSearchResponse() function, on [line 37]. You should see the results of the YouTube API search.list() call on your HTML page in the Result tab.



https://developers.google.com/youtube/v3/docs/search/list#response






Getting more info with part=snippet
Congratulations! At this point, you've made a YouTube search request, and displayed the response on your page.

If you look at what was returned, though, you'll notice that it wasn't very interesting—a collection of YouTube identifier strings and little else. Anyone actually performing a YouTube search in a real application would want to display something meaningful about each search result—the item's title and description, for instance.

Fortunately, the YouTube Data API will provide that sort of information if you know how to ask! The data that you get back in an API response is determined by the "part" parameter that you include in the API request. In our initial request, we used the value "id" for the part parameter [line 27], so all we got back for each item was a unique identifier string.

Instead of using "id", you can pass in the value "snippet" for the part parameter. This will tell the API that you'd like to retrieve information like the title and description about each item in your search results.

Instructions
Try changing [line 27] to set the part parameter to 'snippet' instead of 'id', then see how that changes the result that displayed on your HTML page.




https://developers.google.com/youtube/v3/getting-started#part






Filtering responses with the 'q' parameter
Now that you're requesting the "snippet" part in your response, you've probably noticed that the titles and descriptions returned by the API are rather random—you're effectively asking the API to return anything. It's time to get a bit more picky.

We do this by passing in additional parameters to our search.list() call that tells the API to filter the results to only include specific types of items in the response. There's a wide range of parameters you can use to really narrow down your searches, but for the purposes of this exercise, we'll focus on one in particular: q.

The q parameter tells the API to only include YouTube search results whose title, description, or keywords match the value you pass in—it behaves just like the search field you're probably already familiar with on the YouTube web interface.

Instructions
Modify the example to add in a q parameter at [line 28]. You can use any string (be sure to include the quotes) you'd like for q—try experimenting with a few different values and see how the results change!












Wrapping up
Thanks for working through this introductory lesson! At this point, you should be familiar with using the Google APIs JavaScript library to do searches using the YouTube Data API.

There's so much more that you can do with the API beyond searching, though. Our documentation is the best place to read more about the other types of API calls that you can make. Many of those calls can be made just by modifying the same code you've been working on up until now—just change the name of the API call made to gapi.client.youtube, and pass in appropriate parameters.




gapi.client.youtube



https://developers.google.com/youtube/v3/docs/


gapi.client.youtube




https://console.cloud.google.com/apis/api/youtube/overview?project=golden-operator-159105




The YouTube Data API v3 is an API that provides access to YouTube data, such as videos, playlists, and channels.


YouTube Data API v3是一种API，可用于访问YouTube数据，例如视频，播放列表和频道。

https://developers.google.com/youtube/?hl=zh_CN


https://developers.google.com/youtube/iframe_api_reference

https://www.youtube.com/watch?v=bHQqvYy5KYo


https://developers.google.com/youtube/player_parameters




https://developers.google.com/youtube/v3/getting-started

https://developers.google.com/youtube/v3/docs/








AIzaSyBg64c77bB6GZ2zxDhWKa4LI8KyN_r9u-g



建议您先对密钥设定相关限制，然后再在实际工作环境中使用密钥。您可以限制哪些网站、IP 地址或应用可以使用此密钥来调用 API。

https://console.cloud.google.com/apis/credentials/key/283?project=golden-operator-159105



https://developers.google.com/apis-explorer/?hl=zh_CN#p/youtube/v3/

youtube.videos.list


https://developers.google.com/apis-explorer/?hl=zh_CN#p/youtube/v3/youtube.videos.list




http://code.google.com/apis/accounts/docs/OAuth2.html




GET https://www.googleapis.com/youtube/v3/videos?part=html5&key={YOUR_API_KEY}





400
 
- Show headers -
  
{
 "error": {
  "errors": [
   {
    "domain": "youtube.parameter",
    "reason": "missingRequiredParameter",
    "message": "No filter selected. Expected one of: chart, id, myRated",
    "locationType": "parameter",
    "location": ""
   }
  ],
  "code": 400,
  "message": "No filter selected. Expected one of: chart, id, myRated"
 }
}
 



GET https://www.googleapis.com/youtube/v3/videos?part=html5&hl=jQuery+%26+Ajax&id=lIKrfLWNsUI&maxHeight=300&maxResults=10&maxWidth=400&myRating=like&key={YOUR_API_KEY}





400
 
- Show headers -
  
{
 "error": {
  "errors": [
   {
    "domain": "youtube.parameter",
    "reason": "invalidLanguage",
    "message": "The <code>hl</code> parameter value does not specify a valid language code.",
    "locationType": "parameter",
    "location": "hl"
   }
  ],
  "code": 400,
  "message": "The <code>hl</code> parameter value does not specify a valid language code."
 }
}




GET https://www.googleapis.com/youtube/v3/videos?part=html5&hl=en&maxHeight=300&maxResults=10&maxWidth=400&myRating=like&key={YOUR_API_KEY}









