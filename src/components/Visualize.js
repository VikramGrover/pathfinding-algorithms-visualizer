import { algoFunctions, nodeTypeEnum, PATH_CREATION_SLEEP, algoSleepTimes } from '../utils/constants.js'
import { sleep } from '../utils/helper.js'

const Visualize = ({ rows, cols, selectedAlgo, gridState, setGridState, startCord, targetCord, clearForReRun, runningAlgo, setRunningAlgo }) => {
    const run = async () => {
        if (startCord === targetCord) {
            return;
        }

        clearForReRun();
        setRunningAlgo(true);
        console.log("STARTING: ", selectedAlgo);

        let path = [];
        path = await algoFunctions[selectedAlgo](startCord, targetCord, gridState, rows, cols, algoSleepTimes[selectedAlgo]);

        console.log("ENDED: ", selectedAlgo);

        for (let i = path.length - 1; i >= 0; i--) {
            await sleep(PATH_CREATION_SLEEP);
            const nodeStateFunc = gridState[path[i]][1];
            nodeStateFunc(prevState => ([nodeTypeEnum.path, ...gridState[path[i]][0]]));
        }

        setRunningAlgo(false);
    };

    return (
        <div className={`button ${runningAlgo ? 'disabled' : 'green'}`} onClick={runningAlgo ? null : run} >
            Run
        </div >
    )
}

export default Visualize
