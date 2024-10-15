/* eslint-disable react/prop-types */

import { useState } from "react";
import { calcularTotal } from "../helpers";

const Form = ({ cantidad, setCantidad, plazo, setPlazo }) => {

    const [error ,setError] = useState(false);

    const calcularPrestamo = e => {
        e.preventDefault()
        if (cantidad === 0 || plazo === "") {
            setError(true);
            return;
        }
        setError(false);

       const total = calcularTotal(cantidad, plazo);
        console.log(total);
        
    }

    return ( 
        <>
        <form onSubmit={calcularPrestamo}>

            <div className="column">
                <div>
                    <label>Cantidad de prestamo </label>
                    <input type="number" placeholder="Ej: 3000" 
                        onChange={(e) => setCantidad(e.target.value)}
                    />
                </div>
                <div>
                    <label>Plazo para pagar</label>
                    <select onChange={(e) => setPlazo(e.target.value)}>
                        <option value="">--Seleccionar--</option>
                        <option value="3">3 meses</option>
                        <option value="6">6 meses</option>
                        <option value="12">12 meses</option>
                        <option value="24">24 meses</option>
                    </select>
                </div>
            </div>
            <div className="btnSubmit">
                <input type="submit" value="Calcular" />
            </div>
        </form>

         {(error) ? <p className="error">Todos los campos son obligatorios</p> : ""}
         </>
     );
}
 
export default Form;