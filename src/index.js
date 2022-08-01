function sendMessage(){

    const message = document.getElementById("message");

    if(message.value != ""){

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
