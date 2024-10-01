/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { moneyFormat } from "../helpers/moneyFormat"
const Balance = ({ count, subs }) => {
  const [spent, setSpent] = useState(0);

  const updateBalance = () => {
     const spent = subs.reduce((total, item) => Number(item.price) + total, 0)
      setSpent(spent);
    }

    useEffect(() => {
      updateBalance();
    }, [subs])

  return (
    <div className="balance">
      <h3>Presupuesto: {moneyFormat(count)}</h3>
      <h3>Gastado: {moneyFormat(spent)}</h3>
      <h3>Disponible: {moneyFormat(count - spent)}</h3>
    </div>
  );
};

export default Balance;
