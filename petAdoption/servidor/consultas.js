const pool = require("./server");
const bcrypt = require("bcryptjs");



const getMascotas = async () => {
    const query = "SELECT * from mascotas LIMIT 20";
    const {rows: mascotas} = await pool.query(query);
    return mascotas;
}

const deleteMascota = async (itemId) => {
    try {
        const query = "Delete FROM mascotas WHERE id = $1";
        const values = [itemId]
        const result = await pool.query(query, values)
        return result;
    } catch (error) {
        console.log(error);
    }
}

const postMascota = async (id_usuario, nombre, imagen, especie, descripcion, ciudad, sexo, edad, fecha_publicacion) => {
    try {
        const query = "INSERT INTO mascotas(id_usuario, nombre, imagen, especie, descripcion, ciudad, sexo, edad, fecha_publicacion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";
        const values = [id_usuario, nombre, imagen, especie, descripcion, ciudad, sexo, edad, fecha_publicacion];
        await pool.query(query, values);
    } catch (error) {
        console.log({ error: error, message: "ocurrio un problema al ingresar los datos en la tabla mascotas" });
    }
}

const getUsuarioMascotas = async (id_user) => {
    try {
        const query = "SELECT * from mascotas WHERE id_usuario = $1";
        const values = [id_user];
        const { rows: userMascotas } = await pool.query(query, values);
        return userMascotas;
    } catch (error) {
        console.log(error)
    }
}

const putEditMascota = async (userId, mascotaId, nombre, imagen, especie, descripcion, ciudad, sexo, edad) => {
    try {
        const query = "UPDATE mascotas SET nombre = $3, imagen = $4, especie = $5, descripcion = $6, ciudad = $7, sexo = $8, edad = $9 WHERE id = $2 AND id_usuario = $1"
        const values = [userId, mascotaId, nombre, imagen, especie, descripcion, ciudad, sexo, edad]
        const { rows: newMascota } = await pool.query(query, values);
        return newMascota;
    } catch (error) {
        console.log(error)
    }
}

const crearUsuario = async (nombre,imagen, email, contrasena, direccion, ciudad, telefono, fecha_registro) => {
    const passwordEcrypted = bcrypt.hashSync(contrasena, 10);
    contrasena = passwordEcrypted;
    const query = "INSERT INTO usuarios (nombre,imagen, email, contrasena, direccion, ciudad, telefono, fecha_registro) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
    const values = [nombre, email,imagen, passwordEcrypted, direccion, ciudad, telefono, fecha_registro];
    const { rows: userCreted } = await pool.query(query, values);
    return userCreted;
}

const usuarioLogin = async (email, password) => {
    const values = [email];
    const query = "SELECT * FROM usuarios WHERE email = $1";
    const { rows: [usuario], rowCount } = await pool.query(query, values);
    if (!usuario) {
        throw { code: 401, message: "email invalido" };
    } else {
        const { contrasena: passwordEcrypted } = usuario;
        const passwordValided = bcrypt.compareSync(password, passwordEcrypted);
        console.log(password)
        console.log(passwordEcrypted)
        if (passwordValided) {
            return usuario
        } else {
            if (!passwordValided || !rowCount)
                throw { code: 401, message: "email o contrasena incorrecta" };
        }
    }
}

const setFavoritos = async (idUser, idMascota) => {
    try {
        const query = "INSERT INTO favoritos VALUES(DEFAULT, $1, $2)";
        const values = [idUser, idMascota];
        const { rowCount } = await pool.query(query, values);
    } catch (error) {
        console.log("No se pudo agregar datos solicitados")
    }
}

const getFavoritos = async (id_usuarios) => {
    const query = "SELECT mascotas.img, mascotas.nombre, mascotas.sexo, mascotas.edad, mascotas.ciudad, mascotas.id FROM mascotas INNER JOIN favoritos ON mascotas.id = favoritos.id_mascotas INNER JOIN usuarios ON usuarios.id = favoritos.id_usuarios WHERE id_usuarios = $1"
    const values = [id_usuarios];
    const { rows: favoritos } = await pool.query(query, values);
    return favoritos
}

const deleteFavoritos = async (idUser, idMascota) => {
    try {
        const query = "DELETE FROM favoritos WHERE id_usuarios = $1 AND id_mascotas = $2";
        const values = [idUser, idMascota];
        const { rowCount } = await pool.query(query, values);
    } catch (error) {
        console.log("No se encontraron datos para mostrar")
    }
}

const setAdoptantes = async (idUser, idMascota) => {
    try {
        const query = "INSERT INTO adoptantes VALUES(DEFAULT, $1, $2)";
        const values = [idUser, idMascota];
        const { rowCount } = await pool.query(query, values);
    } catch (error) {
        console.log("No se pudo agregar datos solicitados")
    }
}

const getAdoptantes = async (id_usuarios) => {
    const query = "SELECT mascotas.img, mascotas.nombre, mascotas.sexo, mascotas.edad, mascotas.ciudad, mascotas.id FROM mascotas INNER JOIN adoptantes ON mascotas.id = adoptantes.id_mascotas INNER JOIN usuarios ON usuarios.id = adoptantes.id_usuarios WHERE id_usuarios = $1"
    const values = [id_usuarios];
    const { rows: adoptantes } = await pool.query(query, values);
    return adoptantes
}

const deleteAdoptantes = async (idUser, idMascota) => {
    try {
        const query = "DELETE FROM adoptantes WHERE id_usuarios = $1 AND id_mascotas = $2";
        const values = [idUser, idMascota];
        const { rowCount } = await pool.query(query, values);
    } catch (error) {
        console.log("No se encontraron datos para mostrar")
    }
}

const setAdoptados = async (idUser, idMascota) => {
    try {
        const query = "INSERT INTO adoptados VALUES(DEFAULT, $1, $2)";
        const values = [idUser, idMascota];
        const { rowCount } = await pool.query(query, values);
    } catch (error) {
        console.log("No se pudo agregar datos solicitados")
    }
}

const getAdoptados = async (id_usuarios) => {
    const query = "SELECT mascotas.img, mascotas.nombre, mascotas.sexo, mascotas.edad, mascotas.ciudad, mascotas.id FROM mascotas INNER JOIN adoptados ON mascotas.id = adoptados.id_mascotas INNER JOIN usuarios ON usuarios.id = adoptados.id_usuarios WHERE id_usuarios = $1"
    const values = [id_usuarios];
    const { rows: adoptados } = await pool.query(query, values);
    return adoptados
}

const deleteAdoptados = async (idUser, idMascota) => {
    try {
        const query = "DELETE FROM adoptados WHERE id_usuarios = $1 AND id_mascotas = $2";
        const values = [idUser, idMascota];
        const { rowCount } = await pool.query(query, values);
    } catch (error) {
        console.log("No se encontraron datos para mostrar")
    }
}

module.exports = {
    getMascotas,
    deleteMascota,
    postMascota,
    getUsuarioMascotas,
    postMascota,
    putEditMascota,
    crearUsuario,
    usuarioLogin,
    setFavoritos,
    getFavoritos,
    deleteFavoritos,
    setAdoptantes,
    getAdoptantes,
    deleteAdoptantes,
    setAdoptados,
    getAdoptados,
    deleteAdoptados
}