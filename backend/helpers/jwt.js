
import jwt from "jsonwebtoken";

export const generateJwt = (userId) => {
    const payload = {
        id: userId
    }
    const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "1h" });
    return token;
}

export const verifyJWT = (token) => {
    return jwt.verify(token, process.env.JWT_KEY);
}