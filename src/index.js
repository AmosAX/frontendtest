const APIToken =
  "Bearer N31fRWVMZCtwU0JeZnBQdVBjTmlOImRzcTAxfl08cz1xR2lyWGFJfmo5JC5RNSc=";
const APIUrl = "https://ha-slutuppgift-chat-do.westling.workers.dev";
const APIMessages =
  "https://ha-slutuppgift-chat-do.westling.workers.dev/api/messages";

const MessageSender = "AA&EB";

function sendMessage() {
  const message = document.getElementById("message");

  if (message.value != "") {

    addMessage(message.value, MessageSender);

    message.value = "";
  }
}

function addMessage(text, username) {

  const para = document.createElement("textarea");
  para.readOnly = true;


  const user = document.createElement("p");
  user.className = "user";
  user.innerHTML = username;

  const node = document.createTextNode(text);

  para.appendChild(node);

  const element = document.getElementById("messagebox");
  element.appendChild(user);
  element.appendChild(para);

  //scrolls away the oldest  messages
  element.scrollTop = element.scrollHeight;

}
/*
function getMessagesFromAPI() {
  fetch(APIUrl)
    .then((response) => {
      console.log("This is working"); // handle the response
    })
    .catch((error) => {
      console.log("This is NOT working");
      // handle the error
    });
}
*/

async function getMessagesFromAPI() {
  fetch(
    "https://ha-slutuppgift-chat-do.westling.workers.dev/api/messages",
    {
      method: "get",
      headers: {
        Authorization:
          "Bearer N31fRWVMZCtwU0JeZnBQdVBjTmlOImRzcTAxfl08cz1xR2lyWGFJfmo5JC5RNSc=",
      },
    }
  )
    .then((x) => x.json())
    //Here we need to put a for loop

    .then((data) => {

      var messages = data["messages"];

      for (m of messages){
        addMessage(JSON.stringify(m["message"]), JSON.stringify(m["user"]).replaceAll("\"",''));
      }



    });
}


function sendMessageToAPI() {
  
  const data = {
    user: MessageSender,
    message: document.getElementById("message").value,
  };

  fetch(
    "https://ha-slutuppgift-chat-do.westling.workers.dev/api/messages/append",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer N31fRWVMZCtwU0JeZnBQdVBjTmlOImRzcTAxfl08cz1xR2lyWGFJfmo5JC5RNSc=",
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
