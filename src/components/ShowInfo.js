import { algoFunctions, nodeTypeEnum } from '../utils/constants.js'

const ShowInfo = ({ toggleInfoBox, selectedAlgo }) => {
    return (
        <div className={`button blue`} onClick={toggleInfoBox} >
            Info
        </div >
    )
}

export default ShowInfo
