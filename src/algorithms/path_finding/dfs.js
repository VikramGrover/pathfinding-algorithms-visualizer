import { getNodeTypeEnum, getNeighbourNodes } from '../../utils/util.js'

export const dfs = (startCord, targetCord, gridState, setGridState, rows, cols, timeout) => {
    const stack = [startCord];
    const path = [];
    const visited = { [startCord]: 1 };

    while (stack.length > 0) {
        const currCord = stack[0];
        if (currCord !== targetCord && currCord !== startCord) {
            setTimeout(() => {
                setGridState(prevState => ({ ...prevState, [currCord]: [getNodeTypeEnum('visiting'), getNodeTypeEnum('none')] }));
            }, timeout);
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
                setGridState(prevState => ({ ...prevState, [currCord]: [getNodeTypeEnum('visited'), getNodeTypeEnum('none')] }));
            }, timeout);
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