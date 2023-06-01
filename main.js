// querySelectors
var saveButton = document.querySelector(".saveBtn");
var titleInput = document.querySelector("#title");
var bodyInput = document.querySelector("#body");
var lowerPane = document.querySelector(".lowerPane");

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

function createCard(idea) {
  var cardContainer = document.createElement('div');
  cardContainer.classList.add('card')

  var title = document.createElement('h3');
  title.innerText = idea.title;
  cardContainer.appendChild(title);

  var body = document.createElement('p');
  body.innerText = idea.body;
  cardContainer.appendChild(body);

  lowerPane.appendChild(cardContainer);
}

createCard({
  title: 'Title',
  body: 'Body',
  id: Date.now(),
});