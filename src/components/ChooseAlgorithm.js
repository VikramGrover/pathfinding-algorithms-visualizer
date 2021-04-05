import Visualize from './Visualize.js'
import CustomDropdown from './CustomDropdown.js'
import { useState } from 'react'
import { getPathAlgos, isAlgoUnweighted } from '../utils/util.js'

const ChooseAlgorithm = ({ rows, cols, setGridState, startCord, targetCord, clearForReRun, runningAlgo, setRunningAlgo, setWeightedObsDisabled, clearWeightedObstacles }) => {
    const [selectedAlgo, setSelectedAlgo] = useState(getPathAlgos()[0]);

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
            <CustomDropdown setSelection={alteredSetSelectedAlgo} items={getPathAlgos()} disabled={false} />
            <Visualize rows={rows} cols={cols} selectedAlgo={selectedAlgo} setGridState={setGridState} startCord={startCord} targetCord={targetCord} clearForReRun={clearForReRun} runningAlgo={runningAlgo} setRunningAlgo={setRunningAlgo} />
        </div >
    )
}

export default ChooseAlgorithm
