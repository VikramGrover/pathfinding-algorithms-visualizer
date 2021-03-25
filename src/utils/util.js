const nodeTypeEnum = {
    "none": 0,
    "target": 1,
    "obstacle": 2,
    "start": 3
};
Object.freeze(nodeTypeEnum);

const nodeColor = {
    [nodeTypeEnum.none]: '#36363c',
    [nodeTypeEnum.target]: 'red',
    [nodeTypeEnum.obstacle]: 'black',
    [nodeTypeEnum.start]: 'green',
}

export const getNodeTypeEnum = (key) => {
    return nodeTypeEnum[key];
};

export const getNodeColor = (key) => {
    return nodeColor[key];
};
