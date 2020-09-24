import React,{ useState , useEffect } from "react";
import Friend from "./Friend"

const Friends = ({userId,token,populateFriends,addFriends,userFriends}) => {
    const MongoAtlas = "http://localhost:3001/"
    const [err,setErr] = useState({
        has: false,
        msg: ""
    })

    useEffect(() => {  
        const fetchFriends = async () => {
            try{
                const url = `${MongoAtlas}api/user/${userId}/friends`
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
    },/* [addFriends] */[]);


   return (
        userFriends.map(f => (
            <Friend
            key = {f._id}
            name = {f.friend}
            id = {f._id}
            />
        ))
    )
}

export default Friends;
