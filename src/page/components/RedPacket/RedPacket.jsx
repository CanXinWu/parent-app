import { Button, Switch } from "antd"
import { } from 'lodash'
import './index.css'
import { createRedPacket } from './index.js'
import { useRef } from "react";
function RedPacket(){
    let timer = useRef();
    const onClick = () => {
        timer.current = setInterval(createRedPacket, 300)
        setTimeout(()=>clearInterval(timer.current),10000)
    }
    console.log(timer.current);
   
    return (
    <div className="content">
        <Button  onClick={onClick}>开始</Button>
        <div id="redPacketRain">
            {/* <div className="red-packet"></div> */}
        </div>
    </div>
    )
}

export default RedPacket