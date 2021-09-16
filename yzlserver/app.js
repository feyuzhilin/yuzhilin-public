const querystring = require("querystring")
const serverHandler = (req,res)=>{
    let url = req.url
    let method = req.method
    req.path = url.split('?')[0]
    req.query = querystring.parse(url.split('?')[1])
    console.log(req.headers.cookie)
    if(method === 'GET' && req.path === '/login'){
        res.end(url.split('?')[1])
        return
    }

    res.end('success')
}
module.exports = {serverHandler}