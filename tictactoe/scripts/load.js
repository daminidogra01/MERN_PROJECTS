window.addEventListener("load", askUserName);
function askUserName() {
  let firstPlayer = prompt("Enter First Player Name ", "");
  let secondPlayer = prompt("Enter Second Player Name ", "");
  document.getElementById(
    "players"
  ).innerText = `First Player ${firstPlayer} Second Player ${secondPlayer}`;
}
