import { useState } from 'react'

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
        dropdownItems.push(<div className={`dropdown-list-item ${i === selectedId && 'selected'}`} onClick={() => { madeSelection(i) }} key={i}>
            {items[i]}
        </div>)
    }

    return (
        <div className='dropdown'>
            <div className={`dropdown-header ${dropDownOpen && 'open'}`} onClick={toggle}>
                {selectedVal}
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
