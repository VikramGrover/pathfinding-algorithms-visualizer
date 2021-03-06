import { getNeighbourNodes, createPath, sleep } from '../../utils/helper.js'
import { nodeTypeEnum } from '../../utils/constants.js'

export const bfs = async (startCord, targetCord, gridState, rows, cols, timeout) => {
    let queue = [startCord];
    let visited = { [startCord]: 1 };
    let prevNodes = {};

    while (queue.length > 0) {
        const currCord = queue.pop();
        if (currCord !== startCord && currCord !== targetCord) {
            const nodeStateFunc = gridState[currCord][1];
            nodeStateFunc(prevState => ([nodeTypeEnum.visited, nodeTypeEnum.none]));
        }
        const neighbours = getNeighbourNodes(currCord, rows, cols, gridState);

        for (const neighbour of neighbours) {
            if (neighbour in visited) {
                continue;
            }

            prevNodes[neighbour] = currCord;
            queue.unshift(neighbour);
            visited[neighbour] = 1;

            if (neighbour === targetCord) {
                return createPath(startCord, targetCord, prevNodes);
            }

            const nodeStateFunc = gridState[neighbour][1];
            nodeStateFunc(prevState => ([nodeTypeEnum.visiting, nodeTypeEnum.none]));
        }

        await sleep(timeout);
    }

    return [];
};
