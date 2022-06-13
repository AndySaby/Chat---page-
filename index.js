let send = document.getElementById("send");
let Div = document.getElementById("messageDiv")
// let sendMesaage = document.getElementById("text6")


function auto(){
    
}

send.addEventListener("click", (event) =>{
    event.preventDefault();
    let sendMesaage = document.getElementById("text6");

    let senderp= document.createElement("p");
    Div.appendChild(senderp);
    senderp.style.color = "white"
    senderp.style.borderRadius = "20px"
    senderp.style.backgroundColor = " #293B79"
    senderp.style.margin = "20px 24px 0 500px"
    senderp.style.padding = " 20px"
    senderp.style.display = " block"
    // senderp.style.flexDirection = "column"
    senderp.innerHTML = sendMesaage.value;
    sendMesaage.innerHTML = "";

    
    if (sendMesaage.value.toLowerCase().includes('hello')){
        let autoReply = document.createElement("p")
        autoReply.style.color = "white"
        autoReply.style.borderRadius = "20px"
        autoReply.style.backgroundColor = "  #485578"
        autoReply.style.margin = "20px 500px 0 24px"
        autoReply.style.padding = " 20px"
        autoReply.style.display = " block"
        Div.appendChild(autoReply)
        autoReply.innerHTML = "Welcome, Newbie";
    
    }
    
})

