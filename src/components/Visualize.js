import { dijkstras } from '../algorithms/path_finding/dijkstras.js'
import { getNodeTypeEnum } from '../utils/util.js'

const Visualize = ({ rows, cols, setGridState, startCord, targetCord, clearForReRun, runningAlgo, setRunningAlgo }) => {
    const run = async () => {
        console.log("I AM RUNNING");
        const updatedGridState = clearForReRun();
        const path = dijkstras(startCord, targetCord, updatedGridState, setGridState, rows, cols);

        for (let i = path.length; i >= 0; i--) {
            setTimeout(() => {
                setGridState(prevState => ({ ...prevState, [path[i]]: [getNodeTypeEnum('path')] }));
            }, 1);
        }

        setTimeout(() => {
            setRunningAlgo(false);
        }, 1);
    };

    return (
        <div className={`button ${runningAlgo ? 'disabled' : 'green'}`} onClick={runningAlgo ? null : run} >
            Run
        </div >
    )
}

export default Visualize
