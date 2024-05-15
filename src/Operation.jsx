import React from 'react'

function Operation({ counts,incrementValue }) {
    return (
        <>
            <div>Operation: {counts} </div>
            <button onClick={()=>{incrementValue()}}>increment</button>
        </>
    )
}

export default Operation