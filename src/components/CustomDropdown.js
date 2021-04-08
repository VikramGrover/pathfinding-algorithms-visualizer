import { useState, useEffect } from 'react'
import { isAlgoUnweighted, isAlgoOptimal } from '../utils/helper.js'
import { allPathAlgos } from '../utils/constants.js'
import downArrow from '../images/down_arrow.svg';
import weight from '../images/weight.svg'
import weightUnfilled from '../images/weight_unfilled.svg'
import optimal from '../images/optimal.svg'
import optimalUnfilled from '../images/optimal_unfilled.svg'

const CustomDropdown = ({ setSelection, items, disabled, dropDownWidth }) => {
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [selectedVal, setSelectedVal] = useState(items[0]);
    const [selectedId, setSelectedId] = useState(0);
    const isAlgoSelector = (allPathAlgos[0] === items[0]);

    useEffect(() => {
        if (disabled) {
            setSelectedVal(items[0]);
            setSelectedId(0);
            setDropDownOpen(false);
            setSelection(items[0]);
        }
    }, [disabled])

    const toggle = () => {
        setDropDownOpen(prevState => !prevState);
    }

    const madeSelection = (id) => {
        setDropDownOpen(prevState => !prevState);
        setSelectedVal(items[id]);
        setSelectedId(id);
        setSelection(items[id]);
    };

    const style = {
        width: dropDownWidth
    }

    const dropdownItems = [];
    for (let i = 0; i < items.length; i++) {
        dropdownItems.push(<div style={style} className={`dropdown-list-item ${i === selectedId && 'selected'} ${i === items.length - 1 && 'last'}`} onClick={() => { madeSelection(i) }} key={i}>
            {items[i]}
            {isAlgoSelector && (!isAlgoUnweighted(items[i]) ? <img className="algo-property-badge" src={weight} title={`${items[i]} is a weighted path-finding algorithm.`} alt={`${items[i]} is a weighted path-finding algorithm.`}></img> : <img className="algo-property-badge" src={weightUnfilled} title={`${items[i]} is not a weighted path-finding algorithm.`} alt={`${items[i]} is not a weighted path-finding algorithm.`}></img>)}
            {isAlgoSelector && (isAlgoOptimal(items[i]) ? <img className="algo-property-badge" src={optimal} title={`${items[i]} guarantees shortest path.`} alt={`${items[i]} guarantees shortest path.`}></img> : <img className="algo-property-badge" src={optimalUnfilled} title={`${items[i]} does not guarantee shortest path.`} alt={`${items[i]} does not guarantee shortest path.`}></img>)}
        </div>)
    }

    return (
        <div className='dropdown'>
            <div style={style} className={`dropdown-header ${dropDownOpen && 'open'} ${disabled && 'disabled'}`} onClick={disabled ? null : toggle}>
                {selectedVal}
                {!disabled && <img className="down-arrow" src={downArrow} alt=""></img>}
            </div>
            {dropDownOpen &&
                <div className='dropdown-list'>
                    {dropdownItems}
                </div>
            }
        </div >
    )
}

export default CustomDropdown
