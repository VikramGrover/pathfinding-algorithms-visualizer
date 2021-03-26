import Grid from './components/Grid.js'
import Header from './components/Header.js'
import { getNodeTypeEnum } from './utils/util.js'
import { useState } from 'react'

function App() {
  const nodeSize = 35;
  const topGridMargin = 200;
  const sideGridMargin = 100;

  const adjustedWinHeight = window.innerHeight - topGridMargin;
  const adjustedWinWidth = window.innerWidth - sideGridMargin;

  const rows = parseInt(adjustedWinHeight / nodeSize);
  const cols = parseInt(adjustedWinWidth / nodeSize);

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

  const [gridState, setGridState] = useState(gridMap);

  let defaultSelectedObstacle = {
    'obstacle': false
  };

  const [selectedObstacle, setSelectedObstacle] = useState(defaultSelectedObstacle);
  const [startCord, setStartCord] = useState('0:0');
  const [targetCord, setTargetCord] = useState(`${rows - 1}:${cols - 1}`);

  return (
    <>
      <Header rows={rows} cols={cols} gridState={gridState} setGridState={setGridState} startCord={startCord} targetCord={targetCord} />
      <Grid rows={rows} cols={cols} nodeSize={nodeSize} gridState={gridState} setGridState={setGridState} selectedObstacle={selectedObstacle} setStartCord={setStartCord} setTargetCord={setTargetCord} />
    </>
  );
}

export default App;
