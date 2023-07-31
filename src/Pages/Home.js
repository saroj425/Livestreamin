import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [roomid,setRoomid] = useState();
    console.log("Room Id",roomid);
    
    const navigate = useNavigate();
    const handleJoin = async()=>{
        navigate(`/room/${roomid}`)
    }
  return (
    <div className=''>
        <input type='text' placeholder='Enter room ID' value={roomid} onChange={(e)=>setRoomid(e.target.value)}/>
        <button className='btn btn-success' onClick={handleJoin}>Join</button>
    </div>
  )
}

export default Home