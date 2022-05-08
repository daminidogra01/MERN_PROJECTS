window.addEventListener("load", bindEvents);
// Buttons Attach Event Listener
let buttons;
function bindEvents() {
  buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", printXorZero);
  }
}
let isXorZero = true;

const isNotBlankButton = (button)=>
    button.innerText.length>0


const isSameValue= (one, two, three)=>
   one.innerText == two.innerText && one.innerText == three.innerText;


function isRowSame(one, two, three){
  if(isNotBlankButton(one) && isNotBlankButton(two) && isNotBlankButton(three)){
      if(isSameValue(one,two,three)){
        return true;
      }
  }
  return false;


}

function isGameOver(){
  return (isRowSame(buttons[0], buttons[1], buttons[2])
   || isRowSame(buttons[3], buttons[4], buttons[5])
|| isRowSame(buttons[6], buttons[7], buttons[8])
|| isRowSame(buttons[0], buttons[3], buttons[6])
|| isRowSame(buttons[1], buttons[4], buttons[7])
|| isRowSame(buttons[2], buttons[5], buttons[8])
|| isRowSame(buttons[0], buttons[4], buttons[8])
|| isRowSame(buttons[2], buttons[4], buttons[6])
   );


}

let count = 0;
let isGameFinish = false;
function printXorZero() {

  // print on Button, On Which Button
  console.log(this); // this is a reserved keyword and it hold the current calling object reference
  if(!isGameFinish && this.innerText.length==0){
  this.innerText = isXorZero ? "X" : "0";
  isXorZero = !isXorZero;
  count++;
  if(count >=5){
    if(isGameOver()){
      isGameFinish = true;
      document.getElementById('result').innerText = 'Game Over';
      //alert("Game Over !");
      return ;
    }
  }
}
}