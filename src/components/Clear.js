import React from 'react'

const Clear = ({ clearObstacles, runningAlgo }) => {
    return (
        <div className={`button ${runningAlgo ? 'disabled' : 'orange'}`} onClick={runningAlgo ? null : clearObstacles}>
            Clear Obstacles
        </div >
    )
}

export default Clear
