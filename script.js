var cityNameInput = document.querySelector("#cityName");
var searchButton = document.querySelector("#search");
var userCitySearchSpan = document.querySelector("#cityName");

renderLastRegistered();

function renderLastRegistered(){
    var cityName = localStorage.getItem("cityName");
}
userCitySearchSpan.textContent = cityName;

searchButton.addEventListener("click",function(event) {
    event.preventDefault();

    var cityName = document.querySelector("#cityName").value;

    localStorage.setItem("cityName",cityName);
    renderLastRegistered();
});