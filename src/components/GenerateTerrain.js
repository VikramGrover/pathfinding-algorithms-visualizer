import { terrainFunctions, terrainAlgoSleepTimes } from '../utils/constants.js'

const GenerateTerrain = ({ rows, cols, selectedTerrainAlgo, gridState, setGridState, startCord, targetCord, runningAlgo, setRunningAlgo, resetGrid }) => {
    const run = async () => {
        await resetGrid();

        setRunningAlgo(true);

        await terrainFunctions[selectedTerrainAlgo](startCord, targetCord, gridState, setGridState, rows, cols, terrainAlgoSleepTimes[selectedTerrainAlgo]);

        setRunningAlgo(false);
    };

    return (
        <div className={`button ${runningAlgo ? 'disabled' : 'green'}`} onClick={runningAlgo ? null : run} >
            Run
        </div >
    )
}

export default GenerateTerrain
