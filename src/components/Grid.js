import React from 'react'
import Node from './Node.js'
import { useState } from 'react'
import { getNodeTypeEnum } from '../utils/util.js'

const Grid = ({ rows, cols, nodeSize }) => {
    const [selectingStart, setSelectingStart] = useState(false);
    const [selectingTarget, setSelectingTarget] = useState(false);
    const [selectingObstacle, setSelectingObstacle] = useState(false);

    // fill nodes in the grid
    const nodes = [];
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            let type = [getNodeTypeEnum('none')];

            if (x === 0 && y === 0) {
                type.unshift(getNodeTypeEnum('start'));
            }
            else if (x === (rows - 1) && y === (cols - 1)) {
                type.unshift(getNodeTypeEnum('target'));
            }

            nodes.push(<Node size={nodeSize} nodeType={type} selectingStart={selectingStart} setSelectingStart={setSelectingStart} selectingTarget={selectingTarget} setSelectingTarget={setSelectingTarget} selectingObstacle={selectingObstacle} setSelectingObstacle={setSelectingObstacle} key={[x, y]} />);
        }
    }

    const gridStyle = {
        marginTop: 150,
        width: (cols * nodeSize) + cols,
        height: (rows * nodeSize) + rows
    };

    return (
        <div className='grid' style={gridStyle}>
            { nodes}
        </div >
    )
}

export default Grid
