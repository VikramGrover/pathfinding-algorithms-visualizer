import React from 'react'
import { dijkstras } from '../algorithms/path_finding/dijkstras.js'
import { getNodeTypeEnum } from '../utils/util.js'

const Visualize = ({ rows, cols, gridState, setGridState, startCord, targetCord }) => {
    const visualizeOnClick = () => {
        const path = dijkstras(startCord, targetCord, gridState, setGridState, rows, cols);

        for (const cord of path) {
            setTimeout(() => {
                setGridState(prevState => ({ ...prevState, [cord]: [getNodeTypeEnum('path')] }));
            }, 200);
        }
    };

    return (
        <button className='pure-material-button-contained' onClick={visualizeOnClick}>
            VISUALIZE
        </button >
    )
}

export default Visualize
