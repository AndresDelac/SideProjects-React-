/* eslint-disable react/prop-types */

import useApi from "../hooks/UseApi";
import ImageItem from "./ImageItem";

const DisplayGifs = ({ category }) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=7zNfyzH5GZ7LYahlCfdPPuiujJUHtr2A&q=${category}&limit=15`;
    const { data, loading } = useApi(url);
    return ( 
        <div className="container-gifs">
            <h2>Display Gifs</h2>
            {
                data.map(img => (
                    <ImageItem title={img.title} url={img.url} />
                ))
            }
            {category}
        </div>
     );
}
 
export default DisplayGifs;