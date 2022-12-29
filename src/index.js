const APIToken =
  "Bearer N31fRWVMZCtwU0JeZnBQdVBjTmlOImRzcTAxfl08cz1xR2lyWGFJfmo5JC5RNSc=";
const APIUrl = "https://ha-slutuppgift-chat-do.westling.workers.dev";
const APIMessages =
  "https://ha-slutuppgift-chat-do.westling.workers.dev/api/messages";

const APIAppend = "https://ha-slutuppgift-chat-do.westling.workers.dev/api/messages/append";

const MessageSender = "AA&EB";

function sendMessage() {
  const message = document.getElementById("message");

  if (message.value != "") {
    const element = document.getElementById("messagebox");
    element.appendChild(
    appendMessage(message.value, MessageSender)
    );
    element.scrollTop = element.scrollHeight;ageToAPI();

    message.value = "";
  }
}

function appendMessage(text, username){

  const para = document.createElement("p");
  para.className += "mess";
  para.readOnly = true;

  const user = document.createElement("p");
  user.className = "user";
  user.innerHTML = username;

  const linebreak = document.createElement("br");

  const node = document.createTextNode(text);

  para.appendChild(node);
  user.prepend(linebreak);

  const div = document.createElement("div");

  div.appendChild(user);
  div.appendChild(para);
  return div;
}

async function getMessagesFromAPI() {
  fetch(APIMessages, {
    method: "get",
    headers: {
      Authorization:
        APIToken,
    },
  })
    .then((x) => x.json())
    //Here we need to put a for loop

    .then((data) => {
      var messages = data["messages"];
      const frag = document.createDocumentFragment();

      for (m of messages) {
        //this could be template literals
        frag.prepend(
        appendMessage(
          JSON.stringify(m["message"]).replaceAll('"', ""),
          JSON.stringify(m["user"]).replaceAll('"', "")
        ));
      }
      const element = document.getElementById("messagebox");
      element.append(frag);
      element.scrollTop = element.scrollHeight;
    });
}

function sendMessageToAPI() {
  const data = {
    user: MessageSender,
    message: document.getElementById("message").value,
  };

  fetch(
    APIAppend,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          APIToken,
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function refreshChat() {
  document.getElementById("messagebox").innerHTML = "";
  getMessagesFromAPI();
}
