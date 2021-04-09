import Grid from './components/Grid.js'
import Header from './components/Header.js'
import InfoBox from './components/InfoBox.js'

import { allPathAlgos, nodeTypeEnum } from './utils/constants.js'
import { useState, useEffect } from 'react'
import { isAlgoUnweighted } from './utils/helper.js'

function App() {
  const [gridState, setGridState] = useState({});
  const [selectedObstacle, setSelectedObstacle] = useState('wall');
  const [infoBoxOpen, setInfoBoxOpen] = useState(false);
  const [selectedAlgo, setSelectedAlgo] = useState(allPathAlgos[0]);
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
    console.log("RESETTING BOARD");
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
    console.log("CLEARING PATH");
    for (let x = 0; x < rows; x++) {
      for (let y = 0; y < cols; y++) {
        let id = `${x}:${y}`;
        let nodeState = gridState[id][0];
        let nodeStateFunc = gridState[id][1];
        let currState = nodeState[0];

        if ((currState === nodeTypeEnum.start || currState === nodeTypeEnum.target) && (nodeState[1] <= nodeTypeEnum.visiting)) {
          nodeState.splice(1, 1);
        }
        nodeStateFunc(prevState => nodeState);
      }
    }
  };

  const clearObstacles = () => {
    for (let x = 0; x < rows; x++) {
      for (let y = 0; y < cols; y++) {
        let id = `${x}:${y}`;
        let nodeState = gridState[id][0];
        let nodeStateFunc = gridState[id][1];
        let currState = nodeState[0];

        // check under start and target node for obstacle
        if ((currState === nodeTypeEnum.start || currState === nodeTypeEnum.target) && (nodeState[1] >= nodeTypeEnum.wall)) {
          nodeState.splice(1, 1);
          nodeStateFunc(prev => nodeState);
          setGridState(prevState => ({ ...prevState, [id]: [nodeState, prevState[id][1]] }));
          continue;
        }

        if (currState <= nodeTypeEnum.visiting) {
          currState = nodeState[1];
        }

        if (currState >= nodeTypeEnum.wall) {
          nodeStateFunc(prev => [nodeTypeEnum.none]);
          setGridState(prevState => ({ ...prevState, [id]: [[nodeTypeEnum.none], prevState[id][1]] }));
        }
      }
    }
  };

  const clearWeightedObstacles = () => {
    for (let x = 0; x < rows; x++) {
      for (let y = 0; y < cols; y++) {
        let id = `${x}:${y}`;
        let nodeState = gridState[id][0];
        let nodeStateFunc = gridState[id][1];
        let currState = nodeState[0];

        // check under start and target node for weighted obstacle
        if ((currState === nodeTypeEnum.start || currState === nodeTypeEnum.target) && (nodeState[1] > nodeTypeEnum.wall)) {
          nodeState.splice(1, 1);
          nodeStateFunc(prev => nodeState);
          setGridState(prevState => ({ ...prevState, [id]: [nodeState, prevState[id][1]] }));
          continue;
        }

        if (currState <= nodeTypeEnum.visiting) {
          currState = nodeState[1];
        }

        if (currState > nodeTypeEnum.wall) {
          nodeStateFunc(prev => [nodeTypeEnum.none]);
          setGridState(prevState => ({ ...prevState, [id]: [[nodeTypeEnum.none], prevState[id][1]] }));
        }
      }
    }
  };

  const toggleInfoBox = () => {
    setInfoBoxOpen(prevState => !prevState);
  };

  const alteredSetSelectedAlgo = (algoName) => {
    const unweightedAlgo = isAlgoUnweighted(algoName);
    setWeightedObsDisabled(unweightedAlgo);
    setSelectedAlgo(algoName);
    if (unweightedAlgo) {
      clearPath();
      clearWeightedObstacles();
    }
  };

  return (
    <>
      <Header rows={rows} cols={cols} runningAlgo={runningAlgo} setRunningAlgo={setRunningAlgo} padding={margin} height={navBarHeight} gridState={gridState} setGridState={setGridState} startCord={startCord} targetCord={targetCord} clearObstacles={clearObstacles} clearPath={clearPath} setSelectedObstacle={setSelectedObstacle} weightedObsDisabled={weightedObsDisabled} toggleInfoBox={toggleInfoBox} selectedAlgo={selectedAlgo} setSelectedAlgo={alteredSetSelectedAlgo} />
      <Grid rows={rows} cols={cols} padding={margin} nodeSize={nodeSize} setGridState={setGridState} selectedObstacle={selectedObstacle} setStartCord={setStartCord} setTargetCord={setTargetCord} runningAlgo={runningAlgo} />
      <InfoBox infoBoxOpen={infoBoxOpen} toggleInfoBox={toggleInfoBox} selectedAlgo={selectedAlgo} />
    </>
  );
}

export default App;
