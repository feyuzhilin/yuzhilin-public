const WebSocket = require('ws');
const wss = new WebSocket.Server({
    port: 8080
});

wss.on('connection', function (ws) {
    ws.on('message', function (message) {
        wss.clients.forEach(c=>{
            c.send(`${message}`, (err) => {
                if (err) {
                    console.log(`[SERVER] error: ${err}`);
                }
            });
        })
    })
});