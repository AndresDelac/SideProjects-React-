/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { moneyFormat } from "../helpers/moneyFormat"

const Balance = ({ count, subs, spent, setSpent }) => {

  const updateBalance = () => {
     const spent = subs.reduce((total, item) => Number(item.price) + total, 0)
      setSpent(spent);
    }

    useEffect(() => {
      updateBalance();
    }, [subs])

  return (
    <div className="balance">
      <h3>Presupuesto: <span className="presupuesto">{moneyFormat(count)}</span></h3>
      <h3>Gastado: <span className="gastado">{moneyFormat(spent)}</span></h3>
      <h3>Disponible: <span className="disponible">{moneyFormat(count - spent)}</span></h3>
    </div>
  );
};

export default Balance;
