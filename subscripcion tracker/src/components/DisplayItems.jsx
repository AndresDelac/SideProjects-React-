/* eslint-disable react/prop-types */
import SingleItem from "./SingleItem";

const DisplayItems = ({ subs, eliminarItems, editItem }) => {
    return ( 
        <>
            { subs.map (item => (
                <SingleItem 
                key={item.id}
                id={item.id} 
                price={item.price} 
                type={item.type} 
                eliminarItems={eliminarItems}
                editItem={editItem}
                />
            )) 

            }

        </>
     );
}
 
export default DisplayItems;