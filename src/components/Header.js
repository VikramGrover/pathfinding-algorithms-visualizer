import Visualize from './Visualize.js'
import Reset from './Reset.js'
import Clear from './Clear.js'

const Header = ({ rows, cols, padding, height, gridState, setGridState, startCord, targetCord, resetBoard, clearObstacles, clearForReRun }) => {
    const style = {
        padding: padding,
        height: height
    };

    return (
        <div style={style} className='header'>
            <Reset resetBoard={resetBoard} />
            <Visualize rows={rows} cols={cols} gridState={gridState} setGridState={setGridState} startCord={startCord} targetCord={targetCord} clearForReRun={clearForReRun} />
        </div>
    )
}

export default Header
