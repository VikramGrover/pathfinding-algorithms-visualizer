const Reset = ({ clearObstacles, runningAlgo }) => {
    return (
        <div className={`button ${runningAlgo ? 'disabled' : 'red'}`} onClick={runningAlgo ? null : clearObstacles}>
            Clear Obstacles
        </div >
    )
}

export default Reset
