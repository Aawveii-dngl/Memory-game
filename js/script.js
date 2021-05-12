document.addEventListener("DOMContentLoaded", () => {
  let itemArray = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
  ];
  itemArray.sort(() => 0.5 - Math.random());
  var box = document.querySelector(".box");
  let score = document.querySelector("#score");
  var cardChoosen = [];
  var cardChoosenId = [];
  var cardWon = [];

  function createBoard() {
    for (let i = 0; i < itemArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("id", i);
      card.addEventListener("click", flip);
      box.appendChild(card);
    }
  }
  createBoard();

  //Image check
  function CheckforMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardChoosenId[0];
    const optionTwoId = cardChoosenId[1];
    console.log(optionOneId, optionTwoId);
    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("You have clicked the same image!");
    } else if (cardChoosen[0] === cardChoosen[1]) {
      cards[optionOneId].setAttribute("src", "/images/white.png");
      cards[optionTwoId].setAttribute("src", "/images/white.png");
      alert("You have choosen correctly");
      cardWon.push(cardChoosen);
    } else {
      cards[optionOneId].setAttribute("src", "/images/blank.png");
      cards[optionTwoId].setAttribute("src", "/images/blank.png");
      alert("Sorry try again");
    }
    cardChoosen = [];
    cardChoosenId = [];
    console.log("Score part");
    score.textContent = cardWon.length;
    if (cardWon.length === itemArray.length / 2) {
      score.textContent = "Congratulations! You found them all!";
    }
  }
  //Flip your card
  function flip() {
    var cardId = this.getAttribute("id"); //Used to get value
    // console.log(this);
    cardChoosen.push(itemArray[cardId].name);
    cardChoosenId.push(cardId);
    this.setAttribute("src", itemArray[cardId].img);
    if (cardChoosen.length === 2) {
      setTimeout(CheckforMatch, 500);
    }
  }
});
