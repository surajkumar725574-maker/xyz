// TASKS

function addTask() {
  let input = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (!input || !taskList) return;

  if (input.value.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  let li = document.createElement("li");

  li.innerHTML = `
    <span>${input.value}</span>
    <button class="delete-btn" onclick="removeTask(this)">
      Remove
    </button>
  `;

  taskList.appendChild(li);

  input.value = "";
}

function removeTask(button) {
  button.parentElement.remove();
}

// CALENDAR

function createCalendar() {
  let calendar = document.getElementById("calendar");

  if (!calendar) return;

  for (let i = 0; i < 80; i++) {
    let dot = document.createElement("div");

    dot.classList.add("dot");

    if (Math.random() > 0.35) {
      dot.classList.add("green");
    } else {
      dot.classList.add("red");
    }

    calendar.appendChild(dot);
  }
}

createCalendar();

// CHATBOX

function sendMessage() {
  let input = document.getElementById("chatInput");
  let chatMessages = document.getElementById("chatMessages");

  if (!input || !chatMessages) return;

  let message = input.value.trim();

  if (message === "") {
    alert("Please type something.");
    return;
  }

  let userMsg = document.createElement("div");

  userMsg.classList.add("user-message");

  userMsg.innerText = message;

  chatMessages.appendChild(userMsg);

  let botMsg = document.createElement("div");

  botMsg.classList.add("bot-message");

  botMsg.innerText =
    "API is not connected yet.";

  chatMessages.appendChild(botMsg);

  input.value = "";

  chatMessages.scrollTop =
    chatMessages.scrollHeight;
}

// STUDY GENERATOR
<<<<<<< HEAD
async function generatePlan() {

  let search = document.getElementById("studySearch");

  let result = document.getElementById("studyResult");
=======

function generatePlan() {
  let search =
    document.getElementById("studySearch");

  let result =
    document.getElementById("studyResult");
>>>>>>> b446b31a794524af9a35ca18121b5131229af6b8

  if (!search || !result) return;

  let value = search.value.trim();

  if (value === "") {
    alert("Please enter a topic.");
    return;
  }

  result.innerHTML = `
<<<<<<< HEAD
    <p>Generating AI study plan...</p>
  `;

  try {

    const response = await fetch(
      "http://localhost:3000/generate-plan",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          topic: value,
        }),
      }
    );

    const data = await response.json();

    result.innerHTML = `
      <h2>Study Plan for: ${value}</h2>

      <pre>${data.result}</pre>
    `;

  } catch (error) {

    result.innerHTML = `
      <p>Could not connect to AI backend.</p>
    `;

    console.log(error);
  }
}

// TEACHER SECTION

function uploadNote() {
  let fileInput =
    document.getElementById("noteFile");

  let message =
    document.getElementById("uploadMessage");

  if (!fileInput || !message) return;

  if (fileInput.files.length === 0) {
    message.innerText =
      "Please choose a file first.";

    message.style.color = "red";

    return;
  }

  message.innerText =
    "File selected: " +
    fileInput.files[0].name;

  message.style.color = "green";
}

function createAssignment() {
  let title =
    document.getElementById("assignmentTitle");

  let details =
    document.getElementById("assignmentDetails");

  let list =
    document.getElementById("assignmentList");

  if (!title || !details || !list) return;

  if (
    title.value.trim() === "" ||
    details.value.trim() === ""
  ) {
    alert("Please fill all fields.");
    return;
  }

=======
    <h2>Study Plan for: ${value}</h2>

    <ul>
      <li>Learn theory</li>
      <li>Make notes</li>
      <li>Solve beginner questions</li>
      <li>Solve PYQs</li>
      <li>Revise mistakes</li>
    </ul>
  `;
}

// TEACHER SECTION

function uploadNote() {
  let fileInput =
    document.getElementById("noteFile");

  let message =
    document.getElementById("uploadMessage");

  if (!fileInput || !message) return;

  if (fileInput.files.length === 0) {
    message.innerText =
      "Please choose a file first.";

    message.style.color = "red";

    return;
  }

  message.innerText =
    "File selected: " +
    fileInput.files[0].name;

  message.style.color = "green";
}

function createAssignment() {
  let title =
    document.getElementById("assignmentTitle");

  let details =
    document.getElementById("assignmentDetails");

  let list =
    document.getElementById("assignmentList");

  if (!title || !details || !list) return;

  if (
    title.value.trim() === "" ||
    details.value.trim() === ""
  ) {
    alert("Please fill all fields.");
    return;
  }

>>>>>>> b446b31a794524af9a35ca18121b5131229af6b8
  let li = document.createElement("li");

  li.innerHTML = `
    <span>
      <b>${title.value}</b><br>
      ${details.value}
    </span>

    <button class="delete-btn"
    onclick="removeTask(this)">
      Remove
    </button>
  `;

  list.appendChild(li);

  title.value = "";
  details.value = "";
}

function addTopic() {
  let input =
    document.getElementById("topicInput");

  let list =
    document.getElementById("topicList");

  if (!input || !list) return;

  if (input.value.trim() === "") {
    alert("Please enter a topic.");
    return;
  }

  let li = document.createElement("li");

  li.innerHTML = `
    <span>${input.value}</span>

    <button class="delete-btn"
    onclick="removeTask(this)">
      Remove
    </button>
  `;

  list.appendChild(li);

  input.value = "";
<<<<<<< HEAD
}
=======
}
>>>>>>> b446b31a794524af9a35ca18121b5131229af6b8
