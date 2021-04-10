import { dijkstras } from '../algorithms/path_finding/dijkstras.js'
import { dfs } from '../algorithms/path_finding/dfs.js'
import { bfs } from '../algorithms/path_finding/bfs.js'
import { aStar } from '../algorithms/path_finding/aStar.js'
import { bestFirst } from '../algorithms/path_finding/bestFirst.js';

// PATHFINDING ALGORITHM CONSTANTS -------------------------------------------
const DIJKSTRAS = "Dijkstra's";
const ASTAR = 'A* (A-Star)';
const BFS = 'Breadth-first Search';
const DFS = 'Depth-first Search';
const BEST_FIRST = 'Best-first Search';

const algoFunctions = {
    [DIJKSTRAS]: dijkstras,
    [ASTAR]: aStar,
    [BFS]: bfs,
    [DFS]: dfs,
    [BEST_FIRST]: bestFirst
}
Object.freeze(algoFunctions);

export { DIJKSTRAS, ASTAR, BFS, DFS, BEST_FIRST, algoFunctions };

const allPathAlgos = [DIJKSTRAS, ASTAR, BFS, DFS, BEST_FIRST];
Object.freeze(allPathAlgos);
const unweightedPathAlgos = [DFS, BFS];
Object.freeze(unweightedPathAlgos);
const optimalPathAlgos = [DIJKSTRAS, ASTAR, BFS];
Object.freeze(optimalPathAlgos);

export { allPathAlgos, unweightedPathAlgos, optimalPathAlgos };

// TERRAIN ALGORTHIM CONSTANTS -------------------------------------------
const ALGO1 = "ALGO 1";
const ALGO2 = "ALGO 2";
const terrainAlgos = [ALGO1, ALGO2];
Object.freeze(terrainAlgos);

export { ALGO1, ALGO2, terrainAlgos };

const pathfindingAlgoInfo = {
    [DIJKSTRAS]: {
        'description': <p>Dijkstra's algorithm to find the shortest path between a and b. It picks the unvisited vertex with the <strong>lowest distance</strong>, calculates the distance through it to each unvisited neighbor, and updates the neighbor's distance if smaller. Mark visited (set to red) when done with neighbors.</p>,
        'optimality': <p>Dijkstra's is guranteed to find the shortest path.</p>
    }
}
Object.freeze(pathfindingAlgoInfo);
export { pathfindingAlgoInfo };

// NODE TYPES ------------------------------------------------------------
const nodeTypeEnum = {
    'path': 0,
    'visited': 1,
    'visiting': 2,
    'none': 3,
    'target': 4,
    'start': 5,
    'remObstacle': 6,
    'wall': 7,
    'weighted100': 8,
    'weighted80': 9,
    'weighted60': 10,
    'weighted40': 11,
    'weighted20': 12
};
Object.freeze(nodeTypeEnum);

export { nodeTypeEnum };

const nodeColorClass = {
    [nodeTypeEnum.none]: 'none',
    [nodeTypeEnum.target]: 'target',
    [nodeTypeEnum.wall]: 'wall',
    [nodeTypeEnum.visiting]: 'visiting',
    [nodeTypeEnum.start]: 'start',
    [nodeTypeEnum.visited]: 'visited',
    [nodeTypeEnum.path]: 'path',
    [nodeTypeEnum.weighted100]: 'weighted100',
    [nodeTypeEnum.weighted80]: 'weighted80',
    [nodeTypeEnum.weighted60]: 'weighted60',
    [nodeTypeEnum.weighted40]: 'weighted40',
    [nodeTypeEnum.weighted20]: 'weighted20'
}
Object.freeze(nodeColorClass);

export { nodeColorClass };

const nodeWeight = {
    [nodeTypeEnum.none]: 1,
    [nodeTypeEnum.target]: 1,
    [nodeTypeEnum.wall]: Infinity,
    [nodeTypeEnum.start]: 1,
    [nodeTypeEnum.weighted100]: 100,
    [nodeTypeEnum.weighted80]: 80,
    [nodeTypeEnum.weighted60]: 60,
    [nodeTypeEnum.weighted40]: 40,
    [nodeTypeEnum.weighted20]: 20
}
Object.freeze(nodeWeight);
export { nodeWeight };

// OBSTACLE TYPES --------------------------------------------------------
const obstacleTypes = ['Wall (∞)', 'Weighted (100)', 'Weighted (80)', 'Weighted (60)', 'Weighted (40)', 'Weighted (20)'];
const obsEnum = {
    [obstacleTypes[0]]: nodeColorClass[nodeTypeEnum.wall],
    [obstacleTypes[1]]: nodeColorClass[nodeTypeEnum.weighted100],
    [obstacleTypes[2]]: nodeColorClass[nodeTypeEnum.weighted80],
    [obstacleTypes[3]]: nodeColorClass[nodeTypeEnum.weighted60],
    [obstacleTypes[4]]: nodeColorClass[nodeTypeEnum.weighted40],
    [obstacleTypes[5]]: nodeColorClass[nodeTypeEnum.weighted20]
}
Object.freeze(obsEnum);
export { obstacleTypes, obsEnum };