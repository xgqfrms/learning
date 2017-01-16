# To-Do list project 


https://www.sololearn.com/Play/jQuery



<h1>My To-Do List</h1>
<input type="text" placeholder="New item" />
<button id="add">Add</button>
<ol id="mylist"></ol>


<h1>Some heading</h1>
<ol>
  <li>One</li>
  <li>Two</li>
</ol>



$(function() {
  $("#add").on("click", function() {
    //event handler
  });
});


var val = $("input").val();
if(val !== '') {
  var elem = $("<li></li>").text(val);
  $(elem).append("<button class='rem'>X</button>");
  $("#mylist").append(elem);
  $("input").val(""); //clear the input
}

$(function() {
  $("#add").on("click", function() {
    var val = $("input").val();
    if(val !== '') {
      var elem = $("<li></li>").text(val);
      $(elem).append("<button class='rem'>X</button>");
      $("#mylist").append(elem);
      $("input").val("");
    }
  });
});

$(function() {
  $("#add").on("click", function() {
    var val = $("input").val();
    if(val !== '') {
     var elem = $("<li></li>").text(val);
     $(elem).append("<button class='rem'>X</button>");
     $("#mylist").append(elem);
     $("input").val("");
     $(".rem").on("click", function() {
      $(this).parent().remove();
     });
    }
  });
});

