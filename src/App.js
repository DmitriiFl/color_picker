import React, {useState} from "react";
import './App.css';
import Palette from './components/Palette'
import Sliders from "./components/Sliders";

function App() {

    const [color, changeColor] = useState({r: 127, g: 127, b: 127}),
        [showSlider, setShowSlider] = useState(false),
        [colorState, setColorState] = useState({});

    const onChange = (id, value) => {
        const temp = {...color};
        temp[id] = value;
        changeColor(temp);
    };
    const onSubmit = () => {
        setColorState(color);
    };
    const onCancel = () => {
        if (colorState.r) {
            changeColor(colorState);
            setShowSlider(false)
        }

    };

    return (
        <div className="container">

            <Palette showSlider={showSlider} onSlidersBlockToggle={setShowSlider}
                     color={`${color.r} ${color.g} ${color.b}`}
            />
            {showSlider && <Sliders
                color={color}
                onChange={onChange}
                onSubmit={onSubmit}
                onCancel={onCancel}
            />}

        </div>
    );
}

export default App;
