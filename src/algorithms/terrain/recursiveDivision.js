import { nodeTypeEnum } from '../../utils/constants.js'
import { sleep, getRandomNum } from '../../utils/helper.js'

const HORIZONTAL = 0;
const VERTICAL = 1;

export const recursiveDivision = async (startCord, targetCord, gridState, setGridState, rows, cols, timeout) => {
    // make border around the screen
    for (var x = 0; x < rows; x++) {
        for (var y = 0; y < cols; y++) {
            const currCord = `${x}:${y}`;
            const nodeStateFunc = gridState[currCord][1];
            if (x === 0 || x === (rows - 1) || y === 0 || y === (cols - 1)) {
                await sleep(timeout);
                let state = [nodeTypeEnum.wall, nodeTypeEnum.none];
                if (currCord === startCord) {
                    state = [nodeTypeEnum.start, nodeTypeEnum.wall, nodeTypeEnum.none];
                }
                else if (currCord === targetCord) {
                    state = [nodeTypeEnum.target, nodeTypeEnum.wall, nodeTypeEnum.none];
                }
                nodeStateFunc(prevState => state);
                setGridState(prevState => ({ ...prevState, [currCord]: [state, prevState[currCord][1]] }));
            }
        }
    }

    // await divide(1, 1, rows - 2, cols - 2, gridState, setGridState, timeout);
    await divide(startCord, targetCord, gridState, setGridState, 1, rows - 2, 1, cols - 2, timeout, rows, cols);
};

const divide = async (startCord, targetCord, gridState, setGridState, startRow, endRow, startCol, endCol, timeout, rows, cols) => {
    const width = endCol - startCol + 1;
    const height = endRow - startRow + 1;

    let orientation = HORIZONTAL;
    if (width < height) {
        orientation = HORIZONTAL;
    }
    else if (height < width) {
        orientation = VERTICAL;
    }
    else {
        orientation = getRandomNum(HORIZONTAL, VERTICAL);
    }

    if (orientation === HORIZONTAL) {
        // cutting horizontally
        if (height < 3 || (startRow % 2 === 1 && height === 3)) {
            return;
        }
        let sCol = startCol;
        if (startCol % 2 === 1) {
            sCol += 1;
        }

        let sRow = startRow + 2;
        if (startRow % 2 === 0) {
            sRow = startRow + 1;
        }

        const skip = Math.floor(getRandomNum(sCol, endCol) / 2) * 2;
        let randRow = getRandomNum(sRow, endRow - 2);
        randRow = (Math.floor(randRow / 2) * 2) + 1;

        for (let i = startCol; i <= endCol; i++) {
            if (i === skip) {
                continue;
            }
            const currCord = `${randRow}:${i}`;
            const nodeStateFunc = gridState[currCord][1];
            let state = [nodeTypeEnum.wall, nodeTypeEnum.none];
            if (currCord === startCord) {
                state = [nodeTypeEnum.start, nodeTypeEnum.wall, nodeTypeEnum.none];
            }
            else if (currCord === targetCord) {
                state = [nodeTypeEnum.target, nodeTypeEnum.wall, nodeTypeEnum.none];
            }
            nodeStateFunc(prevState => state);
            setGridState(prevState => ({ ...prevState, [currCord]: [state, prevState[currCord][1]] }));
            await sleep(timeout);
        }

        await divide(startCord, targetCord, gridState, setGridState, startRow, randRow - 1, startCol, endCol, timeout, rows, cols);
        await divide(startCord, targetCord, gridState, setGridState, randRow + 1, endRow, startCol, endCol, timeout, rows, cols);
    }
    else if (orientation === VERTICAL) {
        // divide vertically 
        if (width < 3 || (startCol % 2 === 1 && width === 3)) {
            return;
        }
        let sRow = startRow;
        if (startRow % 2 === 1) {
            sRow += 1;
        }

        let sCol = startCol + 2;
        if (startCol % 2 === 0) {
            sCol = startCol + 1;
        }
        const skip = Math.floor(getRandomNum(sRow, endRow) / 2) * 2;
        let randCol = getRandomNum(sCol, endCol - 2);
        randCol = (Math.floor(randCol / 2) * 2) + 1;

        for (let i = startRow; i <= endRow; i++) {
            if (i === skip) {
                continue;
            }
            const currCord = `${i}:${randCol}`;
            const nodeStateFunc = gridState[currCord][1];
            let state = [nodeTypeEnum.wall, nodeTypeEnum.none];
            if (currCord === startCord) {
                state = [nodeTypeEnum.start, nodeTypeEnum.wall, nodeTypeEnum.none];
            }
            else if (currCord === targetCord) {
                state = [nodeTypeEnum.target, nodeTypeEnum.wall, nodeTypeEnum.none];
            }
            nodeStateFunc(prevState => state);
            setGridState(prevState => ({ ...prevState, [currCord]: [state, prevState[currCord][1]] }));
            await sleep(timeout);
        }

        await divide(startCord, targetCord, gridState, setGridState, startRow, endRow, startCol, randCol - 1, timeout, rows, cols);

        await divide(startCord, targetCord, gridState, setGridState, startRow, endRow, randCol + 1, endCol, timeout, rows, cols);
    }
};