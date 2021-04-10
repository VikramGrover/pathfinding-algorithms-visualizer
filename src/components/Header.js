import Reset from './Reset.js'
import Clear from './Clear.js'
import ChooseAlgorithm from './ChooseAlgorithm.js'
import ChooseTerrain from './ChooseTerrain.js'
import ChooseObstacle from './ChooseObstacle.js'

const Header = ({ rows, cols, runningAlgo, setRunningAlgo, padding, height, gridState, setGridState, startCord, targetCord, clearObstacles, clearPath, setSelectedObstacle, weightedObsDisabled, toggleInfoBox, selectedAlgo, setSelectedAlgo }) => {
    const style = {
        padding: padding,
        paddingBottom: padding / 2,
        height: height
    };

    return (
        <div style={style} className='header'>
            <Reset clearObstacles={clearObstacles} runningAlgo={runningAlgo} />
            <Clear clearPath={clearPath} runningAlgo={runningAlgo} />
            <ChooseAlgorithm rows={rows} cols={cols} gridState={gridState} setGridState={setGridState} startCord={startCord} targetCord={targetCord} clearForReRun={clearPath} runningAlgo={runningAlgo} setRunningAlgo={setRunningAlgo} dropDownWidth={200} toggleInfoBox={toggleInfoBox} selectedAlgo={selectedAlgo} setSelectedAlgo={setSelectedAlgo} />
            <ChooseObstacle setSelectedObstacle={setSelectedObstacle} weightedObsDisabled={weightedObsDisabled} dropDownWidth={175} />
            <ChooseTerrain rows={rows} cols={cols} setGridState={setGridState} startCord={startCord} targetCord={targetCord} clearForReRun={clearPath} runningAlgo={runningAlgo} setRunningAlgo={setRunningAlgo} dropDownWidth={150} />
        </div>
    )
}

export default Header
