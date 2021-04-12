import { getNeighbourNodes, createPath, findMinPriorityNode, sleep } from '../../utils/helper.js'
import { nodeWeight, nodeTypeEnum } from '../../utils/constants.js'

export const dijkstras = async (startCord, targetCord, gridState, rows, cols, timeout) => {
    let totalCosts = {};
    let prevNodes = {};
    let minPQ = {};
    let visited = {};

    totalCosts[startCord] = 0;
    minPQ[startCord] = 0;

    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            let cord = `${x}:${y}`

            if (cord !== startCord) {
                totalCosts[cord] = Infinity;
            }
        }
    }

    while (Object.keys(minPQ).length > 0) {
        const minKey = findMinPriorityNode(minPQ);
        delete minPQ[minKey];
        visited[minKey] = 1;

        if (minKey !== startCord && minKey !== targetCord) {
            const nodeStateFunc = gridState[minKey][1];
            nodeStateFunc(prevState => ([nodeTypeEnum.visited, ...prevState.slice(1)]));
        }
        else if (minKey === targetCord) {
            return createPath(startCord, targetCord, prevNodes);
        }

        const neighbours = getNeighbourNodes(minKey, rows, cols, gridState);
        for (const neighbour of neighbours) {
            const currPath = totalCosts[minKey] + nodeWeight[gridState[neighbour][0][0]];

            if (neighbour in visited) {
                continue;
            }

            if (((neighbour in minPQ) && currPath < totalCosts[neighbour]) || !(neighbour in minPQ)) {
                totalCosts[neighbour] = currPath;
                prevNodes[neighbour] = minKey;
                minPQ[neighbour] = currPath;
                if (neighbour !== targetCord) {
                    const nodeStateFunc = gridState[neighbour][1];
                    nodeStateFunc(prevState => ([nodeTypeEnum.visiting, ...prevState]));
                }
            }
        }

        await sleep(timeout);
    }

    return [];
};