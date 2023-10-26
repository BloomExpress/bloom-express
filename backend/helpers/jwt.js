import jwt from "jsonwebtoken";

export const generateJwt = (userId) => {
  const payload = {
    id: user.Id,
  };
  const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "1h" });
  return token;
};

export const verifyJWT = (token) => {
  if (!token) return;

  return jwt.verify(token, process.env.JWT_KEY);
};
