import { useState } from 'react'
import React from 'react'
import { getNodeTypeEnum } from '../utils/util.js'
import startNodeImg from '../images/start.png'
import targetNodeImg from '../images/target.png'
import obstacleNodeImg from '../images/obstacle.png'

const Node = ({ size, nodeType, selectingStart, setSelectingStart, selectingTarget, setSelectingTarget, selectingObstacle, setSelectingObstacle }) => {
    const [type, setType] = useState(nodeType);
    const nodeDim = {
        width: size,
        height: size
    };

    const imgDim = {
        width: size * 0.8,
        height: size * 0.8
    };

    const mouseDowned = () => {
        if (type[0] === getNodeTypeEnum('start')) {
            setSelectingStart(true);
            return;
        }

        if (type[0] === getNodeTypeEnum('target')) {
            setSelectingTarget(true);
            return;
        }

        if (type[0] === getNodeTypeEnum('none')) {
            setSelectingObstacle(true);
            setType([getNodeTypeEnum('obstacle'), ...type]);
            return;
        }

        if (type[0] === getNodeTypeEnum('obstacle')) {
            setType(type.slice(1))
            return;
        }
    };

    const mouseEntered = () => {
        if (type[0] === getNodeTypeEnum('obstacle')) {
            console.log("MOUSE ENTERED");
        }

        if (selectingStart) {
            setType([getNodeTypeEnum('start'), ...type]);
            return;
        }

        if (selectingTarget) {
            setType([getNodeTypeEnum('target'), ...type]);
            return;
        }

        if (selectingObstacle && type[0] === getNodeTypeEnum('none')) {
            setType([getNodeTypeEnum('obstacle'), ...type]);
            return;
        }
    };

    const mouseLeft = () => {
        if (selectingStart || selectingTarget) {
            setType(type.slice(1));
            if (type[1] === getNodeTypeEnum('obstacle')) {
                console.log("MOUSE LEFT");
            }
            return;
        }
    };

    const mouseUped = () => {
        if (selectingStart) {
            setSelectingStart(false);
            return;
        }

        if (selectingTarget) {
            setSelectingTarget(false);
            return;
        }

        if (selectingObstacle) {
            setSelectingObstacle(false);
        }
    };

    return (
        <div style={nodeDim} className="node" >
            {type[0] === getNodeTypeEnum('start') && <img className='img-node' alt='Start Node' style={imgDim} src={startNodeImg} />}
            {type[0] === getNodeTypeEnum('target') && <img className='img-node' alt='Target Node' style={imgDim} src={targetNodeImg} />}
            {type[0] === getNodeTypeEnum('obstacle') && <img className='img-node' alt='Obstacle' style={imgDim} src={obstacleNodeImg} />}
            <div style={{ ...nodeDim, position: 'absolute', top: 0, left: 0 }} onMouseDown={mouseDowned} onMouseUp={mouseUped} onMouseEnter={mouseEntered} onMouseLeave={mouseLeft} />
        </div>
    )
}

export default Node
