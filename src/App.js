import Grid from './components/Grid.js'
import Header from './components/Header.js'
import { nodeTypeEnum } from './utils/constants.js'
import { useState, useEffect } from 'react'

function App() {
  const [gridState, setGridState] = useState({});
  const [selectedObstacle, setSelectedObstacle] = useState('wall');
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [startCord, setStartCord] = useState('0:0');
  const [targetCord, setTargetCord] = useState('0:0');
  const [runningAlgo, setRunningAlgo] = useState(false);
  const [weightedObsDisabled, setWeightedObsDisabled] = useState(false);
  const margin = 30;
  const nodeSize = 28;
  const navBarHeight = 90;

  useEffect(() => {
    resetBoard();
  }, []);

  // useEffect(() => {
  //   window.addEventListener("resize", resetBoard);
  //   return () => window.removeEventListener("resize", resetBoard)
  // }, []);

  const resetBoard = () => {
    const adjustedWinHeight = window.innerHeight - (navBarHeight + (margin * 3));
    const adjustedWinWidth = window.innerWidth - (2 * margin);

    const rows = parseInt(adjustedWinHeight / (nodeSize + 1));
    const cols = parseInt(adjustedWinWidth / (nodeSize + 1));

    setRunningAlgo(false);
    setRows(rows);
    setCols(cols);
    setStartCord('0:0');
    setTargetCord(`${rows - 1}:${cols - 1}`);

    let gridMap = {};
    for (let x = 0; x < rows; x++) {
      for (let y = 0; y < cols; y++) {
        let nodeState = [nodeTypeEnum.none];
        if (x === 0 && y === 0) {
          nodeState.unshift(nodeTypeEnum.start);
        }
        else if (x === (rows - 1) && y === (cols - 1)) {
          nodeState.unshift(nodeTypeEnum.target);
        }

        gridMap[`${x}:${y}`] = nodeState;
      }
    }

    setGridState(gridMap);
  };

  const clearPath = () => {
    let gridMap = {};
    let change = false;

    for (let x = 0; x < rows; x++) {
      for (let y = 0; y < cols; y++) {
        let id = `${x}:${y}`;
        gridMap[id] = gridState[id];
        let currState = gridState[id][0];

        // check under start and target node for path
        if ((currState === nodeTypeEnum.start || currState === nodeTypeEnum.target) && (gridState[id][1] === nodeTypeEnum.path || gridState[id][1] === nodeTypeEnum.visited || gridState[id][1] === nodeTypeEnum.visiting)) {
          gridMap[id].splice(1, 1);
          change = true;
          continue;
        }

        if (currState === nodeTypeEnum.path || currState === nodeTypeEnum.visited || currState === nodeTypeEnum.visiting) {
          gridMap[id] = gridMap[id].slice(1);
          change = true;
        }
      }
    }

    if (change) {
      setGridState(prevState => (gridMap));
    }

    return gridMap;
  };

  const clearObstacles = () => {
    let gridMap = {};
    let change = false;

    for (let x = 0; x < rows; x++) {
      for (let y = 0; y < cols; y++) {
        let id = `${x}:${y}`;
        gridMap[id] = gridState[id];
        let currState = gridState[id][0];

        // check under start and target node for obstacle
        if ((currState === nodeTypeEnum.start || currState === nodeTypeEnum.target) && (gridState[id][1] >= nodeTypeEnum.wall)) {
          gridMap[id].splice(1, 1);
          change = true;
          continue;
        }

        if (currState === nodeTypeEnum.path || currState === nodeTypeEnum.visited || currState === nodeTypeEnum.visiting) {
          currState = gridState[id][1];
        }

        if (currState >= nodeTypeEnum.wall) {
          gridMap[id] = [nodeTypeEnum.none];
          change = true;
        }
      }
    }

    if (change) {
      setGridState(prevState => (gridMap));
    }
  };

  const clearWeightedObstacles = () => {
    let gridMap = {};
    let change = false;

    for (let x = 0; x < rows; x++) {
      for (let y = 0; y < cols; y++) {
        let id = `${x}:${y}`;
        gridMap[id] = gridState[id];
        let currState = gridState[id][0];

        // check under start and target node for weighted obstacle
        if ((currState === nodeTypeEnum.start || currState === nodeTypeEnum.target) && (gridState[id][1] > nodeTypeEnum.wall)) {
          gridMap[id].splice(1, 1);
          change = true;
          continue;
        }

        if (currState === nodeTypeEnum.path || currState === nodeTypeEnum.visited || currState === nodeTypeEnum.visiting) {
          currState = gridState[id][1];
        }

        if (currState > nodeTypeEnum.wall) {
          gridMap[id] = [nodeTypeEnum.none];
          change = true;
        }
      }
    }

    if (change) {
      setGridState(prevState => (gridMap));
    }
  };

  return (
    <>
      <Header rows={rows} cols={cols} runningAlgo={runningAlgo} setRunningAlgo={setRunningAlgo} padding={margin} height={navBarHeight} setGridState={setGridState} startCord={startCord} targetCord={targetCord} clearObstacles={clearObstacles} clearPath={clearPath} setSelectedObstacle={setSelectedObstacle} weightedObsDisabled={weightedObsDisabled} setWeightedObsDisabled={setWeightedObsDisabled} clearWeightedObstacles={clearWeightedObstacles} />
      <Grid rows={rows} cols={cols} padding={margin} nodeSize={nodeSize} gridState={gridState} setGridState={setGridState} selectedObstacle={selectedObstacle} setStartCord={setStartCord} setTargetCord={setTargetCord} runningAlgo={runningAlgo} />
    </>
  );
}

export default App;
