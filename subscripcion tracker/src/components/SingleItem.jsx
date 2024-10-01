/* eslint-disable react/prop-types */
import { moneyFormat } from "../helpers/moneyFormat"
const SingleItem = ({ price, type, id, eliminarItems, editItem }) => {

    const hanndleDelete = (e) => {
        e.preventDefault();
        const answer = window.confirm(`Borrar suscripción a ${type}`)
        if (answer){
            eliminarItems(id);
        }
    }

    const hanndleEdit = (e) => {
        e.preventDefault();
        editItem(id);
    }

    const urlImage = `/src/Images/${type}.png`
    return ( 
        <div className="single-item">
            <img src={urlImage} alt="Services" />
            <h3>Precio: {moneyFormat(Number(price))}</h3>
            <a href="" className="delete" onClick={hanndleDelete}>Borrar</a>
            <a href="" className="edit" onClick={hanndleEdit}>Editar</a>
            
        </div>
     );
}
 
export default SingleItem;  