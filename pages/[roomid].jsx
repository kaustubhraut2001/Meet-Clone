import usePeer from "@/hooks/usePeers";
import { useSocket } from "@/context/socket";
import { useEffect } from "react";




const room = ({ roomid }) => {

const socket = useSocket();
const {peer , id} = usePeer();

};

export default room;
