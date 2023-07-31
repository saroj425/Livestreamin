import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const {roomid} = useParams();

    function randomID(len) {
        let result = '';
        if (result) return result;
        var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
          maxPos = chars.length,
          i;
        len = len || 5;
        for (i = 0; i < len; i++) {
          result += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return result;
      }
      


    const mymeeting = async(element)=>{
        const appID = ;
        const serverSecret = "";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomid,randomID(5),  randomID(5));
        console.log("kitToken",kitToken)
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:`http://localhost:3000/room/${roomid}` 
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.Livestreaming, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });

    }
  return (
    <div ref={mymeeting}></div>
  )
}

export default Room