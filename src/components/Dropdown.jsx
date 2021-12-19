import React, { useState, useRef } from "react";




const Dropdown = ( { label, options, selected, onSelectedChange } ) => {

    const [open, setOpen] = useState(false);

    const ref = useRef();


    const renderedOptions = options.map((option) => {
        if(option.value === selected.value) {
            return null;
        }

        return (
            <div
            key={option.value} 
            onClick={() => onSelectedChange(option)}
            className="item"
            >
                {option.label}
            </div>
        );
    });


    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''} `}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${ open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Dropdown;