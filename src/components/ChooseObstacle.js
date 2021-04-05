import CustomDropdown from './CustomDropdown.js'
import { getObstacleTypes, getObstacleEnum } from '../utils/util.js'

const ChooseObstacle = ({ setSelectedObstacle, weightedObsDisabled, dropDownWidth }) => {
    const setObstacle = (obstacleName) => {
        setSelectedObstacle(getObstacleEnum(obstacleName));
    };

    return (
        <div className={`choose-obstacle`}>
            <CustomDropdown setSelection={setObstacle} items={getObstacleTypes()} disabled={weightedObsDisabled} dropDownWidth={dropDownWidth} />
        </div >
    )
}

export default ChooseObstacle
