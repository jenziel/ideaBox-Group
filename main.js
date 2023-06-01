// querySelectors
var form = document.querySelector('form');
var titleInput = document.querySelector("#title");
var bodyInput = document.querySelector("#body");
var inputs = document.querySelectorAll(".input");
var saveButton = document.querySelector(".saveBtn");
var lowerPane = document.querySelector(".lowerPane");

// eventListeners
saveButton.addEventListener('click', function(event) {
  event.preventDefault()
  var idea = createNewIdea(titleInput.value, bodyInput.value)
  addToAllIdeas(idea);
  renderAllIdeas();
  form.reset();
})

for(var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keypress", function() {
    checkIfEmpty();
  }) 
}

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
  cardContainer.id = idea.id;

  var title = document.createElement('h3');
  title.classList.add('cardTitle');
  title.innerText = idea.title;
  cardContainer.appendChild(title);

  var body = document.createElement('p');
  body.classList.add('cardBody');
  body.innerText = idea.body;
  cardContainer.appendChild(body);

  return cardContainer;
}

function renderAllIdeas() {
  lowerPane.innerHTML = '';

  for (var i = 0; i < allIdeas.length; i++) {
    var card = createCard(allIdeas[i]);
    lowerPane.appendChild(card);
  }
}

function checkIfEmpty() {
  return !titleInput.value && !bodyInput.value
}