// querySelectors
var form = document.querySelector("form");
var titleInput = document.querySelector("#title");
var bodyInput = document.querySelector("#body");
var inputs = document.querySelectorAll(".input");
var saveButton = document.querySelector(".save-btn");
var lowerPane = document.querySelector(".lower-pane");
var filterBtn = document.querySelector(".filter-btn");

// eventListeners
saveButton.addEventListener("click", function (event) {
  event.preventDefault();
  var idea = createNewIdea(titleInput.value, bodyInput.value);
  addToAllIdeas(idea);
  handleRendering();
  form.reset();
  saveButton.setAttribute("disabled", "");
});

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", handleInputChange);
}

lowerPane.addEventListener("click", function (event) {
  var button = event.target;
  if (button.classList.contains("star-btn")) {
    handleIdeaFavorite(event);
  } else if (button.classList.contains("card-delete-btn")) {
    handleIdeaRemoval(event);
  }
});

filterBtn.addEventListener("click", handleFilterButton);

// global variables
var allIdeas = [];

var display = { isDisplaying: "all" };

// functions
function createNewIdea(title, body) {
  return {
    title: title,
    body: body,
    id: Date.now(),
    isFavorite: false,
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

  var starBtn = document.createElement("button");
  starBtn.classList.add("star-btn");
  cardBtnContainer.appendChild(starBtn);

  var title = document.createElement("h3");
  title.classList.add("card-title");
  title.innerText = idea.title;
  cardContainer.appendChild(title);

  var body = document.createElement("p");
  body.classList.add("card-body");
  body.innerText = idea.body;
  cardContainer.appendChild(body);

  return cardContainer;
}

function renderAllIdeas() {
  lowerPane.innerHTML = "";

  for (var i = 0; i < allIdeas.length; i++) {
    var card = createCard(allIdeas[i]);
    if (allIdeas[i].isFavorite) {
      card.classList.add("orange-star-btn");
    }
    lowerPane.appendChild(card);
  }
}

function checkIfFilledOut() {
  return titleInput.value !== "" && bodyInput.value !== "";
}

function updateSaveButton(isFilledOut) {
  if (isFilledOut) {
    saveButton.removeAttribute("disabled");
    saveButton.classList.add("enabled");
  } else {
    saveButton.setAttribute("disabled", "");
    saveButton.classList.remove("enabled");
  }
}

function handleInputChange() {
  var isFilledOut = checkIfFilledOut();
  updateSaveButton(isFilledOut);
}

function removeIdeaFromArrays(event) {
  var card = event.target.closest(".card");

  for (var i = 0; i < allIdeas.length; i++) {
    if (allIdeas[i].id === parseInt(card.id)) {
      allIdeas.splice(i, 1);
    }
  }
}

function handleIdeaRemoval(event) {
  removeIdeaFromArrays(event);
  handleRendering();
}

function renderFavoritedIdeas() {
  lowerPane.innerHTML = "";

  for (var i = 0; i < allIdeas.length; i++) {
    if (allIdeas[i].isFavorite) {
      var card = createCard(allIdeas[i]);
      card.classList.add("orange-star-btn");
      lowerPane.appendChild(card);
    }
  }
}

function updateFilterButton(event) {
  if (event.target.innerText.includes("Starred")) {
    event.target.innerText = "Show All Ideas";
  } else {
    event.target.innerText = "Show Starred Ideas";
  }
}

function handleFilterButton(event) {
  if (display.isDisplaying === "all") {
    display.isDisplaying = "starred";
  } else {
    display.isDisplaying = "all";
  }
  handleRendering();
  updateFilterButton(event);
}

function handleRendering() {
  if (display.isDisplaying === "all") {
    renderAllIdeas();
  } else {
    renderFavoritedIdeas();
  }
}

function addToFavorites(event) {
  var card = event.target.closest(".card");
  for (var i = 0; i < allIdeas.length; i++) {
    if (allIdeas[i].id === parseInt(card.id)) {
      if (!allIdeas[i].isFavorite) {
        allIdeas[i].isFavorite = true;
      } else {
        allIdeas[i].isFavorite = false;
      }
    }
  }
}

function markFavorited() {
  var starButtons = document.getElementsByClassName("star-btn");
  for (var i = 0; i < allIdeas.length; i++) {
    if (allIdeas[i].isFavorite) {
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