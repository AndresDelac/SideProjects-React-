/* eslint-disable react/prop-types */
import { moneyFormat } from "../helpers/moneyFormat"
const Balance = ({ count }) => {
  return (
    <div className="balance">
      <h3>Presupuesto: {moneyFormat(count)}</h3>
      <h3>Gastado: {moneyFormat(count)}</h3>
      <h3>Disponible: {moneyFormat(count)}</h3>
    </div>
  );
};

export default Balance;
