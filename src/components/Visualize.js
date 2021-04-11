import { algoFunctions, nodeTypeEnum } from '../utils/constants.js'

const Visualize = ({ rows, cols, selectedAlgo, gridState, setGridState, startCord, targetCord, clearForReRun, runningAlgo, setRunningAlgo }) => {
    const run = async () => {
        if (startCord === targetCord) {
            return;
        }

        clearForReRun();
        setRunningAlgo(true);
        console.log("STARTING: ", selectedAlgo);

        let path = [];
        let timeout = 1;
        path = algoFunctions[selectedAlgo](startCord, targetCord, gridState, rows, cols, timeout);

        console.log("ENDED: ", selectedAlgo);

        for (let i = path.length - 1; i >= 0; i--) {
            const nodeStateFunc = gridState[path[i]][1];
            setTimeout(() => {
                nodeStateFunc(prevState => ([nodeTypeEnum.path, ...gridState[path[i]][0]]));
            }, timeout);
        }

        setTimeout(() => {
            setRunningAlgo(false);
        }, timeout);
    };

    return (
        <div className={`button ${runningAlgo ? 'disabled' : 'green'}`} onClick={runningAlgo ? null : run} >
            Run
        </div >
    )
}

export default Visualize
