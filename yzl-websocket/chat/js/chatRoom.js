; ((doc, storage, location, WebSocket) => {
    const oSendInput = doc.querySelector('#sendInput')
    const oChatList = doc.querySelector('#chat-list')
    let ws = new WebSocket('ws://localhost:8080/')
    let username = ''
    const init = () => {
        bindEvent()
    }
    function bindEvent() {
        oSendInput.addEventListener("keypress", sendMassage, false)
        ws.addEventListener("open", handleOpen, false)
        ws.addEventListener("close", handleClose, false)
        ws.addEventListener("message", handleMassage, false)
    }
    function handleOpen() {
        username = storage.getItem("username")
        if(!username){
            location.href = 'home.html'
        }
        console.log("handleOpen")
    }
    function handleClose() {
        console.log("handleclose")
    }
    function handleMassage(e) {
        let data = JSON.parse(e.data)
        console.log(data)
        let listItem = doc.createElement('li')
        listItem.innerHTML = `
            <p>${data.username}:</p>
            <p>时间：${new Date(data.time)}</p>
            <p>${data.message}</p>
        `
        oChatList.appendChild(listItem)
    }
    function sendMassage(e) {
        if (e.keyCode !== 13) return;
        let msg = oSendInput.value
        if (msg.trim().length) {
            ws.send(JSON.stringify({
                username:username,
                time:new Date().getTime(),
                message:msg
            }))
        }
        oSendInput.value = ''
    }
    init()

})(document, localStorage, location, WebSocket);