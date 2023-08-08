import Usuario from "../models/usuario.js";

export const createUsuario = async (req, res) => {
    try {
      const usuario = new Usuario(req.body);
      await usuario.save();
      res.send(usuario);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  };

  export const getAllUsuarios = async (req, res) => {
    try {
      const usuarios = await Usuario.find();
      res.json(usuarios);
    } catch (error) {
      console.log(error);
      res.status(500).send('Error');
    }
  };

  export const getUsuario = async (req, res) => {
    try {
      const usuario = await Usuario.findById(req.params.id);
      if (!usuario) {
        return res.status(404).send('Usuario not found');
      }
      res.json(usuario);
    } catch (error) {
      console.log(error);
      res.status(500).send('Error');
    }
  };

  export const updateUsuario = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      let usuario = await Usuario.findById(req.params.id);
      if (!usuario) {
        return res.status(404).send('El usuario no existe');
      }
      usuario.name = name;
      usuario.email = email;
      usuario.password = password;
      usuario = await Usuario.findOneAndUpdate({ _id: req.params.id },
usuario, { new: true });
      res.json(usuario);
    } catch (error) {
      console.log(error);
      res.status(500).send('Error');
    }
  };

  export const deleteUsuario = async (req, res) => {
    try {
      const usuarioId = req.params.id;
      const usuario = await Usuario.findById(usuarioId);
      if (!usuario) {
        return res.status(404).send({ message: 'usuario no encontrado' });
      }
      await usuario.deleteOne({_id:usuarioId})
      res.send("borrado exitosamente con exito en el proceso");
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  };