import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Socket, Server } from 'socket.io';

const app = express();
app.use(cors());

const httpServer = createServer(app);


app.get('/', (request, response) => {
    return response.json({message: "hello world"});
});

const io = new Server(httpServer, {
    cors: { origin: "*" }
});

io.on('connection', (socket: Socket) => {
    console.log("New user connected....");
});

httpServer.listen(3333);