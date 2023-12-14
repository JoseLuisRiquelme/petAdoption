import { PropTypes } from "prop-types";

const Banner = ({title}) => {
    return (
        <div className="container">            
            <div className="banner">
                <h2 className="banner__title">{title}</h2>                  
                <picture className="banner__image-container">
                    <source media="(max-width:576px)" srcSet="./src/assets/banner.png" />
                    <img className="banner__image" src="./src/assets/dog-and-cat-free.png"/>
                </picture>                
            </div>            
        </div>        
    )   
}

export default Banner;

Banner.propTypes = {
    title: PropTypes.string.isRequired,    
}
