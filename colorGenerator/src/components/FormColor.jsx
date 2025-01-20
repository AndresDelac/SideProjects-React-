/* eslint-disable react/prop-types */
import { useState } from "react";
import Values from 'values.js'

const FormColor = ({ setList }) => {
    const [color, setColor] = useState('blue')
    const [error, setError] = useState(false)

    const handleColor = e => {
        e.preventDefault();
        try {
           let colors = new Values(color).all(5)
           setList(colors);
           setError(false);
        } catch (error) {
            console.log(error);
            setError(true);
        }
        console.log(color);
    }

    return ( 
        <div className="form-color">
        <h1>Color Pallet Generator</h1>
        <form onSubmit={handleColor}>
            <input type="text" placeholder="#fff" onChange={ e => setColor(e.target.value) } />
            <input type="submit" value="Generar" />
        </form>
        { error ? <p className="error"> Este color no existe </p> : null }

        </div>
     );
}
 
export default FormColor;