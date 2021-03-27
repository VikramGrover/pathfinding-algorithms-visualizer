import { dijkstras } from '../algorithms/path_finding/dijkstras.js'
import { getNodeTypeEnum } from '../utils/util.js'

const Visualize = ({ rows, cols, gridState, setGridState, startCord, targetCord, clearForReRun }) => {
    const run = async () => {
        // clearForReRun();
        const path = dijkstras(startCord, targetCord, gridState, setGridState, rows, cols);

        for (let i = path.length; i >= 0; i--) {
            setTimeout(() => {
                setGridState(prevState => ({ ...prevState, [path[i]]: [getNodeTypeEnum('path')] }));
            }, 1);
        }
    };

    return (
        <div className='button green' onClick={run} >
            Run
        </div >
    )
}

export default Visualize
