const WebSocket = require('ws');
; (() => {
    const server = new WebSocket.Server({
        port: 8080
    });


    const init = () => {
        bindEvent()
    }
    function bindEvent() {
        server.on('connection', handleConnection);
        server.on('open', handleOpen);
    }
    function handleOpen(e){
        console.log("handleOpen")
    }
    function handleConnection(ws) {
        ws.on('message', handleMessage)
    }
    function handleMessage(message) {
        server.clients.forEach(c => {
            c.send(`${message}`, (err) => {
                if (err) {
                    console.log(`[SERVER] error: ${err}`);
                }
            });
        })
    }
    init()
})()