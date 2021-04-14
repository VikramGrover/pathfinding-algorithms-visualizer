import { getNeighbourNodes, createPath, findMinPriorityNode, sleep } from '../../utils/helper.js'
import { nodeWeight, nodeTypeEnum } from '../../utils/constants.js'

export const aStar = async (startCord, targetCord, gridState, rows, cols, timeout) => {
    let openSet = { [startCord]: 0 };
    let G = { [startCord]: 0 }; // G(n) => tell us the current shortest distance from start node to node n
    let H = { [startCord]: 0 }; // H(n) => tells us the estimated distance from node n to target node
    let F = { [startCord]: 0 }; // F(n) = G(n) + H(n)
    let visited = {};
    let prevNodes = {};

    // intialize all the scores to infinity for all node !== start node
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            let cord = `${x}:${y}`

            if (cord !== startCord) {
                F[cord] = G[cord] = H[cord] = Infinity;
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
            // we have reached target, return path
            return createPath(startCord, targetCord, prevNodes);
        }

        const neighbours = getNeighbourNodes(currNode, rows, cols, gridState);
        for (const neighbour of neighbours) {
            const currGScore = G[currNode] + nodeWeight[gridState[neighbour][0][0]];

            if (currGScore < G[neighbour]) {
                if (neighbour !== startCord && neighbour !== targetCord && !(neighbour in visited)) {
                    const nodeStateFunc = gridState[neighbour][1];
                    nodeStateFunc(prevState => ([nodeTypeEnum.visiting, ...prevState]));
                }
                visited[neighbour] = 1;
                // newly calculated G score of neighbour is lower than the one in the table
                // update all the scores
                G[neighbour] = currGScore;
                H[neighbour] = h(neighbour, targetCord);
                F[neighbour] = G[neighbour] + H[neighbour];
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

    return Math.sqrt(Math.pow(currRow - targetRow, 2) + Math.pow(currCol - targetCol, 2));
};