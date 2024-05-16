import React from 'react';
import { useEffect } from 'react';

/*
export const CongratulationsMessage = ({numberOfClicks,  threshold }) => {
    return  numberOfClicks>= threshold
           ? <h3>Congratulations! You've reached {threshold} clicks</h3>
           : null
}
*/

export const CongratulationsMessage = ({numberOfClicks,  threshold, onHide }) => {
    useEffect(()=>{
        return () =>console.log("Congratulation unmounted")   
    }, [])
    return  numberOfClicks>= threshold
           ? <>

           <h3>Congratulations! You've reached {threshold} clicks</h3>
           <button onClick={onHide}>Hide</button>
             </>
           : null
}