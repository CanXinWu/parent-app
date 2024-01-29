import RedPacket from '../components/RedPacket/RedPacket.jsx'

function Layout({type}){
    if(type==='红包雨'){
        console.log(type);
        return <RedPacket/>
    }
    if(type==='大转盘'){
        return 
    }
    if(type==='贪吃蛇'){
        return 
    }
}

export default Layout