/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Balance from "./Balance";
import FormAddSubs from "./FormAddSubs";

const MainControl = ({ count }) => {
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");

    return ( 
        <div className="main-form">
            <Balance count={count} />
            <FormAddSubs type={type} price={price} />
        </div>
     );
}
 
export default MainControl;