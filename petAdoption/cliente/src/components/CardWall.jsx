import { PropTypes } from "prop-types";

const CardWall = ({imgPet, namePet, genderPet, agePet, imgAdopted, usernameAdopted}) => {
    return (
        <>
            <article className="article__wall-container rounded-xl mb-10 mx-5">
                
                <div className=" bg-white rounded-xl flex justify-around align-middle p-2">
                    {/* Imagen mascota adoptada */}
                    <div className="wall__image-container">
                        <img className="wall__image rounded-full" src={imgPet} alt={namePet} />                                   
                    </div>

                    {/* Nombre, sexo y edad mascota */}
                    <div className="wall__pet flex flex-col justify-center">
                        <h3 className="pet__title font-bold text-xl">{namePet}</h3>
                        <p className="pet__description text-xs">{genderPet}, {agePet} años</p>
                    </div>   

                    {/* Imagen persona adoptante */}
                    <div className="wall__adopted flex flex-col justify-center align-middle">
                        <p className="adopted__title text-xs">Adoptado por</p>
                        <img className="adopted__image" src={imgAdopted} alt={usernameAdopted} />
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