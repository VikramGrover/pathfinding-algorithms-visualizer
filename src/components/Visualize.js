import { algoFunctions, nodeTypeEnum } from '../utils/constants.js'

const Visualize = ({ rows, cols, selectedAlgo, setGridState, startCord, targetCord, clearForReRun, runningAlgo, setRunningAlgo }) => {
    const run = async () => {
        if (startCord === targetCord) {
            return;
        }

        const updatedGridState = clearForReRun();
        setRunningAlgo(true);
        console.log("STARTING: ", selectedAlgo);

        let path = [];
        let timeout = 1;
        path = algoFunctions[selectedAlgo](startCord, targetCord, updatedGridState, setGridState, rows, cols, timeout);

        console.log("ENDED: ", selectedAlgo);

        for (let i = path.length - 1; i >= 0; i--) {
            setTimeout(() => {
                setGridState(prevState => ({ ...prevState, [path[i]]: [nodeTypeEnum.path, ...updatedGridState[path[i]]] }));
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
