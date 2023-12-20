import usePeer from "@/hooks/usePeers";
import { useSocket } from "@/context/socket";
import { useEffect } from "react";
import useMediastreams from "@/hooks/useMediaStream";
// import Player from "@/component/Player/Index";
import dynamic from 'next/dynamic'
import usePlayer from "@/hooks/usePlayer";


const Player = dynamic(() => import("@/component/Player/Index"), { ssr: false })

const Room = () => {

const socket = useSocket();
const {peer , id} = usePeer();

const {stream} = useMediastreams();

const {players , setPlayers , highlightedplayer , otherplayers } = usePlayer(id);





useEffect(()=>{
	if(!socket )
		{
			return;
		}
		const handleuserconnected = (userid)=>{

			console.log("user connected" , userid);
			const call = peer.call(userid , stream);
			console.log("calling user" , userid);

			call.on('stream' , (userVideoStream)=>{
				console.log("user video stream" , userid);

				setPlayers((peer) => ({	...peer,	[userid]: { url : userVideoStream, muted : false , playing : true},}))
			});



		}



	socket.on('user-connected' , handleuserconnected);

		return ()=>{
			socket.off('user-connected');
		}
},[socket , peer , stream]);


useEffect(()=>{
	if(!peer || !stream){
		return;

	}
	const {peer : callerID} = call;
	peer.on('call' , (call)=>{
		call.answer(stream);
		call.on('stream' , (incomingstream)=>{
			console.log("user video stream" , callerID);
			setPlayers((peer) => ({	...peer,	[callerID]: { url : incomingstream, muted : false , playing : true},}))
		});
	}
	)
},[peer, stream])


useEffect(()=>{
	if(!stream || !id || !players){
		return;

	}
	setPlayers((peer) => ({
		...peer,
		[id]: { url : stream, muted : false , playing : true},
	}))
},[players]);

return(
	<div>
{Object.keys(players).map((playerId) => {
	const { url, muted, playing } = players[playerId];
	return <Player key={playerId} playerId={playerId} url={url} playing={playing} muted={muted}  />;
})}


		<Player playerId={id} url={stream} playing muted/>

	</div>
)
};

export default Room;
