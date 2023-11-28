import { PropTypes } from "prop-types";

const Banner = ({title}) => {
    return (
        <div className="container py-5">
            <div className="columns-1">
                <div className="banner rounded p-5 relative">
                    <h2 className="banner__title text-white font-semibold text-base md:text-2xl lg:text-4xl xl:text-5xl">{title}</h2>
                    <img src="./src/assets/image/banner.png" alt="banner" className="banner__image absolute bottom-0 left-0" />
                </div>
            </div>
        </div>        
    )   
}

export default Banner;

Banner.propTypes = {
    title: PropTypes.string.isRequired,
}

Banner.defaultProps = {
    title: 'Crear Cuenta',
}