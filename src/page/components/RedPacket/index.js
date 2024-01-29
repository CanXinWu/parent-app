

export function createRedPacket() {

    const redPacketContainer = document.getElementById('redPacketRain')
    const redPacket = document.createElement('div')
    redPacket.classList.add('red-packet');
    redPacket.style.left = Math.random() * 900 + 'px';
    redPacket.style.top = '0px';

    redPacket.style.transition='top 3s linear'
    redPacketContainer.appendChild(redPacket)
    setTimeout(() => {
        redPacket.style.top = 800 + 'px';
      }, 30); 
    setTimeout(() => {
        redPacketContainer.removeChild(redPacket);
    }, 3 * 1000);
    
}

function clickRedPacket(ele){
    
}