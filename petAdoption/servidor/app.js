const express = require('express');
const app = express();
const https = require('https');
const fs = require ('fs');
const privatekey = fs.readFileSync('./server.key','utf-8');
const certificate = fs.readFileSync('./server.cert','utf-8');
const port = 3001;
const router = require("./router/routers.js")
const cors = require("cors");
const credentials = {key:privatekey, cert: certificate}
const httpsServer = https.createServer(credentials,app)

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Aloha desde node")
})

app.use("/", router);
app.use((req,res,next)=>{
    if (req.secure){
        next();
    } else{
        res.redirect(`https://${req.headers.host}${req.url}`)
    }
})

httpsServer.listen(port, () => console.log(`Servidor iniciado correctamente en el puerto ${port}`));
