// querySelectors
var form = document.querySelector("form");
var titleInput = document.querySelector("#title");
var bodyInput = document.querySelector("#body");
var inputs = document.querySelectorAll(".input");
var saveButton = document.querySelector(".saveBtn");
var lowerPane = document.querySelector(".lowerPane");

// eventListeners
saveButton.addEventListener("click", function (event) {
  event.preventDefault();
  var idea = createNewIdea(titleInput.value, bodyInput.value);
  addToAllIdeas(idea);
  renderAllIdeas();
  form.reset();
<<<<<<< Updated upstream
=======
  saveButton.setAttribute("disabled", "");
>>>>>>> Stashed changes
});

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", handleInputChange);
}

<<<<<<< Updated upstream
lowerPane.addEventListener('click', handleIdeaRemoval);
=======
lowerPane.addEventListener("click", function (event) {
  var button = event.target;
  if (button.classList.contains("star-btn")) {
    handleIdeaFavorite(event);
  } else if (button.classList.contains("card-delete-btn")) {
    handleIdeaRemoval(event);
  }
});
>>>>>>> Stashed changes

// global variables
var allIdeas = [];
var savedIdeas = [];

// functions
function createNewIdea(title, body) {
  return {
    title: title,
    body: body,
    id: Date.now(),
  };
}

function addToAllIdeas(idea) {
  allIdeas.push(idea);
}

function createCard(idea) {
  var cardContainer = document.createElement("div");
  cardContainer.classList.add("card");
  cardContainer.id = idea.id;

  var cardBtnContainer = document.createElement("div");
  cardBtnContainer.classList.add("card-btn-container");
  cardContainer.appendChild(cardBtnContainer);

  var deleteBtn = document.createElement("button");
  deleteBtn.classList.add("card-delete-btn");
  cardBtnContainer.appendChild(deleteBtn);

<<<<<<< Updated upstream
  var title = document.createElement('h3');
  title.classList.add('cardTitle');
=======
  var starBtn = document.createElement("button");
  starBtn.classList.add("star-btn");
  cardBtnContainer.appendChild(starBtn);

  var title = document.createElement("h3");
  title.classList.add("cardTitle");
>>>>>>> Stashed changes
  title.innerText = idea.title;
  cardContainer.appendChild(title);

  var body = document.createElement("p");
  body.classList.add("cardBody");
  body.innerText = idea.body;
  cardContainer.appendChild(body);

  return cardContainer;
}

function renderAllIdeas() {
  lowerPane.innerHTML = "";

  for (var i = 0; i < allIdeas.length; i++) {
    var card = createCard(allIdeas[i]);
    lowerPane.appendChild(card);
  }
}

function checkIfFilledOut() {
  return titleInput.value !== "" && bodyInput.value !== "";
}

function updateSaveButton(isFilledOut) {
  if (isFilledOut) {
<<<<<<< Updated upstream
      saveButton.removeAttribute('disabled');
      saveButton.classList.add('enabled');
    } else {
      saveButton.setAttribute('disabled', '');
      saveButton.classList.remove('enabled');
    }
=======
    saveButton.removeAttribute("disabled");
    saveButton.classList.add("enabled");
  } else {
    saveButton.setAttribute("disabled", "");
    saveButton.classList.remove("enabled");
  }
>>>>>>> Stashed changes
}

function handleInputChange() {
  var isFilledOut = checkIfFilledOut();
  updateSaveButton(isFilledOut);
}

function removeIdeaFromArray(event) {
  var card = event.target.closest(".card");

  for (var i = 0; i < allIdeas.length; i++) {
    if (allIdeas[i].id === parseInt(card.id)) {
      allIdeas.splice(i, 1);
    }
  }
}

function handleIdeaRemoval(event) {
  removeIdeaFromArray(event);
  renderAllIdeas();
<<<<<<< Updated upstream
}
=======
}

function addToFavorites(event) {
  var card = event.target.closest(".card");
  for (var i = 0; i < allIdeas.length; i++) {
    if (allIdeas[i].id === parseInt(card.id)) {
      if (allIdeas[i].isFavorite === false) {
        allIdeas[i].isFavorite = true;
      } else if (allIdeas[i].isFavorite === true) {
        allIdeas[i].isFavorite = false;
      }
    }
  }
}

function markFavorited() {
  var starButtons = document.getElementsByClassName("star-btn");
  for (var i = 0; i < allIdeas.length; i++) {
    if (allIdeas[i].isFavorite === true) {
      starButtons[i].style.background = "url(./assets/star-active.svg)";
    } else {
      starButtons[i].style.background = "url(./assets/star.svg)";
    }
  }
}

function handleIdeaFavorite(event) {
  addToFavorites(event);
  markFavorited();
}
>>>>>>> Stashed changes
