import { getNodeTypeEnum, getNodeWeight, shuffleArray } from '../../utils/util.js'

export const dfs = (startCord, targetCord, gridState, setGridState, rows, cols) => {
    const stack = [startCord];
    const path = [];
    const visited = { [startCord]: 1 };

    while (stack.length > 0) {
        const currCord = stack[0];
        if (currCord !== targetCord && currCord !== startCord) {
            setTimeout(() => {
                setGridState(prevState => ({ ...prevState, [currCord]: [getNodeTypeEnum('visiting'), ...prevState[currCord]] }));
            }, 1);
        }

        if (currCord === targetCord) {
            stack.pop();
            stack.shift();
            return stack;
        }

        if (currCord !== startCord) {
            path.unshift(currCord);
            visited[currCord] = 1;
            setTimeout(() => {
                setGridState(prevState => ({ ...prevState, [currCord]: [getNodeTypeEnum('visited'), ...prevState[currCord].slice(1)] }));
            }, 1);
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
    }

    return [];
};

const getNeighbourNodes = (node, rows, cols, gridState) => {
    const row = parseInt(node.split(':')[0]);
    const col = parseInt(node.split(':')[1]);

    let res = [];
    if ((row - 1 >= 0) && (gridState[`${row - 1}:${col}`][0] !== getNodeTypeEnum('wall'))) {
        res.push(`${row - 1}:${col}`)
    }
    if ((col + 1 < cols) && (gridState[`${row}:${col + 1}`][0] !== getNodeTypeEnum('wall'))) {
        res.push(`${row}:${col + 1}`)
    }
    if ((row + 1) < rows && (gridState[`${row + 1}:${col}`][0] !== getNodeTypeEnum('wall'))) {
        res.push(`${row + 1}:${col}`)
    }
    if ((col - 1 >= 0) && (gridState[`${row}:${col - 1}`][0] !== getNodeTypeEnum('wall'))) {
        res.push(`${row}:${col - 1}`)
    }

    return res;
};