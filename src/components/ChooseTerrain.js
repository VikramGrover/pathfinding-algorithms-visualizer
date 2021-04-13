import CustomDropdown from './CustomDropdown.js'
import { useState } from 'react'
import { terrainAlgos } from '../utils/constants.js'
import GenerateTerrain from './GenerateTerrain.js'

const ChooseTerrain = ({ rows, cols, gridState, setGridState, startCord, targetCord, runningAlgo, setRunningAlgo, dropDownWidth, resetGrid }) => {
    const [selectedTerrainAlgo, setSelectedTerrainAlgo] = useState(terrainAlgos[0]);

    return (
        <div className={`choose-terrain`}>
            <CustomDropdown setSelection={setSelectedTerrainAlgo} items={terrainAlgos} disabled={false} dropDownWidth={dropDownWidth} isAlgoSelector={false} isObstacleSelector={false} />
            <GenerateTerrain rows={rows} cols={cols} selectedTerrainAlgo={selectedTerrainAlgo} gridState={gridState} setGridState={setGridState} startCord={startCord} targetCord={targetCord} runningAlgo={runningAlgo} setRunningAlgo={setRunningAlgo} resetGrid={resetGrid} />
        </div >
    )
}

export default ChooseTerrain
