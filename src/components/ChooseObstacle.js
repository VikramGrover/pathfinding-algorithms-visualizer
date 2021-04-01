import CustomDropdown from './CustomDropdown.js'
import { getObstacleTypes } from '../utils/util.js'

const ChooseObstacle = ({ setSelectedObstacle }) => {
    return (
        <div className={`choose-obstacle`}>
            <CustomDropdown setSelection={setSelectedObstacle} items={getObstacleTypes()} />
        </div >
    )
}

export default ChooseObstacle
