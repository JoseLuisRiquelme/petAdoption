const express = require("express");
const router = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const {getMascotas,deleteMascota,getUsuarioMascotas,postMascota,
    putEditMascota,crearUsuario,usuarioLogin,setFavoritos,getFavoritos,
    deleteFavoritos,setAdoptantes,getAdoptantes,deleteAdoptantes,setAdoptados,getAdoptados,deleteAdoptados}= require("../consultas");
const checkCredentialsMiddleware = require("../middlewares/middlewares");
require("dotenv").config();
const secretkey = process.env.SECRET_KEY;

// Middleware
router.use(express.json());
router.use(cors());

//Routes
router.get("/mascotas", async (req, res) => {
    try {
        const mascotas = await getMascotas();
        res.json(mascotas);
    } catch (error) {
        res.send(error)
    }
})

router.post("/mascotas", async (req, res) => {
    try {
        const{data}=req.body
        const { id_usuario, nombre, imagen, especie, descripcion, ciudad, sexo, edad, fecha_publicacion } = data;
        const mascotas = await postMascota(id_usuario, nombre, imagen, especie, descripcion, ciudad, sexo, edad, fecha_publicacion);
        res.json({ datos: mascotas, message: "datos agregados correctamente" });
    } catch (error) {
        console.log({ error: error, message: "no se agrego  a mascotas" })
    }
})

router.get("/mascotas/usuario/:id_user", async (req, res) => {
    try {
        const {id_user} = req.params;
        const userMascotas = await getUsuarioMascotas(id_user);
        res.json(userMascotas);
    } catch (error) {
        console.log(error)
    }
})


router.put("/usuario/:userId/publicacion/:mascotaId", async (req, res) => {
    try {
        const {userId, mascotaId} = req.params;
        const {nombre, imagen, especie, descripcion, ciudad, sexo, edad} = req.body;
        const edictMascota = putEditMascota(userId, mascotaId, nombre, imagen, especie, descripcion, ciudad, sexo, edad);
        res.json({message: "mascota editada  correctamente" });
    } catch (error) {
        console.log(error)
    }
})

router.delete("/mascotas/:mascotaId", async(req, res) => {
    try {
        const {mascotaId} = req.params
        await deleteMascota(mascotaId);
        res.json({message: "mascota eliminada correctamente" });
    } catch (error) {
        res.send(error)
    }
})


router.post("/login", checkCredentialsMiddleware, async (req, res) => {
    try {
        const user = req.body;
        const { email, password } = user;
        await usuarioLogin(email, password);
        const token = jwt.sign({ email }, secretkey, { expiresIn: "1h" });
        res.send(token);
    } catch (error) {
        res.status(error.code || 500).send({ message: "Error al intentar Logear", details: error.message });
    }
})

router.get("/user", async (req, res) => {
    try {
        const token = req.header("Authorization").split("Bearer ")[1];
        const { email } = jwt.decode(token);
        const usuario = await getUsuario(email);
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ error: "Usuario no encontrado" })
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.post("/register", async (req, res) => {
    try {
        const { nombre,imagen, email, contrasena, direccion, ciudad, telefono, fecha_registro} = req.body;
        console.log(req.body)
        await crearUsuario(nombre,imagen, email, contrasena, direccion, ciudad, telefono, fecha_registro);
        res.json({ mensaje: "Usuario creado exitosamente" });
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({ mensaje: "Error en el servidor" });
    }
});

router.post("/favoritos", async (req, res) => {
    try {
        const { idUser, idMascota } = req.body;
        await setFavoritos(idUser, idMascota);
        return res.send("Datos agregados correctamente")
    } catch (error) {
        console.log(error)
    }
});

router.get("/favoritos/usuario/:idUsuario", async (req, res) => {
    const id_usuarios = req.params.idUsuario;
    const favoritos = await getFavoritos(id_usuarios);
    res.send(favoritos);
});



router.delete("/usuario/:idUser/mascota/:idMascota", async (req, res) => {
    try {
        const { idUser, idMascota } = req.params;
        await deleteFavoritos(idUser, idMascota);
        return res.send("Datos eliminados correctamente")
    } catch (error) {
        console.log(error)
    }
})

router.post("/adoptantes", async (req, res) => {
    try {
        const { idUser, idMascota } = req.body;
        await setAdoptantes(idUser, idMascota);
        return res.send("Datos agregados correctamente")
    } catch (error) {
        console.log(error)
    }
});

router.get("/adoptantes/usuario/:idUsuario", async (req, res) => {
    const id_usuarios = req.params.idUsuario;
    const adoptantes = await getAdoptantes(id_usuarios);
    res.send(adoptantes);
});



router.delete("/usuario/:idUser/mascota/:idMascota", async (req, res) => {
    try {
        const { idUser, idMascota } = req.params;
        await deleteAdoptantes(idUser, idMascota);
        return res.send("Datos eliminados correctamente")
    } catch (error) {
        console.log(error)
    }
})

router.post("/adoptados", async (req, res) => {
    try {
        const { idUser, idMascota } = req.body;
        await setAdoptados(idUser, idMascota);
        return res.send("Datos agregados correctamente")
    } catch (error) {
        console.log(error)
    }
});

router.get("/adoptantados/usuario/:idUsuario", async (req, res) => {
    const id_usuarios = req.params.idUsuario;
    const adoptados = await getAdoptados(id_usuarios);
    res.send(adoptados);
});



router.delete("/usuario/:idUser/mascota/:idMascota", async (req, res) => {
    try {
        const { idUser, idMascota } = req.params;
        await deleteAdoptados(idUser, idMascota);
        return res.send("Datos eliminados correctamente")
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;