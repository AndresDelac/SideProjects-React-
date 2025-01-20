/* eslint-disable react/prop-types */
import { useState } from 'react'
import Clip from '/copy.png'

const SingleColor = ({ hexColor }) => {

    const [copy, setCopy ] = useState (false)

    const handlecopy = (color) => () => {
        const colorNew = `#${color}`
        navigator.clipboard.writeText(colorNew)
        setCopy(true);
        setTimeout(() => {
            setCopy(false);
        }, 800);
    }

    return ( 
        <div className="single-card" style={{ background: `#${hexColor}` }}>
            <div className="content">
                <p>#{ hexColor } </p>
                <button onClick={ handlecopy(hexColor) }>
                    <img src={ Clip } alt="copy" />
                </button>
            </div>
            { copy ? <p className="copy-alert">Color copiado</p> : null}
        </div>
     );
}
 
export default SingleColor;