import { useState } from 'react'
import downArrow from '../images/down_arrow.svg';

const CustomDropdown = ({ setSelection, items }) => {
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [selectedVal, setSelectedVal] = useState(items[0]);
    const [selectedId, setSelectedId] = useState(0);
    const toggle = () => {
        setDropDownOpen(prevState => !prevState);
    }

    const madeSelection = (id) => {
        setDropDownOpen(prevState => !prevState);
        setSelectedVal(items[id]);
        setSelectedId(id);
        setSelection(items[id]);
    };

    const dropdownItems = [];
    for (let i = 0; i < items.length; i++) {
        dropdownItems.push(<div className={`dropdown-list-item ${i === selectedId && 'selected'} ${i === items.length - 1 && 'last'}`} onClick={() => { madeSelection(i) }} key={i}>
            {items[i]}
        </div>)
    }

    return (
        <div className='dropdown'>
            <div className={`dropdown-header ${dropDownOpen && 'open'}`} onClick={toggle}>
                {selectedVal}
                <img className="down-arrow" src={downArrow}></img>
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
