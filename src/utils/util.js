const nodeTypeEnum = {
    "none": 0,
    "target": 1,
    "obstacle": 2,
    "start": 3
};
Object.freeze(nodeTypeEnum);

export const getNodeTypeEnum = (key) => {
    return nodeTypeEnum[key];
};
