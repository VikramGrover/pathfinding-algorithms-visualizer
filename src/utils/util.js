import { dijkstras } from '../algorithms/path_finding/dijkstras.js'

const nodeTypeEnum = {
    'none': 0,
    'target': 1,
    'path': 2,
    'start': 3,
    'remObstacle': 4,
    'visited': 5,
    'obstacle': 6
};
Object.freeze(nodeTypeEnum);

const nodeColorClass = {
    [nodeTypeEnum.none]: 'empty',
    [nodeTypeEnum.target]: 'target',
    [nodeTypeEnum.obstacle]: 'obstacle',
    [nodeTypeEnum.start]: 'start',
    [nodeTypeEnum.visited]: 'visited',
    [nodeTypeEnum.path]: 'path'
}
Object.freeze(nodeColorClass);

const nodeWeight = {
    [nodeTypeEnum.none]: 1,
    [nodeTypeEnum.target]: 1,
    [nodeTypeEnum.obstacle]: Infinity,
    [nodeTypeEnum.start]: 1
}
Object.freeze(nodeWeight);

const pathAlgos = ["Dijkstra's", "A-Star", "Breadth First Search", "Depth First Search"];

export const getNodeTypeEnum = (key) => {
    return nodeTypeEnum[key];
};

export const getNodeColorClass = (key) => {
    return nodeColorClass[key];
};

export const getNodeWeight = (key) => {
    return nodeWeight[key];
};

export const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};

export const getPathAlgos = () => {
    return pathAlgos;
};

export const runPathAlgo = (selectedAlgo, startCord, targetCord, updatedGridState, setGridState, rows, cols) => {
    switch (selectedAlgo) {
        case "Dijkstra's":
            return dijkstras(startCord, targetCord, updatedGridState, setGridState, rows, cols);
    }
};
