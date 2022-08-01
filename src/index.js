function sendMessage(){

    const message = document.getElementById("message");

    if(message.value != ""){

        const para = document.createElement("textarea");
    

        const node = document.createTextNode(message.value);
        const rowbreak = document.createElement("br");
        
        para.appendChild(node);
    
        const element = document.getElementById("testdiv");
        element.appendChild(rowbreak);
        element.appendChild(para);
    
        message.value = "";
    }



}
