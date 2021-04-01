const Reset = ({ resetBoard, runningAlgo }) => {
    return (
        <div className={`button ${runningAlgo ? 'disabled' : 'red'}`} onClick={runningAlgo ? null : resetBoard}>
            Reset Grid
        </div >
    )
}

export default Reset
