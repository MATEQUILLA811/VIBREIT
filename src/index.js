const express = require("express")
const app = express();
const cors = require('cors');


app.use(cors({ origin: '*' }));

app.use(express.json());

const Server = require("http").createServer(app);
const io = require("socket.io")(Server,{
    cors:{
        origin:"*",
    }
})

app.set("port",process.env.PORT || 3000)

io.on('connection', socket=>{
    socket.emit('msg','hello')
    socket.on("user:conection",(ev)=>{
        //console.log(ev)
        io.emit("server:established",ev)
    })
    socket.on("user:Vibrate",(ev)=>{
        io.emit("user:Vibrate",ev)
    })

})


app.get("/",(req,res)=>{
    const data = {
        nombre:"jasminfxcg",
        apellido:"llacuacvghb"
    }

    res.send("complete :)")
})

/**
 * *run server*/
Server.listen(app.get("port"),()=>{
    console.log("on port : ",app.get("port"))
})

console.log("PORT RUNNING",3000)