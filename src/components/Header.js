import Visualize from './Visualize.js'
import Reset from './Reset.js'
import Clear from './Clear.js'

const Header = ({ rows, cols, runningAlgo, setRunningAlgo, padding, height, setGridState, startCord, targetCord, resetBoard, clearObstacles, clearForReRun }) => {
    const style = {
        padding: padding,
        height: height
    };

    return (
        <div style={style} className='header'>
            <Reset resetBoard={resetBoard} runningAlgo={runningAlgo} />
            <Clear clearObstacles={clearObstacles} runningAlgo={runningAlgo} />
            <Visualize rows={rows} cols={cols} setGridState={setGridState} startCord={startCord} targetCord={targetCord} clearForReRun={clearForReRun} runningAlgo={runningAlgo} setRunningAlgo={setRunningAlgo} />
        </div>
    )
}

export default Header
