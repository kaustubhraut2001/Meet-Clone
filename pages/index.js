import styles from "../styles/home.module.css";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import {useState} from "react";

export default function Home() {
  const router = useRouter();
  const [roomid , setRoomId] = useState('');

  const createRoomandJoin = () => {
    const id = uuidv4();
    router.push(`/${id}`);
  };

  const handlejoinclick = () => {

    if(roomid){

      console.log( "Inside "+ roomid);

      router.push(`/${roomid}`);

    }
    else{
      alert("Please enter a room id");
    }



  }


  return (
    <div className={styles.homeContainer}>
      <h4>Meet</h4>
      <div className={styles.enterRoom}>
        <input type="text" onChange={(e)=>{
          setRoomId(e.target.value);
        }} />
        <button onClick={handlejoinclick}>Join Room</button>
      </div >
      <span className={styles.separatorText}>------------</span>
      <button onClick={createRoomandJoin}> Create Room</button>
    </div>
  );
}
