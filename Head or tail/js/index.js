const username_submit = (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  if (username.length <= 5) {
    alert("User name should be 5 characyer long.");
    return;
  }
  //success
  document.getElementById("user").innerHTML = username;

  //Hide usernam div
  document.getElementById("username_div").style.display = "none";
  //show game div
  document.getElementById("game_div").style.display = "block";
};
const start_game = (side) => {
  //showing flipping div

  document.getElementById("flipping").style.display = "block";
  document.getElementById("results").style.display = "none";
  setTimeout(() => {
    get_results(side);
    document.getElementById("flipping").style.display = "none";
    document.getElementById("results").style.display = "block";
  }, 1000);
  //alert(side);
};
const get_results = (side) => {
  const coin_side = Math.floor(Math.random() * (2 - 1 + 1) + 1);
  let flipped_side = "";

  if (coin_side === 1) {
    flipped_side = "Head";
  } else {
    flipped_side = "Tail";
  }
  document.getElementById("results").innerHTML =
    "Coin flipped : <h1>" + flipped_side + "</h1>";
  if (coin_side === 1) {
    //head
    if (side === "head") {
      won();
    } else {
      lost();
    }
  } else {
    //tail
    if (side === "tail") {
      won();
    } else {
      lost();
    }
  }
};
const won = () => {
  setTimeout(() => {
    alert("You won!!");
  }, 1000);
};
const lost = () => {
  setTimeout(() => {
    alert("You lost!!");
  }, 1000);
};
