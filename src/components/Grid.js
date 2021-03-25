import React from 'react'
import Node from './Node.js'
import { useState } from 'react'
import { getNodeTypeEnum } from '../utils/util.js'

const Grid = ({ rows, cols, nodeSize, gridState, setGridState, selectedObstacle }) => {
    const [draggingSelection, setDraggingSelection] = useState(getNodeTypeEnum('none'));

    // fill nodes in the grid
    const nodes = [];
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            let nodeId = `${x}:${y}`

            nodes.push(<Node nodeId={nodeId} size={nodeSize} nodeState={gridState[nodeId]} setGridState={setGridState} draggingSelection={draggingSelection} setDraggingSelection={setDraggingSelection} key={nodeId} />);
        }
    }

    const gridStyle = {
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
