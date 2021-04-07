import { getNodeTypeEnum, getNeighbourNodes, createPath } from '../../utils/util.js'

export const bfs = (startCord, targetCord, gridState, setGridState, rows, cols, timeout) => {
    let queue = [startCord];
    let visited = { [startCord]: 1 };
    let prevNodes = {};

    while (queue.length > 0) {
        const currCord = queue.pop();
        if (currCord !== startCord && currCord !== targetCord) {
            setTimeout(() => {
                setGridState(prevState => ({ ...prevState, [currCord]: [getNodeTypeEnum('visited'), getNodeTypeEnum('none')] }));
            }, timeout);
        }
        const neighbours = getNeighbourNodes(currCord, rows, cols, gridState);

        for (const neighbour of neighbours) {
            if (neighbour in visited) {
                continue;
            }

            prevNodes[neighbour] = currCord;
            queue.unshift(neighbour);
            visited[neighbour] = 1;

            if (neighbour === targetCord) {
                return createPath(startCord, targetCord, prevNodes);
            }

            setTimeout(() => {
                setGridState(prevState => ({ ...prevState, [neighbour]: [getNodeTypeEnum('visiting'), getNodeTypeEnum('none')] }));
            }, timeout);
        }
    }

    return [];
};