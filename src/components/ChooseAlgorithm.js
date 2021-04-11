import Visualize from './Visualize.js'
import CustomDropdown from './CustomDropdown.js'
import ShowInfo from './ShowInfo.js'

import { allPathAlgos } from '../utils/constants.js'

const ChooseAlgorithm = ({ rows, cols, gridState, setGridState, startCord, targetCord, clearForReRun, runningAlgo, setRunningAlgo, dropDownWidth, toggleInfoBox, selectedAlgo, setSelectedAlgo }) => {

    return (
        <div className={`choose-algo`}>
            <CustomDropdown setSelection={setSelectedAlgo} items={allPathAlgos} disabled={false} dropDownWidth={dropDownWidth} isAlgoSelector={true} isObstacleSelector={false} />
            <ShowInfo toggleInfoBox={toggleInfoBox} />
            <Visualize rows={rows} cols={cols} selectedAlgo={selectedAlgo} gridState={gridState} setGridState={setGridState} startCord={startCord} targetCord={targetCord} clearForReRun={clearForReRun} runningAlgo={runningAlgo} setRunningAlgo={setRunningAlgo} />
        </div >
    )
}

export default ChooseAlgorithm
