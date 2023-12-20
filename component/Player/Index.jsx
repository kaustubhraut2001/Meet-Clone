
import ReactPlayer from "react-player"
const Player = (props) =>{

	const {playerId , url , muted, playing}  = props;

	return(
		<div>
			<ReactPlayer key = {playerId} url={url} playing={playing} muted={muted}/>
		</div>
	);
}

export default Player;