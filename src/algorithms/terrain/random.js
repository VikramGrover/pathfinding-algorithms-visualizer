import { nodeTypeEnum } from '../../utils/constants.js';
import { getRandomNum } from '../../utils/helper.js'

export const random = async (startCord, targetCord, gridState, setGridState, rows, cols, timeout) => {
    let gridMap = {};
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            const currCord = `${x}:${y}`;
            const nodeStateFunc = gridState[currCord][1];
            const randomNum = getRandomNum(1, 10);

            if (randomNum >= 4) {
                // don't place wall
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

            // place wall
            let newState = [nodeTypeEnum.wall, nodeTypeEnum.none];

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