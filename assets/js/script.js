var city
// var i

function saveInput(){
    var input = document.getElementById("input")
    var city = input.value
    var requestUrl ='https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=522997d238759d89251f223ea7bf7a0c&units=imperial'  
    fetch(requestUrl).then(function(response){
        return response.json()
         })
         .then(function(data){
            $(".city").empty()
            $(".weather").empty()
            $( "#temp" ).empty()
            $( "#hiSpan" ).empty()
            $( "#lowSpan" ).empty()
            $(".city").append(city)
            $(".weather").append(data.weather[0].description)
            $( "#temp" ).append(Math.round(data.main.temp)+"°F")
            $( "#hiSpan" ).append(Math.round(data.main.temp_max)+"°F")
            $( "#lowSpan" ).append( Math.round(data.main.temp_min) +"°F")

         console.log(data)
         
         console.log(Math.round(data.main.temp))   
         console.log(data.main.temp)
         });

}
 function fetch1(){
    
 }
 
//  window.onkeyup = keyup;
//  var inputTextValue;
//  function keyup(e) {
//     //setting your input text to the global Javascript Variable for every key press
//     inputTextValue = e.target.value;
//     if (e.keyCode == 13) {
//         console.log("what")
//       }
//  }