import { useSocket } from "@/context/socket"
import { useEffect } from "react";

export default function Home() {

  const socket = useSocket();

  useEffect (() => {

    socket?.on('connection_error', async(err) => {
      console.log(err.message);

      await fetch(
        '/api/socket'
      );
    });


  } , [socket]);

  return (
    <h4>Next app</h4>

  )
}
