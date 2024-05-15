import React from 'react'
import Operation from './Operation'
function Home({counts, incrementValue}) {
    return (
        <>

            <div>Home</div>

            <Operation counts={counts}  incrementValue={incrementValue} />
        </>
    )
}

export default Home