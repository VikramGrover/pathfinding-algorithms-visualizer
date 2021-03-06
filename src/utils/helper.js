import { nodeTypeEnum, unweightedPathAlgos, optimalPathAlgos, nodeColors, unweightedTerrainAlgos } from './constants.js'

export const getNodeColor = (nodeState) => {
    if ((nodeState[0] === nodeTypeEnum.visited || nodeState[0] === nodeTypeEnum.visiting) && nodeState[1] > nodeTypeEnum.wall) {
        let colorA = nodeColors[nodeState[0]];
        const colorB = nodeColors[nodeState[1]];
        let amount = 0.78;

        if (nodeState[0] === nodeTypeEnum.visiting) {
            colorA = nodeColors[nodeTypeEnum.visited];
        }
        // we need to mix colors
        const [rA, gA, bA] = colorA.match(/\w\w/g).map((c) => parseInt(c, 16));
        const [rB, gB, bB] = colorB.match(/\w\w/g).map((c) => parseInt(c, 16));
        const r = Math.round(rA + (rB - rA) * amount).toString(16).padStart(2, '0');
        const g = Math.round(gA + (gB - gA) * amount).toString(16).padStart(2, '0');
        const b = Math.round(bA + (bB - bA) * amount).toString(16).padStart(2, '0');
        return '#' + r + g + b;
    }

    return nodeColors[nodeState[0]];
};

export const getNeighbourNodes = (node, rows, cols, gridState) => {
    const row = parseInt(node.split(':')[0]);
    const col = parseInt(node.split(':')[1]);

    let res = [];
    if ((row - 1 >= 0) && (gridState[`${row - 1}:${col}`][0][0] !== nodeTypeEnum.wall)) {
        res.push(`${row - 1}:${col}`)
    }
    if ((col + 1 < cols) && (gridState[`${row}:${col + 1}`][0][0] !== nodeTypeEnum.wall)) {
        res.push(`${row}:${col + 1}`)
    }
    if ((row + 1) < rows && (gridState[`${row + 1}:${col}`][0][0] !== nodeTypeEnum.wall)) {
        res.push(`${row + 1}:${col}`)
    }
    if ((col - 1 >= 0) && (gridState[`${row}:${col - 1}`][0][0] !== nodeTypeEnum.wall)) {
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

export const isTerrainAlgoUnweighted = (algo) => {
    return unweightedTerrainAlgos.includes(algo);
};

export const isAlgoOptimal = (algo) => {
    return optimalPathAlgos.includes(algo);
};

export const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const getRandomNum = (num1, num2) => {
    if (num1 === num2) {
        return num1;
    }
    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// this implements our H score heuristic
// current heuristic: take the absolute sum of the difference in node N's co-ordinates and target's co-ordinates. Hence, the greater the distance between N and target, the greater the H score for node N. This is known as the "Manhattan Distance"
export const manhattanDistanceHeuristic = (currNodeCord, targetCord) => {
    if (currNodeCord === targetCord) {
        return 0;
    }

    const currRow = parseInt(currNodeCord.split(':')[0]);
    const currCol = parseInt(currNodeCord.split(':')[1]);
    const targetRow = parseInt(targetCord.split(':')[0]);
    const targetCol = parseInt(targetCord.split(':')[1]);

    return Math.abs(currRow - targetRow) + Math.abs(currCol - targetCol);
};