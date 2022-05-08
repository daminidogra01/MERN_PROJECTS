// Event Binding Through Code
console.log("LOAD LOGIC SCRIPT CODE");
window.addEventListener("DOMContentLoaded", bindEvents); // wait to load html
//window.addEventListener("load", bindEvents); //wait till page is loaded
function bindEvents() {
  document.getElementById("plusbt").addEventListener("click", plus);
}

var counter = 0;
var h2; // undefined
function plus() {
  counter++;
  console.log("Plus call ", counter);
  if (h2) {
    console.log("Remove it ");
    document.getElementsByClassName("container")[0].removeChild(h2);
  }
  h2 = document.createElement("h2");
  h2.className = counter % 2 == 0 ? "alert-danger" : "alert-success";

  h2.innerHTML = "<strong>Count Value is " + counter + "</strong>";
  //console.log(h2);
  document.getElementsByClassName("container")[0].appendChild(h2);
  //document.body.appendChild(h2);

  //document.getElementsByTagName('h2')[0].innerText= 'Count Value is '+counter;
}
