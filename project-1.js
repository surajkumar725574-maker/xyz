console.log("js file connected");
function addTask(){

  let input =
    document.getElementById("taskInput");

  let taskList =
    document.getElementById("taskList");

  if(!input || !taskList) return;

  if(input.value.trim()===""){
    alert("Enter task");
    return;
  }

  let li=document.createElement("li");

  li.innerHTML=`
    <span>${input.value}</span>

    <button
      class="delete-btn"
      onclick="removeTask(this)"
    >
      Remove
    </button>
  `;

  taskList.appendChild(li);

  input.value="";
}

function removeTask(button){
  button.parentElement.remove();
}

function createCalendar(){

  let calendar =
    document.getElementById("calendar");

  if(!calendar) return;

  for(let i=0;i<80;i++){

    let dot=document.createElement("div");

    dot.classList.add("dot");

    if(Math.random()>0.35){
      dot.classList.add("green");
    }
    else{
      dot.classList.add("red");
    }

    calendar.appendChild(dot);
  }
}

createCalendar();

async function sendMessage() {

  let input =
    document.getElementById("chatInput");

  let chatMessages =
    document.getElementById("chatMessages");

  if(!input || !chatMessages) return;

  let message = input.value.trim();

  if(message === ""){
    alert("Type something");
    return;
  }

  let userMsg = document.createElement("div");

  userMsg.classList.add("user-message");

  userMsg.innerText = message;

  chatMessages.appendChild(userMsg);

  input.value = "";

  let botMsg = document.createElement("div");

  botMsg.classList.add("bot-message");

  botMsg.innerText = "Thinking...";

  chatMessages.appendChild(botMsg);

  try {

    const response = await fetch(
      "https://prepilot.onrender.com/",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          message: message
        })
      }
    );

    const data = await response.json();

    botMsg.innerText = data.reply;

  } catch(error){

    botMsg.innerText =
      "Could not connect to AI backend.";

    console.log(error);
  }
}

async function generatePlan(){

  let search =
    document.getElementById("studySearch");

  let result =
    document.getElementById("studyResult");

  if(!search || !result) return;

  let value=search.value.trim();

  if(value===""){
    alert("Enter topic");
    return;
  }

  result.innerHTML=
    "<p>Generating AI plan...</p>";

  try{

    const response=await fetch(
      "https://prepilot.onrender.com",
      {
        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({
          topic:value
        })
      }
    );

    const data=await response.json();

    result.innerHTML=`
      <h2>${value}</h2>

      <pre>${data.result}</pre>
    `;

  }catch(error){

    result.innerHTML=
      "<p>Backend connection failed.</p>";

    console.log(error);
  }
}

function uploadNote(){

  let fileInput =
    document.getElementById("noteFile");

  let message =
    document.getElementById("uploadMessage");

  if(!fileInput || !message) return;

  if(fileInput.files.length===0){

    message.innerText=
      "Choose file first";

    return;
  }

  message.innerText=
    "Uploaded: "+
    fileInput.files[0].name;
}

function createAssignment(){

  let title =
    document.getElementById("assignmentTitle");

  let details =
    document.getElementById("assignmentDetails");

  let list =
    document.getElementById("assignmentList");

  if(!title || !details || !list) return;

  let li=document.createElement("li");

  li.innerHTML=`
    <span>
      <b>${title.value}</b><br>
      ${details.value}
    </span>

    <button
      class="delete-btn"
      onclick="removeTask(this)"
    >
      Remove
    </button>
  `;

  list.appendChild(li);

  title.value="";
  details.value="";
}
document.querySelectorAll(".subject-card").forEach((card) => {
  card.addEventListener("click", () => {
    const input = document.getElementById("chatInput");

    if (input) {
      input.value = "Explain " + card.innerText + " in simple words.";
      sendMessage();
    }
  });
});

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    const input = document.getElementById("studySearch");

    if (input) {
      input.value = card.innerText;
      generatePlan();
    }
  });
});
function openFile(fileName) {
  alert(fileName + " selected. File upload/open feature will be added later.");
}