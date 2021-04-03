import { getNodeTypeEnum, getNodeWeight, shuffleArray } from '../../utils/util.js'

export const dijkstras = (startCord, targetCord, gridState, setGridState, rows, cols) => {
    if (startCord === targetCord) {
        return [];
    }

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
            setTimeout(() => {
                setGridState(prevState => ({ ...prevState, [minKey]: [getNodeTypeEnum('visited'), ...prevState[minKey].slice(1)] }));
            }, 1);
        }
        else if (minKey === targetCord) {
            return createPath(startCord, targetCord, prevNodes);
        }

        const neighbours = getNeighbourNodes(minKey, rows, cols, gridState);
        for (const neighbour of neighbours) {
            const currPath = totalCosts[minKey] + getNodeWeight(gridState[neighbour][0]);

            if (neighbour in visited) {
                continue;
            }

            if (((neighbour in minPQ) && currPath < totalCosts[neighbour]) || !(neighbour in minPQ)) {
                totalCosts[neighbour] = currPath;
                prevNodes[neighbour] = minKey;
                minPQ[neighbour] = currPath;
                if (neighbour !== targetCord) {
                    setTimeout(() => {
                        setGridState(prevState => ({ ...prevState, [neighbour]: [getNodeTypeEnum('visiting'), ...prevState[neighbour]] }));
                    }, 1);
                }
            }
        }
    }

    return [];
};

const createPath = (startCord, targetCord, prevNodes) => {
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

const getNeighbourNodes = (node, rows, cols, gridState) => {
    const row = parseInt(node.split(':')[0]);
    const col = parseInt(node.split(':')[1]);

    let res = [];
    if ((col + 1 < cols) && (gridState[`${row}:${col + 1}`][0] !== getNodeTypeEnum('wall'))) {
        res.push(`${row}:${col + 1}`)
    }
    if ((row - 1 >= 0) && (gridState[`${row - 1}:${col}`][0] !== getNodeTypeEnum('wall'))) {
        res.push(`${row - 1}:${col}`)
    }
    if ((row + 1) < rows && (gridState[`${row + 1}:${col}`][0] !== getNodeTypeEnum('wall'))) {
        res.push(`${row + 1}:${col}`)
    }
    if ((col - 1 >= 0) && (gridState[`${row}:${col - 1}`][0] !== getNodeTypeEnum('wall'))) {
        res.push(`${row}:${col - 1}`)
    }

    shuffleArray(res);
    return res;
};

const findMinPriorityNode = (minPQ) => {
    let minPriority = Math.min(...Object.values(minPQ));

    for (const key in minPQ) {
        if (minPQ[key] === minPriority) {
            return key;
        }
    }
};