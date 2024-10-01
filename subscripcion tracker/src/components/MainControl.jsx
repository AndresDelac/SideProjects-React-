/* eslint-disable react/prop-types */
import { useState } from "react";
import Balance from "./Balance";
import FormAddSubs from "./FormAddSubs";
import DisplayItems from "./DisplayItems";

const MainControl = ({ count }) => {
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [subs, setSubs] = useState([]);
  const [editId, setEditId ] = useState("");

  const eliminarItems = id => {
    const newList = subs.filter(item => item.id != id)
    setSubs(newList);
  } 

  const editItem = id => {
    setEditId(id);
    subs.map(item =>{
        if (item.id === id) {
            setType(item.type);
            setPrice(item.price)
        }
    })
  }

  return (
    <>
      <div className="main-form">
        <Balance count={count} subs={subs} />

        <FormAddSubs
          setType={setType}
          setPrice={setPrice}
          type={type}
          price={price}
          setSubs={setSubs}
          subs={subs}
          editId={editId}
          setEditId={setEditId}
        />
      </div>
      <DisplayItems 
      subs={subs} 
      eliminarItems={eliminarItems} 
      editItem={editItem} 
      />
    </>
  );
};

export default MainControl;
