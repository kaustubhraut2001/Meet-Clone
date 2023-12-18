import { io } from 'socket.io-client';
import { createContext, useState, useEffect, useContext } from 'react';


const socketcontext = createContext(null);

export const useSocket = () => {
	const socket =  useContext(socketcontext);

	return socket;
}

export const SocketProvide = (props) => {
    const[socket, setSocket] = useState();

    const { children }  =props;

    useEffect(() => {
        const socket = io();

		console.log('Socket connected', socket);
        setSocket(socket);
        return () => socket.close();
    }, [])

	socket?.on('connection_error', async(err) => {
		console.log(err.message);

		await fetch(
			'/api/socket'
		);
	});


    return ( <socketcontext.Provider value={socket}>{children}</socketcontext.Provider>
    )
}

