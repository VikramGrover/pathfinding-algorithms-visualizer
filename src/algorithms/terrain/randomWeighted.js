import { nodeTypeEnum } from '../../utils/constants.js';
import { getRandomNum } from '../../utils/helper.js'

export const randomWeighted = async (startCord, targetCord, gridState, setGridState, rows, cols, timeout) => {
    let gridMap = {};
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            const currCord = `${x}:${y}`;
            const nodeStateFunc = gridState[currCord][1];
            const randomNum = getRandomNum(1, 10);

            if (randomNum >= 5) {
                // don't place obstacle
                let newState = [nodeTypeEnum.none];

                if (currCord === startCord) {
                    newState.unshift(nodeTypeEnum.start);
                }
                else if (currCord === targetCord) {
                    newState.unshift(nodeTypeEnum.target);
                }

                gridMap[currCord] = [newState, nodeStateFunc];
                continue;
            }

            // place a random obstacle
            const randomObstacle = getRandomNum(nodeTypeEnum.wall, nodeTypeEnum.weighted20);
            let newState = [randomObstacle, nodeTypeEnum.none];

            if (currCord === startCord) {
                newState.unshift(nodeTypeEnum.start);
            }
            else if (currCord === targetCord) {
                newState.unshift(nodeTypeEnum.target);
            }

            nodeStateFunc(prevState => newState);
            gridMap[currCord] = [newState, nodeStateFunc];
        }
    }

    setGridState(prevState => gridMap);
};