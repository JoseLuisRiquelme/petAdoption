import CardWall from "../components/CardWall";

const Wall = () => {
    return (
        <div className="container py-5">            
            
            <CardWall 
                    imgPet="./src/assets/perro1.png" 
                    namePet="Chiche"
                    genderPet="Male"
                    agePet={3}
                    imgAdopted="./src/assets/woman1.png"
                    usernameAdopted="Ramona" />

            <CardWall 
                    imgPet="./src/assets/perro2.png" 
                    namePet="Ana"
                    genderPet="Male"
                    agePet={4}
                    imgAdopted="./src/assets/man1.png"
                    usernameAdopted="Pedro" /> 

            <CardWall 
                    imgPet="./src/assets/gato1.png" 
                    namePet="Laidy"
                    genderPet="Female"
                    agePet={4}
                    imgAdopted="./src/assets/woman2.png"
                    usernameAdopted="Martha" />   

   
        </div>
    )
}

export default Wall;