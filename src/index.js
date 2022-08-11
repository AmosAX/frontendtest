const APIToken =
  "Bearer N31fRWVMZCtwU0JeZnBQdVBjTmlOImRzcTAxfl08cz1xR2lyWGFJfmo5JC5RNSc=";
const APIUrl = "https://ha-slutuppgift-chat-do.westling.workers.dev";
const APIMessages =
  "https://ha-slutuppgift-chat-do.westling.workers.dev/api/messages";

function sendMessage() {
  const message = document.getElementById("message");

  if (message.value != "") {
    const para = document.createElement("textarea");
    para.readOnly = true;

    const node = document.createTextNode(message.value);
    const rowbreak = document.createElement("br");

    para.appendChild(node);

    const element = document.getElementById("messagebox");
    element.appendChild(rowbreak);
    element.appendChild(para);

    //scrolls away the oldest  messages
    element.scrollTop = element.scrollHeight;

    message.value = "";
  }
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
  let x = fetch(
    "https://ha-slutuppgift-chat-do.westling.workers.dev/api/messages",
    {
      method: "get",
      headers: {
        Authorization:
          "Bearer N31fRWVMZCtwU0JeZnBQdVBjTmlOImRzcTAxfl08cz1xR2lyWGFJfmo5JC5RNSc=",
      },
    }
  )
    .then((x) => x.text())
    .then((y) => (document.getElementById("chatlog").innerHTML = y));
}
