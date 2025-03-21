/* eslint-disable react/prop-types */
import { useState } from "react";

const AddCategory = ({ setCategory }) => {
    
    const [value, setValue] = useState("") 
    const [error, setError] = useState(false) 
    

    const searchGif = e => {
        e.preventDefault();
        if (value === "") {
            setError(true);
            return;
        }
        setError(false);
        setCategory(value);
        setValue("");
        
    }

    return ( 
        <>
        <form onSubmit={searchGif}>
            <input type="text" placeholder="Search..."
                onChange={e => setValue(e.target.value)}
                value={value}
            />

        {/* Condicional para mostrar un componente */}
        </form>
        { error ? <p className="error">El campo no puede estar vacio...</p> : "" }
        
        </>
     );
}
 
export default AddCategory;