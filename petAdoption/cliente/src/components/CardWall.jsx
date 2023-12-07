import { PropTypes } from "prop-types";

const CardWall = ({imgPet, namePet, genderPet, agePet, imgAdopted, usernameAdopted}) => {
    return (
        <>
            <article className="article__wall-container rounded p-1 mb-10">
                
                <div className=" bg-white rounded flex justify-around align-middle p-1">
                    <div className="wall__image-container">
                        <img className="wall__image" src={imgPet} alt={namePet} />                                   
                    </div>

                    <div className="wall__pet flex flex-col justify-center">
                        <h3 className="font-bold">{namePet}</h3>
                        <p className="text-xs">{genderPet}, {agePet} años</p>
                    </div>   

                    <div className="wall__adopted flex flex-col justify-center align-middle text-center">
                        <p className="adopted__title text-xs">Adoptado por</p>
                        <img className="adopted__image text-center" src={imgAdopted} alt={usernameAdopted} />
                        <p className="adopted__name">{usernameAdopted}</p>
                    </div>
                </div>               
                  
            </article>        
        </>
    )
}

export default CardWall;

CardWall.propTypes = {
    imgPet: PropTypes.string,
    namePet: PropTypes.string,
    genderPet: PropTypes.string,
    agePet: PropTypes.number,
    imgAdopted: PropTypes.string,
    usernameAdopted: PropTypes.string,
}