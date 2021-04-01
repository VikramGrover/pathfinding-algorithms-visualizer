import Visualize from './Visualize.js'
import CustomDropdown from './CustomDropdown.js'
import { useState } from 'react'
import { getPathAlgos, getTerrainAlgos } from '../utils/util.js'

const ChooseTerrain = ({ rows, cols, setGridState, startCord, targetCord, clearForReRun, runningAlgo, setRunningAlgo }) => {
    const [selectedTerrainAlgo, setSelectedTerrainAlgo] = useState(getPathAlgos()[0]);

    return (
        <div className={`choose-terrain`}>
            <CustomDropdown setSelection={setSelectedTerrainAlgo} items={getTerrainAlgos()} />
            <Visualize rows={rows} cols={cols} selectedAlgo={selectedTerrainAlgo} setGridState={setGridState} startCord={startCord} targetCord={targetCord} clearForReRun={clearForReRun} runningAlgo={runningAlgo} setRunningAlgo={setRunningAlgo} />
        </div >
    )
}

export default ChooseTerrain
