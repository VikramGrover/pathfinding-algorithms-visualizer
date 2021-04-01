import { dijkstras } from '../algorithms/path_finding/dijkstras.js'
import { getNodeTypeEnum } from '../utils/util.js'

const Visualize = ({ rows, cols, selectedAlgo, setGridState, startCord, targetCord, clearForReRun, runningAlgo, setRunningAlgo }) => {
    const run = async () => {
        const updatedGridState = clearForReRun();

        console.log("STARTING: ", selectedAlgo);

        let path = [];
        switch (selectedAlgo) {
            case "Dijkstra's":
                path = dijkstras(startCord, targetCord, updatedGridState, setGridState, rows, cols);
                break;
        }

        console.log("ENDED: ", selectedAlgo);

        for (let i = path.length - 1; i >= 0; i--) {
            setTimeout(() => {
                setGridState(prevState => ({ ...prevState, [path[i]]: [getNodeTypeEnum('path'), ...updatedGridState[path[i]]] }));
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
