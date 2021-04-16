import { dijkstras } from '../algorithms/path_finding/dijkstras.js'
import { dfs } from '../algorithms/path_finding/dfs.js'
import { bfs } from '../algorithms/path_finding/bfs.js'
import { aStar } from '../algorithms/path_finding/aStar.js'
import { bestFirst } from '../algorithms/path_finding/bestFirst.js';
import { recursiveDivision } from '../algorithms/terrain/recursiveDivision.js'
import { perlinNoise } from '../algorithms/terrain/perlin.js'
import { random } from '../algorithms/terrain/random.js';
import { randomWeighted } from '../algorithms/terrain/randomWeighted.js';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
};
Object.freeze(algoFunctions);

const PATH_CREATION_SLEEP = 7;
const algoSleepTimes = {
    [DIJKSTRAS]: 1,
    [ASTAR]: 4,
    [BFS]: 5,
    [DFS]: 10,
    [BEST_FIRST]: 11
};
Object.freeze(algoSleepTimes);

export { DIJKSTRAS, ASTAR, BFS, DFS, BEST_FIRST, algoFunctions, PATH_CREATION_SLEEP, algoSleepTimes };

const allPathAlgos = [DIJKSTRAS, ASTAR, BFS, DFS, BEST_FIRST];
Object.freeze(allPathAlgos);
const unweightedPathAlgos = [DFS, BFS, BEST_FIRST];
Object.freeze(unweightedPathAlgos);
const optimalPathAlgos = [DIJKSTRAS, ASTAR, BFS];
Object.freeze(optimalPathAlgos);

export { allPathAlgos, unweightedPathAlgos, optimalPathAlgos };

// TERRAIN ALGORTHIM CONSTANTS -------------------------------------------
const MAZE_GENERATION_SLEEP = 5;
const RECURSIVE_DIVISION = "Recursive Division";
const PERLIN_NOISE = "Perlin Noise";
const RANDOM_UNWEIGHTED = "Random";
const RANDOM_WEIGHTED = "Random (Weighted)"
const allTerrainAlgos = [RECURSIVE_DIVISION, PERLIN_NOISE, RANDOM_UNWEIGHTED, RANDOM_WEIGHTED];
Object.freeze(allTerrainAlgos);

const unweightedTerrainAlgos = [RECURSIVE_DIVISION, RANDOM_UNWEIGHTED];
Object.freeze(unweightedTerrainAlgos);

const terrainFunctions = {
    [RECURSIVE_DIVISION]: recursiveDivision,
    [PERLIN_NOISE]: perlinNoise,
    [RANDOM_UNWEIGHTED]: random,
    [RANDOM_WEIGHTED]: randomWeighted,
};
Object.freeze(terrainFunctions);

const terrainAlgoSleepTimes = {
    [RECURSIVE_DIVISION]: 5,
    [PERLIN_NOISE]: 1,
    [RANDOM_UNWEIGHTED]: 1,
    [RANDOM_WEIGHTED]: 1
};
Object.freeze(terrainAlgoSleepTimes);

export { MAZE_GENERATION_SLEEP, RECURSIVE_DIVISION, PERLIN_NOISE, allTerrainAlgos, unweightedTerrainAlgos, terrainFunctions, terrainAlgoSleepTimes };

// NODE CONSTANTS ------------------------------------------------------------
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
};
Object.freeze(nodeColorClass);

export { nodeColorClass };

const EMPTY_NODE_BORDER_COLOR = '#3C4046';
const nodeColors = {
    [nodeTypeEnum.none]: 'transparent',
    [nodeTypeEnum.target]: '#f14846',
    [nodeTypeEnum.wall]: '#18191c',
    [nodeTypeEnum.visiting]: '#4988dc',
    [nodeTypeEnum.start]: '#43b581',
    [nodeTypeEnum.visited]: '#3f70dd',
    [nodeTypeEnum.path]: '#f9a719',
    [nodeTypeEnum.weighted100]: '#1b1c1e',
    [nodeTypeEnum.weighted80]: '#1c1e21',
    [nodeTypeEnum.weighted60]: '#222327',
    [nodeTypeEnum.weighted40]: '#26272b',
    [nodeTypeEnum.weighted20]: '#2b2c31'
};
Object.freeze(nodeColors);

export { EMPTY_NODE_BORDER_COLOR, nodeColors };

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
};
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
};
Object.freeze(obsEnum);

export { obstacleTypes, obsEnum };

// ALGO INFO BOX --------------------------------------------------------

const codeBlockCustomStyle = {
    fontSize: 13,
    backgroundColor: '#18191c',
    borderRadius: 4,
    padding: 20,
    lineHeight: 1.5,
    maxHeight: 250,
    marginTop: 7
};

const inLineCodeBlockCustomStyle = {
    fontSize: 12,
    backgroundColor: '#18191c',
    borderRadius: 4,
    padding: 4,
    display: 'inline',
    color: 'white'
};

const pathfindingAlgoInfo = {
    [DIJKSTRAS]: {
        'summary': <h4>{DIJKSTRAS} is a <strong>greedy</strong> pathfinding algorithm that is able find <strong>optimal (shortest)</strong> paths, even in <strong>weighted</strong> graphs</h4>,
        'description': null,
        'pseudocode': `min_pq = min_heap(start_node: 0)
dist = { start_node: 0 }
prev = {}

for node in nodes:
    if node != start_node:
        dist[node] = Infinity
        min_pq[node] = Infinity
            
while min_pq.len:
    curr_node = min_pq.delete_min()
    
    if curr_node == target_node:
        return create_path(prev) # found path to target
        
    for neighbour in curr_node.neighbours:
        new_cost = distance[curr_node] + 
                   edge(curr_node, neighbour).weight

        if new_cost < dist[neighbour]:
            # found better path, update the distance
            dist[neighbour] = new_cost
            min_pq[neighbour] = new_cost
            prev[neighbour] = curr_node

# no path found
return`
    },
    [ASTAR]: {
        'summary': <h4>{ASTAR} is an <strong>informed</strong> pathfinding algorithm that combines ideas from {DIJKSTRAS} and {BEST_FIRST} to guarantee <strong>optimal (shortest)</strong> paths, even in <strong>weighted</strong> graphs</h4>,
        'description': <p>The algorithm explores paths that minimize the function <SyntaxHighlighter language={'text'} style={atomOneDark} customStyle={inLineCodeBlockCustomStyle}>f(node) = g(node) + h(node)</SyntaxHighlighter> where <SyntaxHighlighter language={'text'} style={atomOneDark} customStyle={inLineCodeBlockCustomStyle}>g(node)</SyntaxHighlighter> is the cost of the path from <SyntaxHighlighter language={'text'} style={atomOneDark} customStyle={{ ...inLineCodeBlockCustomStyle, color: nodeColors[nodeTypeEnum.start] }}>start_node</SyntaxHighlighter> to <SyntaxHighlighter language={'text'} style={atomOneDark} customStyle={inLineCodeBlockCustomStyle}>node</SyntaxHighlighter> and <SyntaxHighlighter language={'text'} style={atomOneDark} customStyle={inLineCodeBlockCustomStyle}>h(node)</SyntaxHighlighter> is the <strong>heuristic function</strong> which estimates the cost of the path from <SyntaxHighlighter language={'text'} style={atomOneDark} customStyle={inLineCodeBlockCustomStyle}>node</SyntaxHighlighter> to <SyntaxHighlighter language={'text'} style={atomOneDark} customStyle={{ ...inLineCodeBlockCustomStyle, color: nodeColors[nodeTypeEnum.target] }}>target_node</SyntaxHighlighter>.</p>,
        'pseudocode': `min_pq = min_heap(start_node: 0)
dist = { start_node: 0 }
prev = {}

for node in nodes:
    if node != start_node:
        dist[node] = Infinity
        min_pq[node] = Infinity
            
while min_pq.len:
    curr_node = min_pq.delete_min()
    
    if curr_node == target_node:
        return create_path(prev) # found path to target
        
    for neighbour in curr_node.neighbours:
        new_cost = distance[curr_node] + 
                   edge(curr_node, neighbour).weight

        if new_cost < dist[neighbour]:
            # found better path, update the distance
            dist[neighbour] = new_cost
            min_pq[neighbour] = new_cost
            prev[neighbour] = curr_node

# no path found
return`
    },
    [BFS]: {
        'summary': <h4>{BFS} is an <strong>uninformed</strong> search algorithm that is <strong>optimal</strong> in finding the shortest path only in <strong>unweighted</strong> graphs</h4>
    },
    [DFS]: {
        'summary': <h4>{DFS} is an <strong>uninformed</strong> search algorithm that is <strong>unoptimal</strong> in finding the shortest path, even in <strong>unweighted</strong> graphs</h4>
    }
};
Object.freeze(pathfindingAlgoInfo);
export { codeBlockCustomStyle, pathfindingAlgoInfo };

