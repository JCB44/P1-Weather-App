var city
// var i

function currentDay(){
var now = dayjs().format('dddd MMMM DD, YYYY') 
$(".date").append(now)
console.log(now)
}

function displayLast(){
var lastCity = localStorage.getItem('Last City')
city = lastCity
makeCall()
}

function saveInput(){
    var input = document.getElementById("input")
    city = input.value
    makeCall()
}

function makeCall(){
var requestUrl ='https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=522997d238759d89251f223ea7bf7a0c&units=imperial'  
    fetch(requestUrl).then(function(response){
        if (response.status === 404) {
           // Add modal to tell user the city entered was invalid
           badResponse()
            console.log("404")
            
        }else{
        return response.json()
         .then(function(data){
            // appends()
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
            localStorage.setItem("Last City", city)

            console.log(data)
            console.log(Math.round(data.main.temp))   
            console.log(data.main.temp)
         });
        }
    })
}

// function appends (){
//     var city = input.value
//     $(".city").empty()
//     $(".weather").empty()
//     $( "#temp" ).empty()
//     $( "#hiSpan" ).empty()
//     $( "#lowSpan" ).empty()
//     $(".city").append(city.charAt(0).toUpperCase()+city.slice(1))
//     $(".weather").append(data.weather[0].description.charAt(0).toUpperCase()+data.weather[0].description.slice(1))
//     $( "#temp" ).append(Math.round(data.main.temp)+"°F")
//     $( "#hiSpan" ).append(Math.round(data.main.temp_max)+"°F")
//     $( "#lowSpan" ).append( Math.round(data.main.temp_min) +"°F")
//     localStorage.setItem("Last City", city)
// }
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
currentDay()
displayLast()