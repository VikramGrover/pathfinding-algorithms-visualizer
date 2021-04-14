import Node from './Node.js'
import React from 'react'
import { useState } from 'react'
import { nodeTypeEnum } from '../utils/constants.js'

const Grid = React.memo(({ rows, cols, padding, nodeSize, setGridState, selectedObstacle, setStartCord, setTargetCord, runningAlgo }) => {
    const [draggingSelection, setDraggingSelection] = useState(nodeTypeEnum.none);

    // fill nodes in the grid
    console.log("RERENDERING GRID");
    const nodes = [];
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            let nodeId = `${x}:${y}`

            let startingState = [nodeTypeEnum.none];
            if (x === 1 && y === 1) {
                startingState.unshift(nodeTypeEnum.start);
            }
            else if (x === (rows - 2) && y === (cols - 2)) {
                startingState.unshift(nodeTypeEnum.target);
            }

            nodes.push(<Node nodeId={nodeId}
                size={nodeSize} setGridState={setGridState}
                draggingSelection={draggingSelection}
                setDraggingSelection={setDraggingSelection}
                setStartCord={setStartCord} setTargetCord={setTargetCord} runningAlgo={runningAlgo} selectedObstacle={selectedObstacle} startingState={startingState} key={nodeId} />);
        }
    }

    const gridDimensions = {
        width: (cols * nodeSize) + cols,
        height: (rows * nodeSize) + rows
    };

    const containerStyle = {
        paddingLeft: padding,
        paddingRight: padding
    }

    return (
        <div style={containerStyle}>
            <div className='grid' style={gridDimensions}>
                {nodes}
            </div >
        </div>
    )
});

export default Grid
