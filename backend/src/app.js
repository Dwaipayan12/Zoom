

// import express from "express";
// import {createServer} from "node:http";
// import { Server } from "socket.io";
// import mongoose from "mongoose";
// import { connectToSocket } from "./controllers/SocketManager.js";
// import cors from "cors";
// import router  from "./routes/userRoutes.js";
// const app=express();
// const server = createServer(app);
// const io=connectToSocket(server);

// app.set("port",(process.env.PORT || 3000));
// app.use(cors());
// app.use(express.json({limit:"40kb"}));
// app.use(express.urlencoded({limit:"40kb",extended:true}));
// app.use("/api/v1/users",router);

// app.get("/",(req,res)=>{
//     return res.json({"hello":"world"})
// });

// const start = async()=>{
//     const connectionDb=await mongoose.connect("mongodb+srv://bhowmikdwaipayan505:MFFg0MPm43UMkHYa@cluster0.dlau0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
//     console.log(`Mongo connected DB Host:${connectionDb.connection.host}`);
//     server.listen(app.get("port"),()=>{
//         console.log('listen 3000 port');
//     })
// }
// start();
import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/SocketManager.js";

import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
    app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://bhowmikdwaipayan505:arBqhffj762B9Ngb@cluster0video.n3bkj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0video/")
    console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`)
    server.listen(app.get("port"), () => {
        console.log("LISTENIN ON PORT 8000")
    });



}



start();