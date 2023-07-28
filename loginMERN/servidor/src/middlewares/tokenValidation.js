import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const requiredAuth = (req, res, next) => {
    const { token } = req.cookies;
    console.log(cookies);
}