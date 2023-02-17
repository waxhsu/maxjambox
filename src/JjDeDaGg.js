// import React from 'react'
import React, { useState } from 'react' //importing react and useState


export const JjDeDaGg = () => {
    const [number, setNumber] = useState(0) //this is an react hook
  return (
    <div>Stop the dizzy
        <div>
            <button onClick={() => setNumber(number+1)}>Spin the other way</button>
        <div onMouseMove = {() => setNumber(number+1)}> 
            {number}
            </div>
        <div>
            <button onClick={() => setNumber(number-50)}>haha lol minus</button></div>
        </div>
    </div>
  )
}

/////




// JJ 功課
// add 2 buttons and have it display the number
// 



