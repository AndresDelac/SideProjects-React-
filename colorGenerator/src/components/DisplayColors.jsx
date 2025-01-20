import SingleColor from "./SingleColor";

/* eslint-disable react/prop-types */
const DisplayColors = ({ list }) => {
    return ( 
        <div className="colors-box">
            {
                list.map((color, index) => (
                    <SingleColor key={index} hexColor = {color.hex}/>
                ))
            }
        </div>
     );
}
 
export default DisplayColors;