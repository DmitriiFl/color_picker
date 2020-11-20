import React from 'react';

const Palette = ({onSlidersBlockToggle, showSlider, color}) => {
    return (
        <>
            <div className='palette' style={{backgroundColor: `rgb(${color})`}}>

            </div>
            <button onClick={() => {onSlidersBlockToggle(!showSlider)}}>{showSlider ? 'Hide' : 'Show'} Sliders</button>
        </>
    );
};

export default Palette;