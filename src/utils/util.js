const nodeTypeEnum = {
    'none': 0,
    'target': 1,
    'path': 2,
    'start': 3,
    'remObstacle': 4,
    'visited': 5,
    'wall': 6,
    'weighted-100': 7,
    'weighted-80': 8,
    'weighted-60': 9,
    'weighted-40': 10,
    'weighted-20': 11
};
Object.freeze(nodeTypeEnum);

const nodeColorClass = {
    [nodeTypeEnum.none]: 'empty',
    [nodeTypeEnum.target]: 'target',
    [nodeTypeEnum.wall]: 'wall',
    [nodeTypeEnum.start]: 'start',
    [nodeTypeEnum.visited]: 'visited',
    [nodeTypeEnum.path]: 'path',
    [nodeTypeEnum["weighted-100"]]: 'weighted-100',
    [nodeTypeEnum["weighted-80"]]: 'weighted-80',
    [nodeTypeEnum["weighted-60"]]: 'weighted-60',
    [nodeTypeEnum["weighted-40"]]: 'weighted-40',
    [nodeTypeEnum["weighted-20"]]: 'weighted-20'
}
Object.freeze(nodeColorClass);

const nodeWeight = {
    [nodeTypeEnum.none]: 1,
    [nodeTypeEnum.target]: 1,
    [nodeTypeEnum.wall]: Infinity,
    [nodeTypeEnum.start]: 1,
    [nodeTypeEnum["weighted-100"]]: 100,
    [nodeTypeEnum["weighted-80"]]: 80,
    [nodeTypeEnum["weighted-60"]]: 60,
    [nodeTypeEnum["weighted-40"]]: 40,
    [nodeTypeEnum["weighted-20"]]: 20
}
Object.freeze(nodeWeight);

const pathAlgos = ["Dijkstra's", "A-Star", "BFS", "DFS"];
const terrainAlgos = ["Algo 1", "Algo 2"];
const obstacleTypes = ['Wall (∞)', 'Weighted (100)', 'Weighted (80)', 'Weighted (60)', 'Weighted (40)', 'Weighted (20)'];
const obsEnum = {
    'Wall (∞)': 'wall',
    'Weighted (100)': 'weighted-100',
    'Weighted (80)': 'weighted-80',
    'Weighted (60)': 'weighted-60',
    'Weighted (40)': 'weighted-40',
    'Weighted (20)': 'weighted-20'
}
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

export const getTerrainAlgos = () => {
    return terrainAlgos;
};

export const getObstacleTypes = () => {
    return obstacleTypes;
}

export const getObstacleEnum = (key) => {
    return obsEnum[key];
};
