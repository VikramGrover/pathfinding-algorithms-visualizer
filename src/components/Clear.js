import React from 'react'

const Clear = ({ clearPath, runningAlgo }) => {
    return (
        <div className={`button ${runningAlgo ? 'disabled' : 'orange'}`} onClick={runningAlgo ? null : clearPath}>
            Clear Path
        </div >
    )
}

export default Clear
