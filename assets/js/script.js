var city
// var i

function saveInput(){
    var input = document.getElementById("input")
    var city = input.value
    var requestUrl ='https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=522997d238759d89251f223ea7bf7a0c&units=imperial'  
    fetch(requestUrl).then(function(response){
        if (response.status === 404) {
           // Add modal to tell user the city entered was invalid
           badResponse()
            console.log("404")
            
        }else{
        return response.json()
        
         .then(function(data){
            $(".city").empty()
            $(".weather").empty()
            $( "#temp" ).empty()
            $( "#hiSpan" ).empty()
            $( "#lowSpan" ).empty()
            $(".city").append(city.charAt(0).toUpperCase()+city.slice(1))
            $(".weather").append(data.weather[0].description.charAt(0).toUpperCase()+data.weather[0].description.slice(1))
            $( "#temp" ).append(Math.round(data.main.temp)+"°F")
            $( "#hiSpan" ).append(Math.round(data.main.temp_max)+"°F")
            $( "#lowSpan" ).append( Math.round(data.main.temp_min) +"°F")

         console.log(data)
         
         console.log(Math.round(data.main.temp))   
         console.log(data.main.temp)
         });
        }
    })
}
 function badResponse(){

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