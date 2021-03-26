const nodeTypeEnum = {
    'none': 0,
    'target': 1,
    'obstacle': 2,
    'start': 3,
    'remObstacle': 4
};
Object.freeze(nodeTypeEnum);

const nodeColorClass = {
    [nodeTypeEnum.none]: 'empty-node',
    [nodeTypeEnum.target]: 'target-node',
    [nodeTypeEnum.obstacle]: 'obstacle-node',
    [nodeTypeEnum.start]: 'start-node',
}

export const getNodeTypeEnum = (key) => {
    return nodeTypeEnum[key];
};

export const getNodeColorClass = (key) => {
    return nodeColorClass[key];
};
