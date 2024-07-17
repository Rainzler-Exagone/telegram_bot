const { axiosInstance } = require("./axios");

function sendMessage(messageObj,messageText) {
    return axiosInstance.get("sendMessage",{
        chat_id : messageObj.chat.id,
        text : messageText
    })
}

function handleMessage(messageObj){
  const messageText = messageObj.text || "";


  if (messageText.charAt[0] === "/") {
    const command = messageText.substr(1)
    switch (command) {
        case "start":
            
           return sendMessage(
            messageObj,
            "Hi! I am a bot , I can help to get started",
           )
    
        default:
           return sendMessage(
            messageObj, "Hey hi , i don't know that command"
           )
    }
  }
  else{
    return sendMessage(messageObj,messageText)
  }
}

module.export = {handleMessage}