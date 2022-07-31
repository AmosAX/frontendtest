function sendMessage(){

    const para = document.createElement("textarea");
    const message = document.getElementById("message").value;

    const node = document.createTextNode(message);
    const rowbreak = document.createElement("br");
    
    para.appendChild(node);

    const element = document.getElementById("testdiv");
    element.appendChild(rowbreak);
    element.appendChild(para);
    

    

}
