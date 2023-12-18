import { Server } from "socket.io";
const SocketHandler = (req, res) => {

    console.log("inside socket handler");

    if (res.socket.server.io) {
        console.log("already have");
        // return res.end();

    } else {

        const io = new Server(res.socket.server);
        res.socket.server.io = io;
        io.on('connection', (socket) => {
            console.log("Server is connected", socket.id);
        });
    }

    res.end();
}

export default SocketHandler;