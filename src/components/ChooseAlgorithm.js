import Visualize from './Visualize.js'
import CustomDropdown from './CustomDropdown.js'
import { useState } from 'react'
import { isAlgoUnweighted } from '../utils/helper.js'
import { allPathAlgos } from '../utils/constants.js'

const ChooseAlgorithm = ({ rows, cols, setGridState, startCord, targetCord, clearForReRun, runningAlgo, setRunningAlgo, setWeightedObsDisabled, clearWeightedObstacles, dropDownWidth }) => {
    const [selectedAlgo, setSelectedAlgo] = useState(allPathAlgos[0]);

    const alteredSetSelectedAlgo = (algoName) => {
        const unweightedAlgo = isAlgoUnweighted(algoName);
        setWeightedObsDisabled(unweightedAlgo);
        setSelectedAlgo(algoName);
        if (unweightedAlgo) {
            clearWeightedObstacles();
        }
    };

    return (
        <div className={`choose-algo`}>
            <CustomDropdown setSelection={alteredSetSelectedAlgo} items={allPathAlgos} disabled={false} dropDownWidth={dropDownWidth} />
            <Visualize rows={rows} cols={cols} selectedAlgo={selectedAlgo} setGridState={setGridState} startCord={startCord} targetCord={targetCord} clearForReRun={clearForReRun} runningAlgo={runningAlgo} setRunningAlgo={setRunningAlgo} />
        </div >
    )
}

export default ChooseAlgorithm
