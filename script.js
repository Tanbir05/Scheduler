const inputtask = document.getElementById("addtask");
const tasklist = document.querySelector("#pendingtask");
function addtask(){
  if(inputtask.value === ''){
    alert("You must enter something!");
  }
  else{
    let div = document.createElement("div");
    div.innerHTML = `<div class="list"><span><img src="icons/unchecked.svg"  id="checkbox"> ${inputtask.value} </span> <img src="icons/cross.svg" id="deletebtn"></div>`;
    tasklist.appendChild(div)
  }

  inputtask.value = ''; 
}

const checkbox = document.querySelector("#checkbox")

function check(){
  if (checkbox.src == "icons/unchecked.svg") {
      checkbox.src = "icons/checked.svg";
  } 
  else {
      checkbox.src = "icons/unchecked.svg";
  }
}
