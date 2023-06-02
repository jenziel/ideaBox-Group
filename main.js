// querySelectors
var form = document.querySelector('form');
var titleInput = document.querySelector("#title");
var bodyInput = document.querySelector("#body");
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

  var cardBtnContainer = document.createElement('div');
  cardBtnContainer.classList.add('card-btn-container');
  cardContainer.appendChild(cardBtnContainer);

  var deleteBtn = document.createElement('button');
  deleteBtn.classList.add('card-delete-btn');
  cardBtnContainer.appendChild(deleteBtn);

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