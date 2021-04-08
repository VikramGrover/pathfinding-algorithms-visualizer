import Visualize from './Visualize.js'
import CustomDropdown from './CustomDropdown.js'
import { useState } from 'react'
import { terrainAlgos } from '../utils/constants.js'

const ChooseTerrain = ({ rows, cols, setGridState, startCord, targetCord, clearForReRun, runningAlgo, setRunningAlgo, dropDownWidth }) => {
    const [selectedTerrainAlgo, setSelectedTerrainAlgo] = useState(terrainAlgos[0]);

    return (
        <div className={`choose-terrain`}>
            <CustomDropdown setSelection={setSelectedTerrainAlgo} items={terrainAlgos} disabled={false} dropDownWidth={dropDownWidth} />
            <Visualize rows={rows} cols={cols} selectedAlgo={selectedTerrainAlgo} setGridState={setGridState} startCord={startCord} targetCord={targetCord} clearForReRun={clearForReRun} runningAlgo={runningAlgo} setRunningAlgo={setRunningAlgo} />
        </div >
    )
}

export default ChooseTerrain
