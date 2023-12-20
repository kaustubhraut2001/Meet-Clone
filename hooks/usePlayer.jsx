import { useState } from 'react';
import {cloneDeep} from 'lodash';

const usePlayer = (id ) =>{
	const[players , setPlayers] = useState({});
	const playerscopy = cloneDeep(players);

	const highlightedplayer = playerscopy[id];
	delete playerscopy[id];

	const otherplayers = playerscopy;

	return {players , setPlayers , highlightedplayer , otherplayers};
}

export default usePlayer;