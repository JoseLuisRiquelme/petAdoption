import { useState } from "react";
import Banner from "../components/Banner"

const Login = () => {

    // Estados
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        
        <>
        <Banner title="Inicia Sesión" />     

        <div className="container">            
            
            <form className="form__register">
                <div className="container__input">
                    {/* Username */}
                    <div className="form__group">
                        <i className="fa-solid fa-user form__icon"></i>
                        <input 
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="form__input"
                            autoComplete="off"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                    </div>                   

                    
                    {/* Contraseña */}
                    <div className="form__group">
                        <i className="fa-solid fa-lock form__icon "></i>
                        <input 
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            className="form__input"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>

                {/* Botón Inico de Sesión */}
                <div className="container__button">
                    <input 
                        type="submit" 
                        value={'Login'} 
                        className="form__button" />
                </div>

                {/* Enlaces de Recuperar cuenta */}
                <div className="container__link">
                    <a className="link" href="#">Recuperar contraseña</a>
                    <a className="link" href="#">¿No tienes cuenta?</a>
                </div>
            </form>            
            
        </div>

        </>
    )
}

export default Login;