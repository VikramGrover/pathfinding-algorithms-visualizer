import Reset from './Reset.js'
import Clear from './Clear.js'
import ChooseAlgorithm from './ChooseAlgorithm.js'
import ChooseTerrain from './ChooseTerrain.js'
import ChooseObstacle from './ChooseObstacle.js'

const Header = ({ rows, cols, runningAlgo, setRunningAlgo, padding, height, setGridState, startCord, targetCord, clearObstacles, clearPath, setSelectedObstacle, weightedObsDisabled, setWeightedObsDisabled, clearWeightedObstacles }) => {
    const style = {
        padding: padding,
        paddingBottom: padding / 2,
        height: height
    };

    return (
        <div style={style} className='header'>
            <Reset clearObstacles={clearObstacles} runningAlgo={runningAlgo} />
            <Clear clearPath={clearPath} runningAlgo={runningAlgo} />
            <ChooseAlgorithm rows={rows} cols={cols} setGridState={setGridState} startCord={startCord} targetCord={targetCord} clearForReRun={clearPath} runningAlgo={runningAlgo} setRunningAlgo={setRunningAlgo} setWeightedObsDisabled={setWeightedObsDisabled} clearWeightedObstacles={clearWeightedObstacles} />
            <ChooseTerrain rows={rows} cols={cols} setGridState={setGridState} startCord={startCord} targetCord={targetCord} clearForReRun={clearPath} runningAlgo={runningAlgo} setRunningAlgo={setRunningAlgo} />
            <ChooseObstacle setSelectedObstacle={setSelectedObstacle} weightedObsDisabled={weightedObsDisabled} />
        </div>
    )
}

export default Header
