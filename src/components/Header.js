import React from 'react'
import Visualize from './Visualize.js'

const Header = ({ rows, cols, gridState, setGridState, startCord, targetCord }) => {
    return (
        <div className='header'>
            <Visualize rows={rows} cols={cols} gridState={gridState} setGridState={setGridState} startCord={startCord} targetCord={targetCord} />
        </div>
    )
}

export default Header
