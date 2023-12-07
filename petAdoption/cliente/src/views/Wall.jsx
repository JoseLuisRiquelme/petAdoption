import CardWall from "../components/CardWall";

const Wall = () => {
    return (
        <div className="container py-5">            
            
            <CardWall 
                    imgPet="" 
                    namePet="Chiche"
                    genderPet="Male"
                    agePet={3}
                    imgAdopted=""
                    usernameAdopted="Ramona" />

            <CardWall 
                    imgPet="" 
                    namePet="Ana"
                    genderPet="Male"
                    agePet={4}
                    imgAdopted=""
                    usernameAdopted="Pedro" /> 

            <CardWall 
                    imgPet="" 
                    namePet="Laidy"
                    genderPet="Female"
                    agePet={4}
                    imgAdopted=""
                    usernameAdopted="Martha" />   

   
        </div>
    )
}

export default Wall;