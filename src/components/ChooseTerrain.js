import CustomDropdown from './CustomDropdown.js'
import { useState } from 'react'
import { allTerrainAlgos, unweightedTerrainAlgos } from '../utils/constants.js'
import { isAlgoUnweighted } from '../utils/helper.js'
import GenerateTerrain from './GenerateTerrain.js'

const ChooseTerrain = ({ rows, cols, gridState, setGridState, startCord, targetCord, runningAlgo, setRunningAlgo, dropDownWidth, resetGrid, selectedAlgo }) => {
    const [selectedTerrainAlgo, setSelectedTerrainAlgo] = useState(allTerrainAlgos[0]);

    return (
        <div className={`choose-terrain`}>
            <CustomDropdown setSelection={setSelectedTerrainAlgo} items={isAlgoUnweighted(selectedAlgo) ? unweightedTerrainAlgos : allTerrainAlgos} disabled={false} dropDownWidth={dropDownWidth} isAlgoSelector={false} isObstacleSelector={false} isTerrainSelector={true} />
            <GenerateTerrain rows={rows} cols={cols} selectedTerrainAlgo={selectedTerrainAlgo} gridState={gridState} setGridState={setGridState} startCord={startCord} targetCord={targetCord} runningAlgo={runningAlgo} setRunningAlgo={setRunningAlgo} resetGrid={resetGrid} />
        </div >
    )
}

export default ChooseTerrain
