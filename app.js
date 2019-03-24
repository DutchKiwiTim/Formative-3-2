// AppID: 3YPU54-EXU76JX5RJ

// http://api.wolframalpha.com/v2/query?input=pi&appid=XXXX

// http://api.wolframalpha.com/v2/query?input=pi&appid=3YPU54-EXU76JX5RJ

// $(function(){
	
// 	$.ajax({

// 		url: 'http://api.wolframalpha.com/v2/query?input=pi&appid=3YPU54-EXU76JX5RJ',
// 		dataType: 'jsonp',
// 		success:function(res){

//       console.log(res);

// 		} // SUCCESS response

// 	}); // END Ajax Call

// }); // END main function

// fetch('http://api.wolframalpha.com/v2/query?input=pi&appid=3YPU54-EXU76JX5RJ', {mode: 'no-cors'})

// .then(function(response){
//   console.log('success');
//   console.log(response);
// })

// function requestData() {
//     $.ajax({
//       type: "GET",
//       url: 'http://api.wolframalpha.com/v2/query?input=pi&appid=3YPU54-EXU76JX5RJ',
//       //dataType: "xml",

//     }).done(function(data) {
//       //data should contain the response from wolframalpha
//       // document.write(data);
//       $("#results").append("Success");
//     })
// };

// $(document).ready(function() {
//   requestData();
// });


//Create a new object to interact with the server
var xhr = new XMLHttpRequest();

var url = 'http://api.wolframalpha.com/v2/query?input=pi&appid=3YPU54-EXU76JX5RJ';

// Provide 3 arguments (GET/POST, The URL, Async True/False)
xhr.open('GET', url, true);

// Once request has loaded...
xhr.onload = function() {
    // Parse the request into JSON
    var data = JSON.parse(this.response);

    // Log the data object
    console.log(data);

    // Log the page objects
    // console.log(data.query.pages)

    // Loop through the data object
    // Pulling out the titles of each page
    // for (var i in data.query.pages) {
    //     console.log(data.query.pages[i].title);
    // }
}
// Send request to the server asynchronously
xhr.send();