import React from "react";
import { useEffect ,useState } from "react";

const DateTime = () => {
    const [currentTime,setCurrentTime] = useState(new Date());
    
      useEffect(() =>{
        const timer = setInterval(()=>{
            setCurrentTime(new Date());
        },1000);
        return () => clearInterval(timer);
      },[]);
      return (
        <>
            <p className="datetime">
            {currentTime.toLocaleDateString()}&nbsp;
            {currentTime.toLocaleTimeString()}
             </p>
      </>
    );
};


export default DateTime;