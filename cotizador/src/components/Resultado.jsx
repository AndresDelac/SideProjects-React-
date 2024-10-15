// eslint-disable-next-line react/prop-types
const Resulatdo = ({ total, cantidad, plazo }) => {
    return ( 
        <div className="resultado">
            <h2>Cotizacion:</h2>
            <p>La cantidad solicitada: $ {cantidad}</p>
            <p>A pagar en un plazo de: {plazo} meses</p>
            <p>Su pago mensual es de: $ {total / plazo}</p>
            <p>Total a pagar : $ {total}</p>
        </div>
     );
}
 
export default Resulatdo;