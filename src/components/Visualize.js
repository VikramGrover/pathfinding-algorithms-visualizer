import { dijkstras } from '../algorithms/path_finding/dijkstras.js'
import { dfs } from '../algorithms/path_finding/dfs.js'
import { bfs } from '../algorithms/path_finding/bfs.js'
import { aStar } from '../algorithms/path_finding/aStar.js'
import { getNodeTypeEnum } from '../utils/util.js'

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
        switch (selectedAlgo) {
            case "Dijkstra's":
                path = dijkstras(startCord, targetCord, updatedGridState, setGridState, rows, cols, timeout);
                break;
            case "DFS":
                path = dfs(startCord, targetCord, updatedGridState, setGridState, rows, cols, timeout);
                break;
            case "BFS":
                path = bfs(startCord, targetCord, updatedGridState, setGridState, rows, cols, timeout);
                break;
            case "A*":
                path = aStar(startCord, targetCord, updatedGridState, setGridState, rows, cols, timeout);
                break;
            default:
                break;
        }

        console.log("ENDED: ", selectedAlgo);

        for (let i = path.length - 1; i >= 0; i--) {
            setTimeout(() => {
                setGridState(prevState => ({ ...prevState, [path[i]]: [getNodeTypeEnum('path'), ...updatedGridState[path[i]]] }));
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
