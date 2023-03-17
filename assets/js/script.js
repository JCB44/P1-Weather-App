var city = "Mulvane"
var requestUrl ='https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=522997d238759d89251f223ea7bf7a0c&units=imperial'
console.log (requestUrl)
var i
fetch(requestUrl).then(function(response){
return response.json()
    
 })
 .then(function(data){

    $(".city").append(city)
    $(".weather").append(data.weather[0].description)
    $( "#temp" ).append(data.main.temp+"°F")
    $( "#hiSpan" ).append(data.main.temp_max+"°F")
    $( "#lowSpan" ).append(data.main.temp_min+"°F")
i = data
 console.log(data)
 });
 console.log(i)
 
 