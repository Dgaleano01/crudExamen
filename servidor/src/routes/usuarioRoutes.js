import { Router } from "express";
import * as usuariosController from "../controllers/usuariosControllers.js"

const router = Router();

router.get("/",usuariosController.getAllUsuarios);
router.get("/:id", usuariosController.getUsuario);
router.put("/:id", usuariosController.updateUsuario);
router.post("/",usuariosController.createUsuario);
router.delete("/:id",usuariosController.deleteUsuario);

export default router;