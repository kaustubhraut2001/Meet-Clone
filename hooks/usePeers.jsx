import {useState , useEffect, useRef} from "react";
// import peer from "peerjs" -> we mode this to use Eeffect



const usePeer = () =>{
	const [peer, setPeer] = useState(null);
	const[id , setId] = useState();

	const isPeerset = useRef(false);


	useEffect(()=>{
		if(isPeerset.current)
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
			});

		})()

	}, [])
	return {peer , id};
}

export default usePeer;