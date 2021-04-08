import Node from './Node.js'
import { useState } from 'react'
import { nodeTypeEnum } from '../utils/constants.js'

const Grid = ({ rows, cols, padding, nodeSize, gridState, setGridState, selectedObstacle, setStartCord, setTargetCord, runningAlgo }) => {
    const [draggingSelection, setDraggingSelection] = useState(nodeTypeEnum.none);

    // fill nodes in the grid
    const nodes = [];
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            let nodeId = `${x}:${y}`

            nodes.push(<Node nodeId={nodeId}
                size={nodeSize} nodeState={gridState[nodeId]} setGridState={setGridState}
                draggingSelection={draggingSelection}
                setDraggingSelection={setDraggingSelection}
                setStartCord={setStartCord} setTargetCord={setTargetCord} runningAlgo={runningAlgo} selectedObstacle={selectedObstacle} key={nodeId} />);
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
}

export default Grid
