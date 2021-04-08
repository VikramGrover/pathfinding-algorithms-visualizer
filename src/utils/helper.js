import { nodeTypeEnum, unweightedPathAlgos, optimalPathAlgos } from './constants.js'

export const getNeighbourNodes = (node, rows, cols, gridState) => {
    const row = parseInt(node.split(':')[0]);
    const col = parseInt(node.split(':')[1]);

    let res = [];
    if ((row - 1 >= 0) && (gridState[`${row - 1}:${col}`][0] !== nodeTypeEnum.wall)) {
        res.push(`${row - 1}:${col}`)
    }
    if ((col + 1 < cols) && (gridState[`${row}:${col + 1}`][0] !== nodeTypeEnum.wall)) {
        res.push(`${row}:${col + 1}`)
    }
    if ((row + 1) < rows && (gridState[`${row + 1}:${col}`][0] !== nodeTypeEnum.wall)) {
        res.push(`${row + 1}:${col}`)
    }
    if ((col - 1 >= 0) && (gridState[`${row}:${col - 1}`][0] !== nodeTypeEnum.wall)) {
        res.push(`${row}:${col - 1}`)
    }

    return res;
};

export const createPath = (startCord, targetCord, prevNodes) => {
    let cord = targetCord;
    let path = [];

    while (true) {
        cord = prevNodes[cord];

        if (cord === startCord) {
            break;
        }

        path.push(cord);
    }

    return path;
};

export const findMinPriorityNode = (minPQ) => {
    let minPriority = Math.min(...Object.values(minPQ));

    for (const key in minPQ) {
        if (minPQ[key] === minPriority) {
            return key;
        }
    }
};

export const isAlgoUnweighted = (algo) => {
    return unweightedPathAlgos.includes(algo);
};

export const isAlgoOptimal = (algo) => {
    return optimalPathAlgos.includes(algo);
};
