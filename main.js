// querySelectors
var saveButton = document.querySelector(".saveBtn");
var titleInput = document.querySelector("#title");
var bodyInput = document.querySelector("#body");

var testZone = document.querySelector("p")



// eventListeners
saveButton.addEventListener('click', function() {
  // addNewIdea(titleInput.value, bodyInput.value)
  helperFunction()
})


// global variables
var savedIdeas = [];


// functions
// function addNewIdea(title, body) {
// var idea = {
//   title: title,
//   body: body,
//   id: Date.now()
//   }
//   savedIdeas.push(idea)
//   console.log(idea)
// }

function helperFunction() {
  testZone.innerText = bodyInput.value
}