/* eslint-disable react/prop-types */

const ImageItem = ({ title, url }) => {
    return ( 
        <div>     
        <img src={ url } alt={title} />
        </div>
     );
}
 
export default ImageItem;