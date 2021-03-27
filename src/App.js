import Grid from './components/Grid.js'
import Header from './components/Header.js'
import { getNodeTypeEnum } from './utils/util.js'
import { useState, useEffect } from 'react'

function App() {
  const [gridState, setGridState] = useState({});
  const [selectedObstacle, setSelectedObstacle] = useState({});
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [startCord, setStartCord] = useState('0:0');
  const [targetCord, setTargetCord] = useState('0:0');

  const margin = 30;
  const nodeSize = 28;
  const navBarHeight = 60;

  useEffect(() => {
    resetBoard();
  }, []);

  // useEffect(() => {
  //   window.addEventListener("resize", resetBoard);
  //   return () => window.removeEventListener("resize", resetBoard)
  // }, []);

  const resetBoard = () => {
    const adjustedWinHeight = window.innerHeight - (navBarHeight + (margin * 2)) - margin;
    const adjustedWinWidth = window.innerWidth - (2 * margin);

    const rows = parseInt(adjustedWinHeight / (nodeSize + 1));
    const cols = parseInt(adjustedWinWidth / (nodeSize + 1));

    setRows(rows);
    setCols(cols);
    setStartCord('0:0');
    setTargetCord(`${rows - 1}:${cols - 1}`);

    let gridMap = {};
    for (let x = 0; x < rows; x++) {
      for (let y = 0; y < cols; y++) {
        let nodeState = [getNodeTypeEnum('none')];
        if (x === 0 && y === 0) {
          nodeState.unshift(getNodeTypeEnum('start'));
        }
        else if (x === (rows - 1) && y === (cols - 1)) {
          nodeState.unshift(getNodeTypeEnum('target'));
        }

        gridMap[`${x}:${y}`] = nodeState;
      }
    }

    setGridState(gridMap);

    let defaultSelectedObstacle = {
      'obstacle': false
    };

    setSelectedObstacle(defaultSelectedObstacle);
  };

  const clearObstacles = () => {
    for (let x = 0; x < rows; x++) {
      for (let y = 0; y < cols; y++) {
        let currState = gridState[`${x}:${y}`][0];

        if (currState >= getNodeTypeEnum('obstacle')) {
          setGridState(prevState => ({ ...prevState, [`${x}:${y}`]: [getNodeTypeEnum('none')] }));
        }
      }
    }
  };

  const clearForReRun = () => {
    console.log('CLEARING GRID FOR RE RERUN');
    let gridMap = {};
    let change = false;

    for (let x = 0; x < rows; x++) {
      for (let y = 0; y < cols; y++) {
        let id = `${x}:${y}`;
        let currState = gridState[id][0];
        gridMap[id] = currState;

        if (currState === getNodeTypeEnum('visited') || currState === getNodeTypeEnum('path')) {
          gridMap[id] = [getNodeTypeEnum('none')];
          change = true;
        }
      }
    }

    if (change) {
      console.log("DONE CLEARING FOR RE RUN")
      setGridState(gridMap);
    }
  };

  return (
    <>
      <Header rows={rows} cols={cols} padding={margin} height={navBarHeight} gridState={gridState} setGridState={setGridState} startCord={startCord} targetCord={targetCord} resetBoard={resetBoard} clearObstacles={clearObstacles} clearForReRun={clearForReRun} />
      <Grid rows={rows} cols={cols} padding={margin} nodeSize={nodeSize} gridState={gridState} setGridState={setGridState} selectedObstacle={selectedObstacle} setStartCord={setStartCord} setTargetCord={setTargetCord} />
    </>
  );
}

export default App;
