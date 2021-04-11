import CustomDropdown from './CustomDropdown.js'
import { obstacleTypes, obsEnum } from '../utils/constants.js'

const ChooseObstacle = ({ setSelectedObstacle, weightedObsDisabled, dropDownWidth }) => {
    const setObstacle = (obstacleName) => {
        console.log("selected obs: ", obsEnum[obstacleName]);
        setSelectedObstacle(obsEnum[obstacleName]);
    };

    return (
        <div className={`choose-obstacle`}>
            <CustomDropdown setSelection={setObstacle} items={obstacleTypes} disabled={weightedObsDisabled} dropDownWidth={dropDownWidth} isAlgoSelector={false} isObstacleSelector={true} />
        </div >
    )
}

export default ChooseObstacle
