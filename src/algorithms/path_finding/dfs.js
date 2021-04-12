import { getNeighbourNodes, sleep } from '../../utils/helper.js'
import { nodeTypeEnum } from '../../utils/constants.js'

export const dfs = async (startCord, targetCord, gridState, rows, cols, timeout) => {
    const stack = [startCord];
    const path = [];
    const visited = { [startCord]: 1 };

    while (stack.length > 0) {
        const currCord = stack[0];
        if (currCord !== targetCord && currCord !== startCord) {
            const nodeStateFunc = gridState[currCord][1];
            nodeStateFunc(prevState => ([nodeTypeEnum.visiting, nodeTypeEnum.none]));
        }

        if (currCord === targetCord) {
            stack.pop();
            stack.shift();
            return stack;
        }

        if (currCord !== startCord) {
            path.unshift(currCord);
            visited[currCord] = 1;
            const nodeStateFunc = gridState[currCord][1];
            nodeStateFunc(prevState => ([nodeTypeEnum.visited, nodeTypeEnum.none]));
        }

        const neighbours = getNeighbourNodes(currCord, rows, cols, gridState);
        let unvisitedNeighbourFound = false;
        for (const neighbour of neighbours) {
            if (neighbour in visited) {
                continue;
            }

            stack.unshift(neighbour);
            unvisitedNeighbourFound = true;
            break;
        }

        if (!unvisitedNeighbourFound) {
            stack.splice(0, 1);
        }

        await sleep(timeout);
    }

    return [];
};