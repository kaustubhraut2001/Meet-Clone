import {useState , useEffect , useRef} from 'react';

 const useMediastreams = () =>{
	const [stream ,setStream] = useState(null);
	const isStreamset = useRef(false);
	useEffect(()=>{
		if(isStreamset.current){
			return;

		}
		isStreamset.current = true;
		;(async function InitStream(){

			try{
			const stream = await navigator.mediaDevices.getUserMedia({
				video:true,
				audio:true
			})
			setStream(stream)
		}catch(error){
			console.log(error);
		}
		})();
	} , [])
	return {stream : stream};
}

export default useMediastreams;
