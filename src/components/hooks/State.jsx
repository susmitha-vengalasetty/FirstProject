// import React from "react";
// import { useState } from "react";
// const Do = () => {
//     const[count,setCount] = useState(0);

//     const increment = () => {
//         setCount(count + 1);
//     };
//     return(
//         <>
//         <p>Current count :{count}</p>
//         <button onClick={increment}>CLick</button>
//         </>
//     );
// };
// export default Do;
import React from 'react';

const InputBox = ({ onChange }) => {
  return (
    <input
      type="text"
      onChange={(e) => onChange(e.target.value)}
      placeholder="Type something..."
    />
  );
};

export default InputBox;
