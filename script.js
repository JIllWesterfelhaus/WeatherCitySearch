var textInput = document.querySelector("#inputTextHere");
var signUpButton = document.querySelector("#saveTextButton");
var msgDiv = document.querySelector("#msg");
var userTextSpan = document.querySelector("#saved-text");
renderLastRegistered();
function displayMessage(type, message) {
  msgDiv.textContent = message;
msgDiv.setAttribute("class", type);
}
function renderLastRegistered() {
  var text = localStorage.getItem("inputTextHere");
  if (text  === null) {
    return;
  }
 userTextSpan.textContent = text;
}
signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  var text = document.querySelector("#inputTextHere").value;
  if (text === "") {
   displayMessage("error", "");
  } else {
    displayMessage("success", "");
    localStorage.setItem("inputTextHere", text);
    renderLastRegistered();
  }
});