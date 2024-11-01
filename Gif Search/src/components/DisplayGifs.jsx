/* eslint-disable react/prop-types */

import useApi from "../hooks/UseApi";
import ImageItem from "./ImageItem";

const DisplayGifs = ({ category }) => {


    // Aqui se utiliza una API para obtener los datos de los GIFs 
const url = `https://api.giphy.com/v1/gifs/search?api_key=7zNfyzH5GZ7LYahlCfdPPuiujJUHtr2A&q=${category}&limit=40`

    const { data, loading } = useApi(url);
    
    return ( 
        <div className="container-gifs">

            {
              loading ?
                data.map(img => (
                    <ImageItem key={img.id}
                     title={img.title}
                     url={img.images.downsized_medium.url} 
                     
                     />
                ))
                : ''
            }
        </div>
     );
}
 
export default DisplayGifs;