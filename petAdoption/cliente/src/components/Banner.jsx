import { PropTypes } from "prop-types";

const Banner = ({title, subtitle}) => {
    return (
        <div className="container mb-10">
            <div className="columns-1">
                <div className="banner p-5 relative">
                    <h2 className="banner__title text-white font-semibold text-base text-center md:text-2xl lg:text-4xl xl:text-5xl">{title}</h2>
                    <h3 className="banner__subtitle  text-white font-semibold text-base text-center">{subtitle}</h3>
                    <img src="./src/assets/banner.png" alt="banner" className="banner__image absolute bottom-0 left-0" />
                </div>
            </div>
        </div>        
    )   
}

export default Banner;

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
}
