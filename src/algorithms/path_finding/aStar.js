import { getNodeTypeEnum, getNodeWeight, getNeighbourNodes, createPath, findMinPriorityNode } from '../../utils/util.js'

export const aStar = (startCord, targetCord, gridState, setGridState, rows, cols, timeout) => {
    let openSet = { [startCord]: 0 };
    let G = { [startCord]: 0 }; // G(n) => tell us the current shortest distance from start node to node n
    let H = { [startCord]: 0 }; // H(n) => tells us the estimated distance from node n to target node
    let F = { [startCord]: 0 }; // F(n) = G(n) + H(n)
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
            setTimeout(() => {
                setGridState(prevState => ({ ...prevState, [currNode]: [getNodeTypeEnum('visited'), ...prevState[currNode].slice(1)] }));
            }, timeout);
        }
        else if (currNode === targetCord) {
            // we have reached target, return path
            return createPath(startCord, targetCord, prevNodes);
        }

        const neighbours = getNeighbourNodes(currNode, rows, cols, gridState);
        for (const neighbour of neighbours) {
            const currGScore = G[currNode] + getNodeWeight(gridState[neighbour][0]);

            if (currGScore < G[neighbour]) {
                if (neighbour !== startCord && neighbour !== targetCord) {
                    setTimeout(() => {
                        setGridState(prevState => ({ ...prevState, [neighbour]: [getNodeTypeEnum('visiting'), ...prevState[neighbour]] }));
                    }, timeout);
                }
                // newly calculated G score of neighbour is lower than the one in the table
                // update all the scores
                G[neighbour] = currGScore;
                H[neighbour] = h(neighbour, targetCord);
                F[neighbour] = G[neighbour] + H[neighbour];
                prevNodes[neighbour] = currNode;
                openSet[neighbour] = F[neighbour];
            }
        }
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