import { useState } from "react";

const Register = () => {

    // Estados
    const [username, setUsername] = useState("");
    const [photo, setPhoto] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        
        <div className="container py-5">            
            
            <form className="form__register md:px-10 lg:px-20 xl:px-96">
                <div className="columns-1 bg-white p-3 mx-5 rounded">
                    {/* Username */}
                    <div className="form__group p-5 flex gap-2 align-middle">
                        <i className="fa-solid fa-user form__icon p-2 text-white rounded-full"></i>
                        <input 
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="form__input rounded-full"
                            autoComplete="off"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    {/* Fotografia */}
                    <div className="form__group p-5 flex gap-2 align-middle">
                        <i className="fa-solid fa-user form__icon p-2 text-white rounded-full"></i>
                        <input 
                            type="text"
                            name="photo"
                            placeholder="Fotografía"
                            className="form__input rounded-full"
                            autoComplete="off"
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)} />
                    </div>

                    {/* Correo */}
                    <div className="form__group p-5 flex gap-2 align-middle">
                        <i className="fa-solid fa-envelope form__icon p-2 text-white rounded-full"></i>
                        <input 
                            type="email"
                            name="email"
                            placeholder="Correo"
                            className="form__input rounded-full"
                            autoComplete="off"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    {/* Contraseña */}
                    <div className="form__group p-5 flex gap-2 align-middle">
                        <i className="fa-solid fa-lock form__icon p-2 text-white rounded-full"></i>
                        <input 
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            className="form__input rounded-full"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>

                {/* Botón de crear usuario */}
                <div className="container__button py-5 text-center">
                    <input 
                        type="submit" 
                        value={'Crear usuario'} 
                        className="form__button text-white px-10 py-2 rounded-full" />
                </div>
            </form>            
            
        </div>
    )
}

export default Register;