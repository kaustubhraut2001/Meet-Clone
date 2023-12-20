import {useState , useEffect, useRef} from "react";
// import peer from "peerjs" -> we mode this to use Eeffect
import {useSocket} from "../context/socket";
import { useRouter } from "next/router";


const usePeer = () =>{
	const [peer, setPeer] = useState(null);
	const[id , setId] = useState();
	const roomid = useRouter().query?.roomid;

	const socket = useSocket();
	const isPeerset = useRef(false);


	useEffect(()=>{
		if(isPeerset.current || roomid || socket)
			{
				return;


		}
		isPeerset.current = true;
		(async function initPeer(){
		//-------Imp------
			//same as const peer = new peerjs();
			// we done this beacuse next mostly render the code in serverside only but ffew code like takes time to render we get ReferenceError: navigator is not defined this error
			// peerjs requires client bject it doesnot have brower tools to accces that is why we get navigater error error here



			const mypeer = new (await import("peerjs")).default();
			setPeer(peer);

			mypeer.on('open',(id)=>{
				console.log(`Peer id is ${id}`);

				setId(id);
				socket?.emit('join-room' , roomid , id);
			});

		})()

	}, [roomid , socket])
	return {peer , id};
}

export default usePeer;