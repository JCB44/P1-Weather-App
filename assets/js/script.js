var city

function currentDay(){
var now = dayjs().format('dddd MMMM DD, YYYY') 
$(".date").append(now)
console.log(now)
}

function displayLast(){
var lastCity = localStorage.getItem('Last City')
city = lastCity
if(lastCity === null){
//does nothing on purpose
}else{
    makeCall()
}
}

function saveInput(){
    var input = document.getElementById("input")
    city = input.value
    makeCall()
}

function makeCall(){
var WeatherUrl ='https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=522997d238759d89251f223ea7bf7a0c&units=imperial'  
    fetch(WeatherUrl).then(function(response){
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
            localStorage.setItem("Last City", city)
            // chuckModal.style.display = "block";
            // errorModalfu()
            goodResponse()
            // console.log(data)
            // console.log(Math.round(data.main.temp))   
            // console.log(data.main.temp)
         });
        }
    })

    var requestUrl = 'https://api.chucknorris.io/jokes/random'
    fetch(requestUrl).then(function(response){
        return response.json()
        .then(function(data){
            console.log(data)
            console.log(data.value) 
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
    var chuckModal = document.getElementById("chuckModal");
    var closeButton = document.getElementById("close-button");
    chuckModal.style.display = "block";
    
    
    window.onclick = function(event) {
      if (event.target == chuckModal) {
        chuckModal.style.display = "none";
      }
    }
 }

currentDay()
displayLast()




// function errorModalfu(){

// var errorModal = document.getElementById("errorModal");

// var span = document.getElementsByClassName("close");

// span.onclick = function() {
//     errorModal.style.display = "none";
//     console.log("1")
// }

// window.onclick = function(event) {
//   if (event.target == errorModal) {
//     errorModal.style.display = "none";
//     console.log("2")
//   }
// }
// }
// function chuckModalfu(){
//     var chuckModal = document.getElementById("chuckModal");
//     var span = document.getElementsByClassName("close");
//     chuckModal.style.display = "block";
//     span.onclick = function() {
//         chuckModal.style.display = "none";
//     }
//     window.onclick = function(event) {
//         if (event.target == chuckModal) {
//           chuckModal.style.display = "none";
//         }
//       }
// }