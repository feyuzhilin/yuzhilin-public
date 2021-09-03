; ((doc, storage, location, WebSocket, window) => {
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
        ws.addEventListener("message", handleMassage, false)
    }
    function handleOpen() {
        username = storage.getItem("username")
        if (!username) {
            location.href = 'home.html'
        }
        ws.send(JSON.stringify({
            type: 0,
            username: username,
            time: new Date().getTime(),
        }))

    }
    window.onbeforeunload = () => {
        ws.send(JSON.stringify({
            type: 2,
            username: username,
            time: new Date().getTime(),
        }))
        storage.removeItem("username")
    }
    function handleMassage(e) {
        let data = JSON.parse(e.data)
        renderMsg(data)
    }
    function sendMassage(e) {
        if (e.keyCode !== 13) return;
        let msg = oSendInput.value
        if (msg.trim().length) {
            ws.send(JSON.stringify({
                username: username,
                time: new Date().getTime(),
                message: msg
            }))
        }
        oSendInput.value = ''
    }
    function renderMsg(data) {
        let listItem = doc.createElement('div')
        if (data.type === 0 || data.type === 2) {
            listItem.innerHTML = `
                <div class="center">
                    <span class="tip">${data.username}${data.type === 0 ? '加入了群聊' : '退出了群聊'}</span>
                    <span class="tip-time">${timestampToTime(data.time)}</span>
                </div>
            `
            oChatList.appendChild(listItem)
            return
        }
        if (username === data.username) {
            listItem.innerHTML = `
            <div class="right">
                <p class="username">${data.username}:</p>
                <p class="time">${timestampToTime(data.time)}</p>
                <p class="msg">${data.message}</p>
            </div>
        `
        } else {
            listItem.innerHTML = `
            <div >
                <p class="username">${data.username}:</p>
                <p class="time">${timestampToTime(data.time)}</p>
                <p class="msg">${data.message}</p>
            </div>
        `
        }
        oChatList.appendChild(listItem)
    }
    function timestampToTime(timestamp) {
        var date = new Date(timestamp);
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());

        strDate = Y + M + D + h + m + s;
        return strDate;

    }
    init()

})(document, localStorage, location, WebSocket, window);