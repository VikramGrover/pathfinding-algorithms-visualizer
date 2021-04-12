import { getNeighbourNodes, createPath, findMinPriorityNode, sleep } from '../../utils/helper.js'
import { nodeWeight, nodeTypeEnum } from '../../utils/constants.js'

export const bestFirst = async (startCord, targetCord, gridState, rows, cols, timeout) => {
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
                // newly calculated G score of neighbour is lower than the one in the table
                // update all the scores
                H[neighbour] = h(neighbour, targetCord) + nodeWeight[gridState[neighbour][0][0]];
                F[neighbour] = H[neighbour];
                prevNodes[neighbour] = currNode;
                openSet[neighbour] = F[neighbour];
            }
        }

        await sleep(timeout);
    }

    return [];
};

// this implements our H score heuristic
// current heuristic: take the absolute sum of the difference in node N's co-ordinates and target's co-ordinates. Hence, the greater the distance between N and target, the greater the H score for node N
const h = (currNodeCord, targetCord) => {
    if (currNodeCord === targetCord) {
        return 0;
    }

    const currRow = parseInt(currNodeCord.split(':')[0]);
    const currCol = parseInt(currNodeCord.split(':')[1]);
    const targetRow = parseInt(targetCord.split(':')[0]);
    const targetCol = parseInt(targetCord.split(':')[1]);

    return Math.abs(currRow - targetRow) + Math.abs(currCol - targetCol);
};