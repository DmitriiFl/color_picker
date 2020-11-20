import React from 'react';

const Sliders = ({color, onSubmit, onCancel, onChange}) => {

    return (
        <div>
            <input onChange={(event) => onChange(event.target.id[0], event.target.value)}
                   type="range" id="red" name="red" min="0" max="255"
                   value={color.r}
            />
            <label htmlFor="red">Red</label>
            <p>{color.r}</p>
            <input onChange={(event) => onChange(event.target.id[0], event.target.value)}
                   type="range" id="green" name="green" min="0" max="255"
                   value={color.g}
            />
            <label htmlFor="green">Green</label>
            <p>{color.g}</p>
            <input onChange={(event) => onChange(event.target.id[0], event.target.value)}
                   type="range" id="blue" name="blue" min="0" max="255"
                   value={color.b}
            />
            <label htmlFor="blue">Blue</label>
            <p>{color.b}</p>



            <button onClick={() => onSubmit({r: color.r, g: color.g, b: color.b})}>Submit</button>
            <button onClick={() => onCancel()}>Cancel</button>
        </div>
    );
};

export default Sliders;