import Visualize from './Visualize.js'
import CustomDropdown from './CustomDropdown.js'
import { useState } from 'react'
import { getPathAlgos } from '../utils/util.js'

const ChooseAlgorithm = ({ rows, cols, setGridState, startCord, targetCord, clearForReRun, runningAlgo, setRunningAlgo }) => {
    const [selectedAlgo, setSelectedAlgo] = useState(getPathAlgos()[0]);

    return (
        <div className={`choose-algo`}>
            <CustomDropdown setSelection={setSelectedAlgo} items={getPathAlgos()} />
            <Visualize rows={rows} cols={cols} selectedAlgo={selectedAlgo} setGridState={setGridState} startCord={startCord} targetCord={targetCord} clearForReRun={clearForReRun} runningAlgo={runningAlgo} setRunningAlgo={setRunningAlgo} />
        </div >
    )
}

export default ChooseAlgorithm
