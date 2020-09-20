import React,{ useState , useEffect } from "react";
import Friend from "./Friend"

const Friends = ({userId,token,populateFriends,addFriends,userFriends}) => {
    const [err,setErr] = useState({
        has: false,
        msg: ""
    })

    useEffect(() => {  
        const fetchFriends = async () => {
            try{
                const url = `http://localhost:3001/api/user/${userId}/friends`
                const res = await fetch(url,{
                    method: "GET",
                    headers: {
                        Authorization : `Bearer ${token}`
                    }
                })
                const friends = await res.json()
                populateFriends(friends);
            } catch(err){
                setErr({
                    has:true,
                    msg : err.message
                })
            }
        }
        fetchFriends();
    },[]);


   return (
        userFriends.map(f => (
            <Friend
            key = {f._id}
            name = {f.friend}
            />
        ))
    )
}

export default Friends;
