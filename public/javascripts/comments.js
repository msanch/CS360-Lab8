$(document).ready(function(){

    $("#serialize").click(function(){
        var myobj = {Name:$("#Name").val(),Comment:$("#Comment").val()};
        jobj = JSON.stringify(myobj);
        $("#json").text(jobj);
	var url = "comment";
	$.ajax({
  		url:url,
  		type: "POST",
  		data: jobj,
  		contentType: "application/json; charset=utf-8",
  	success: function(data,textStatus) {
          $("#done").html(textStatus);
        }
      })
    });

    $("#getThem").click(function() {
      $.getJSON('comment', function(data) {
        console.log(data);
        var everything = "<ul>";
        for(var comment in data) {
          com = data[comment];
          everything += "<li>Name: " + com.Name + " -- Comment: " + com.Comment + "</li>";
        }
        everything += "</ul>";
        $("#comments").html(everything);
      })
    })


    $("#findComment").click(function() {
      $.getJSON('comment', function(data) {
        console.log(data);
        var everything = "<ul>";
        for(var comment in data) {
          com = data[comment];
          if(com.Name == $("#search").val()){
            everything += "<li>Name: " + com.Name + " -- Comment: " + com.Comment + "</li>";
          }
          
        }
        everything += "</ul>";
        $("#comments").html(everything);
      })
    })
   /* $("#clearContents").click(function(){
      console.log("Inside clear");
      var url = "c";
     $.ajax({
        url:url,
        type: "POST",
        data: JSON.stringify([]),
        contentType: "application/json; charset=utf-8",
        success: function (data,textStatus) {
          $("#done").html(textStatus);
        }
     })
    });*/

});