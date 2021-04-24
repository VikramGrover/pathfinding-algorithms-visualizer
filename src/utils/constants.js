import { dijkstras } from '../algorithms/path_finding/dijkstras.js'
import { dfs } from '../algorithms/path_finding/dfs.js'
import { bfs } from '../algorithms/path_finding/bfs.js'
import { aStar } from '../algorithms/path_finding/aStar.js'
import { greedyBestFirstSearch } from '../algorithms/path_finding/greedyBestFirstSearch.js';
import { recursiveDivision } from '../algorithms/terrain/recursiveDivision.js'
import { simplexNoise } from '../algorithms/terrain/simplexNoise.js'
import { random } from '../algorithms/terrain/random.js';
import { randomWeighted } from '../algorithms/terrain/randomWeighted.js';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// PATHFINDING ALGORITHM CONSTANTS -------------------------------------------
const DIJKSTRAS = "Dijkstra's";
const ASTAR = 'A* (A-Star)';
const BFS = 'Breadth-first Search';
const DFS = 'Depth-first Search';
const GREEDY_BEST_FIRST_SEARCH = 'Greedy Best-First Search';

const algoFunctions = {
    [DIJKSTRAS]: dijkstras,
    [ASTAR]: aStar,
    [BFS]: bfs,
    [DFS]: dfs,
    [GREEDY_BEST_FIRST_SEARCH]: greedyBestFirstSearch
};
Object.freeze(algoFunctions);

const PATH_CREATION_SLEEP = 7;
const algoSleepTimes = {
    [DIJKSTRAS]: 1,
    [ASTAR]: 4,
    [BFS]: 5,
    [DFS]: 10,
    [GREEDY_BEST_FIRST_SEARCH]: 11
};
Object.freeze(algoSleepTimes);

export { DIJKSTRAS, ASTAR, BFS, DFS, GREEDY_BEST_FIRST_SEARCH, algoFunctions, PATH_CREATION_SLEEP, algoSleepTimes };

const allPathAlgos = [DIJKSTRAS, ASTAR, BFS, DFS, GREEDY_BEST_FIRST_SEARCH];
Object.freeze(allPathAlgos);
const unweightedPathAlgos = [DFS, BFS, GREEDY_BEST_FIRST_SEARCH];
Object.freeze(unweightedPathAlgos);
const optimalPathAlgos = [DIJKSTRAS, ASTAR, BFS];
Object.freeze(optimalPathAlgos);

export { allPathAlgos, unweightedPathAlgos, optimalPathAlgos };

// TERRAIN ALGORTHIM CONSTANTS -------------------------------------------
const MAZE_GENERATION_SLEEP = 5;
const RECURSIVE_DIVISION = "Recursive Division";
const SIMPLEX_NOISE = "Simplex Noise";
const RANDOM_UNWEIGHTED = "Random";
const RANDOM_WEIGHTED = "Random (Weighted)"
const allTerrainAlgos = [RECURSIVE_DIVISION, SIMPLEX_NOISE, RANDOM_UNWEIGHTED, RANDOM_WEIGHTED];
Object.freeze(allTerrainAlgos);

const unweightedTerrainAlgos = [RECURSIVE_DIVISION, RANDOM_UNWEIGHTED];
Object.freeze(unweightedTerrainAlgos);

const terrainFunctions = {
    [RECURSIVE_DIVISION]: recursiveDivision,
    [SIMPLEX_NOISE]: simplexNoise,
    [RANDOM_UNWEIGHTED]: random,
    [RANDOM_WEIGHTED]: randomWeighted,
};
Object.freeze(terrainFunctions);

const terrainAlgoSleepTimes = {
    [RECURSIVE_DIVISION]: 5,
    [SIMPLEX_NOISE]: 1,
    [RANDOM_UNWEIGHTED]: 1,
    [RANDOM_WEIGHTED]: 1
};
Object.freeze(terrainAlgoSleepTimes);

export { MAZE_GENERATION_SLEEP, RECURSIVE_DIVISION, SIMPLEX_NOISE, allTerrainAlgos, unweightedTerrainAlgos, terrainFunctions, terrainAlgoSleepTimes };

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
    marginTop: 7,
    marginBottom: 0
};

const inLineCodeBlockCustomStyle = {
    fontSize: 12,
    backgroundColor: '#18191c',
    borderRadius: 4,
    padding: 4,
    display: 'inline',
    color: 'white',
    fontWeight: 600
};

const pathfindingAlgoInfo = {
    [DIJKSTRAS]: {
        'summary': <h4>{DIJKSTRAS} is a <strong>greedy</strong> pathfinding algorithm that guarantees <strong>optimal</strong> (shortest) paths, even in <strong>weighted</strong> graphs</h4>,
        'description': null,
        'pseudocode': <SyntaxHighlighter language="python" style={atomOneDark} showLineNumbers={true} wrapLines={true} customStyle={codeBlockCustomStyle}>
            {`min_pq = min_heap(start_node: 0)
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
return`}
        </SyntaxHighlighter>
    },
    [ASTAR]: {
        'summary': <h4>{ASTAR} is an <strong>informed</strong> pathfinding algorithm that guarantees <strong>optimal</strong> (shortest) paths, even in <strong>weighted</strong> graphs</h4>,
        'description': <><p>The algorithm explores paths that minimize the function <SyntaxHighlighter language={'text'} style={atomOneDark} customStyle={inLineCodeBlockCustomStyle}>f(node) = g(node) + h(node)</SyntaxHighlighter> where <SyntaxHighlighter language={'text'} style={atomOneDark} customStyle={inLineCodeBlockCustomStyle}>g(node)</SyntaxHighlighter> is the cost of the path from <SyntaxHighlighter language={'text'} style={atomOneDark} customStyle={{ ...inLineCodeBlockCustomStyle, color: nodeColors[nodeTypeEnum.start] }}>start_node</SyntaxHighlighter> to <SyntaxHighlighter language={'text'} style={atomOneDark} customStyle={inLineCodeBlockCustomStyle}>node</SyntaxHighlighter> and <SyntaxHighlighter language={'text'} style={atomOneDark} customStyle={inLineCodeBlockCustomStyle}>h(node)</SyntaxHighlighter> is the <strong>heuristic function</strong> which estimates the cost of the path from <SyntaxHighlighter language={'text'} style={atomOneDark} customStyle={inLineCodeBlockCustomStyle}>node</SyntaxHighlighter> to <SyntaxHighlighter language={'text'} style={atomOneDark} customStyle={{ ...inLineCodeBlockCustomStyle, color: nodeColors[nodeTypeEnum.target] }}>target_node</SyntaxHighlighter>.</p><p>The current chosen heuristic function is known as <strong>Manhattan Distance</strong>, which is just a sum of the differences in the <strong>x</strong> and <strong>y</strong> co-ordinates of 2 points. This heuristic was chosen as it works best for grids where there are 4 directions of movement allowed.</p></>,
        'pseudocode': <SyntaxHighlighter language="python" style={atomOneDark} showLineNumbers={true} wrapLines={true} customStyle={codeBlockCustomStyle}>
            {`open_set = min_heap(start_node: 0)
G = { start_node: 0 } # G(n) => tell us the current shortest distance from start node to node n
H = { start_node: 0 } # H(n) => tells us the estimated distance from node n to target node
F = { start_node: 0 } # F(n) = G(n) + H(n)
prev = {}

for node in nodes:
    if node == start_node:
        continue
    
    F[node] = G[node] = H[node] = Infinity
    
while open_set not empty:
    curr_node = open_set.delete_min()
    
    if curr_node == target_node:
        return create_path(prev)
        
    for neighbour in curr_node.neighbours:
        new_G_score = G[curr_node] + weight(edge(curr_node, neighbour))
        
        if new_G_score < G[curr_node]:
            # update all scores
            G[neighbour] = new_G_score
            H[neighbour] = manhattan_distance_heuristic(neighbour, targetCord); # get estimated cost from neighbour -> target
            F[neighbour] = G[neighbour] + H[neighbour];
            prev[neighbour] = curr_node;
            openSet[neighbour] = F[neighbour]; # update priority of neighbour in open_set

# no path found
return`}
        </SyntaxHighlighter>
    },
    [BFS]: {
        'summary': <h4>{BFS} is an <strong>uninformed/blind</strong> search algorithm that gurantees finding the <strong>optimal</strong> (shortest) paths only in <strong>unweighted</strong> graphs</h4>,
        'pseudocode': <SyntaxHighlighter language="python" style={atomOneDark} showLineNumbers={true} wrapLines={true} customStyle={codeBlockCustomStyle}>
            {`queue = [start_node]
visited = { start_node: 1 }
prev = {}

while queue.len:
    curr_node = queue.dequeue()
    
    for neighbour in curr_node.neighbours:
        if neighbour in visited:
            continue # skip nodes that are already visited
        
        prev[neighbour] = curr_node
        queue.enqueue(neighbour)
        visited[neighbour] = 1

        if neighbour == target_node:
            # we path to target_node
            return create_path(prev)

# no path found 
return`}
        </SyntaxHighlighter>
    },
    [DFS]: {
        'summary': <h4>{DFS} is an <strong>uninformed/blind</strong> search algorithm that is <strong>unoptimal</strong> (may or may not find shortest path) and <strong>unweighted</strong></h4>,
        'pseudocode': <SyntaxHighlighter language="python" style={atomOneDark} showLineNumbers={true} wrapLines={true} customStyle={codeBlockCustomStyle}>
            {`stack = [start_node]
visited = { start_node: 1 }

while stack.len:
    curr_node = stack.pop()
    stack.push(curr_node)

    if curr_node == target_node:
        return stack # our stack is the path to target_node
    
    flag = False
    for neighbour in curr_node.neighbours:
        if neighbour in visited:
            continue # skip nodes that are already visited
        
        stack.push(neighbour)
        visited[neighbour] = 1
        flag = True

    if flag:
        # no neighbours that need to be visited, pop the node from stack
        stack.pop()

# no path found 
return`}
        </SyntaxHighlighter>
    },
    [GREEDY_BEST_FIRST_SEARCH]: {
        'summary': <h4>{GREEDY_BEST_FIRST_SEARCH} is an <strong>informed</strong> and <strong>greedy</strong> pathfinding algorithm that is <strong>unoptimal</strong> (may or may not find the shortest paths) and <strong>unweighted</strong></h4>,
        'description': <><p>Similar to {ASTAR}, this algorithm explores paths that minimize the function <SyntaxHighlighter language={'text'} style={atomOneDark} customStyle={inLineCodeBlockCustomStyle}>f(node) = h(node)</SyntaxHighlighter> where <SyntaxHighlighter language={'text'} style={atomOneDark} customStyle={inLineCodeBlockCustomStyle}>h(node)</SyntaxHighlighter> is the <strong>heuristic function</strong> which estimates the cost of the path from <SyntaxHighlighter language={'text'} style={atomOneDark} customStyle={inLineCodeBlockCustomStyle}>node</SyntaxHighlighter> to <SyntaxHighlighter language={'text'} style={atomOneDark} customStyle={{ ...inLineCodeBlockCustomStyle, color: nodeColors[nodeTypeEnum.target] }}>target_node</SyntaxHighlighter>. Unlike {ASTAR}, {GREEDY_BEST_FIRST_SEARCH} does not perform optimally because it only cares about the estimated distance from <SyntaxHighlighter language={'text'} style={atomOneDark} customStyle={inLineCodeBlockCustomStyle}>node</SyntaxHighlighter> to <SyntaxHighlighter language={'text'} style={atomOneDark} customStyle={{ ...inLineCodeBlockCustomStyle, color: nodeColors[nodeTypeEnum.target] }}>target_node</SyntaxHighlighter>, however, fails to optimize for the cost to get from <SyntaxHighlighter language={'text'} style={atomOneDark} customStyle={{ ...inLineCodeBlockCustomStyle, color: nodeColors[nodeTypeEnum.start] }}>start_node</SyntaxHighlighter> to <SyntaxHighlighter language={'text'} style={atomOneDark} customStyle={inLineCodeBlockCustomStyle}>node</SyntaxHighlighter>.</p><p>The current chosen heuristic function is known as <strong>Manhattan Distance</strong>, which is just a sum of the differences in the <strong>x</strong> and <strong>y</strong> co-ordinates of 2 points. This heuristic was chosen as it works best for grids where there are 4 directions of movement allowed.</p></>,
        'pseudocode': <SyntaxHighlighter language="python" style={atomOneDark} showLineNumbers={true} wrapLines={true} customStyle={codeBlockCustomStyle}>
            {`open_set = min_heap(start_node: 0)
H = { start_node: 0 } # H(n) => tells us the estimated distance from node n to target node
F = { start_node: 0 } # F(n) = H(n)
prev = {}
visited = {}

for node in nodes:
    if node == start_node:
        continue
    
    F[node] = H[node] = Infinity
    
while open_set not empty:
    curr_node = open_set.delete_min()
    
    if curr_node == target_node:
        return create_path(prev)
        
    for neighbour in curr_node.neighbours:  # check all unvisited neighbours 
        if neighbout not in visited:
            # update all scores
            visited[neighbours] = 1
            H[neighbour] = manhattan_distance_heuristic(neighbour, targetCord); # get estimated cost from neighbour -> target
            F[neighbour] = H[neighbour];
            prev[neighbour] = curr_node;
            openSet[neighbour] = F[neighbour]; # update priority of neighbour in open_set

# no path found
return`}
        </SyntaxHighlighter>
    }
};
Object.freeze(pathfindingAlgoInfo);
export { pathfindingAlgoInfo };

