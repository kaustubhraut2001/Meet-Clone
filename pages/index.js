import styles from "../styles/home.module.css";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const createRoom = () => {
    const id = uuidv4();
    router.push(`/${id}`);
  };

  return (
    <div className={styles.homeContainer}>
      <h4>Meet</h4>
      <div className={styles.enterRoom}>
        <input type="text" />
        <button>Join Room</button>
      </div >
      <span className={styles.separatorText}>------------</span>\<button> Create Room</button>
    </div>
  );
}
