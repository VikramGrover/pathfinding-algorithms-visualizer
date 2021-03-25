import Grid from './components/Grid.js'

function App() {
  console.log(window.innerHeight, window.innerWidth)
  const nodeSize = 35;
  const topGridMargin = 200;
  const sideGridMargin = 100;

  const adjustedWinHeight = window.innerHeight - topGridMargin;
  const adjustedWinWidth = window.innerWidth - sideGridMargin;
  console.log(adjustedWinHeight, adjustedWinWidth)

  const rows = parseInt(adjustedWinHeight / nodeSize);
  const cols = parseInt(adjustedWinWidth / nodeSize);

  return (
    <>
      <Grid rows={rows} cols={cols} nodeSize={nodeSize} />
    </>
  );
}

export default App;
