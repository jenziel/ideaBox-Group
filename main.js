// querySelectors
var saveButton = document.querySelector(".saveBtn");
var titleInput = document.querySelector("#title");
var bodyInput = document.querySelector("#body");





// eventListeners
saveButton.addEventListener('click', function(event) {
  event.preventDefault()
  var idea = createNewIdea(titleInput.value, bodyInput.value)
  addToAllIdeas(idea)
})


// global variables
var allIdeas = [];
var savedIdeas = [];


// functions
function createNewIdea(title, body) {
  return {
    title: title,
    body: body,
    id: Date.now()
  }
}

function addToAllIdeas(idea) {
  allIdeas.push(idea)
}
