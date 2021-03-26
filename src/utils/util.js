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

export const getNodeTypeEnum = (key) => {
    return nodeTypeEnum[key];
};

export const getNodeColorClass = (key) => {
    return nodeColorClass[key];
};

export const getNodeWeight = (key) => {
    return nodeWeight[key];
};
