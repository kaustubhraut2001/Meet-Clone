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

            socket?.emit('join-room' ,(roomid , userid)=>{
                console.log("joined room");
                socket.join(roomid);
                socket.broadcast.to(roomid).emit('user-connected' , userid);
                console.log("user connected" , userid);

            });
        });

    }

    res.end();
}

export default SocketHandler;