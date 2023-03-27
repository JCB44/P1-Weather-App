var city
var valid

function currentDay(){
var now = dayjs().format('dddd MMMM DD, YYYY') 
$(".date").append(now)
}

function displayLast(){
var lastCity = localStorage.getItem('Last City')
city = lastCity
if(lastCity === null){
//does nothing on purpose
}else{
//            comment this out if you want joke 
//  \/\/\/\/  to appear on loacal storage startup
  // valid = false
  makeCall()
}
}

function saveInput(){
    var input = document.getElementById("input")
    city = input.value
    valid = true
    makeCall()
    
}

function makeCall(){
var WeatherUrl ='https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=522997d238759d89251f223ea7bf7a0c&units=imperial'  
    fetch(WeatherUrl).then(function(response){
        if (response.status === 404) {
            
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
            localStorage.setItem("Last City", city)
            if(valid === false){
                console.log(valid)
            }else{
                goodResponse()
            }

            console.log(data)
         });
        }
    })
}
function fetchJoke(){
var requestUrl = 'https://api.chucknorris.io/jokes/random'
    fetch(requestUrl).then(function(response){
        return response.json()
        .then(function(data){
            console.log(data) 
            $("#joke").empty()
            $("#joke").append(data.value)
        })
    })
}

 function badResponse(){
    var errorModal = document.getElementById("errorModal");
    var closeButton = document.getElementById("close-button");
    errorModal.style.display = "block";
    
    window.onclick = function(event) {
      if (event.target == errorModal) {
        errorModal.style.display = "none";
      }
    }
    closeButton.addEventListener("click", function() {
        errorModal.style.display = "none";
      });
 }
 function goodResponse(){
  fetchJoke()
    var chuckModal = document.getElementById("chuckModal");
    chuckModal.style.display = "block";
    var button = document.getElementById("getAnother")
    button.addEventListener("click", function(){
      fetchJoke()
    });
 }
currentDay()
displayLast()