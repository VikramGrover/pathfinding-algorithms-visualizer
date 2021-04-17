import { getNeighbourNodes, createPath, findMinPriorityNode, sleep, manhattanDistanceHeuristic } from '../../utils/helper.js'
import { nodeTypeEnum } from '../../utils/constants.js'

export const greedyBestFirstSearch = async (startCord, targetCord, gridState, rows, cols, timeout) => {
    let openSet = { [startCord]: 0 };
    let H = { [startCord]: 0 }; // H(n) => tells us the estimated distance from node n to target node
    let F = { [startCord]: 0 }; // F(n) = H(n)
    let prevNodes = {};
    let visited = {};

    // intialize all the scores to infinity for all node !== start node
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            let cord = `${x}:${y}`

            if (cord !== startCord) {
                F[cord] = H[cord] = Infinity;
            }
        }
    }

    while (Object.keys(openSet).length > 0) {
        const currNode = findMinPriorityNode(openSet);
        delete openSet[currNode];

        if (currNode !== startCord && currNode !== targetCord) {
            const nodeStateFunc = gridState[currNode][1];
            nodeStateFunc(prevState => ([nodeTypeEnum.visited, ...prevState.slice(1)]));
        }
        else if (currNode === targetCord) {
            console.log("DONNEE");
            // we have reached target, return path
            return createPath(startCord, targetCord, prevNodes);
        }

        const neighbours = getNeighbourNodes(currNode, rows, cols, gridState);
        for (const neighbour of neighbours) {
            if (!(neighbour in visited)) {
                visited[neighbour] = 1;

                if (neighbour !== startCord && neighbour !== targetCord) {
                    const nodeStateFunc = gridState[neighbour][1];
                    nodeStateFunc(prevState => ([nodeTypeEnum.visiting, ...prevState]));
                }

                H[neighbour] = manhattanDistanceHeuristic(neighbour, targetCord);
                F[neighbour] = H[neighbour];
                prevNodes[neighbour] = currNode;
                openSet[neighbour] = F[neighbour];
            }
        }

        await sleep(timeout);
    }

    return [];
};
