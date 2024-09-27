const FormAddSubs = () => {
    return ( 
        <div className="add-subscription">
            <h3>Agregar servicio</h3>
            <form action="">
                <p>Servicios</p>
                <select name="" id="">
                    <option value="">-- Elegir --</option>
                    <option value="netflix">-- Netflix --</option>
                    <option value="disneyPlus">-- Disney plus  --</option>
                    <option value="hboMax">-- HBO Max --</option>
                    <option value="starPlus">-- Star Plus --</option>
                    <option value="primeVideo">-- Prime Video --</option>
                    <option value="spotify">-- Spotify --</option>
                    <option value="appleTv">-- Apple TV --</option>
                </select>
                <p>Precio</p>
                <input type="number" placeholder="20$" />
                <input type="submit" value="Agregar" />
            </form>
        </div>
     );
}
 
export default FormAddSubs;