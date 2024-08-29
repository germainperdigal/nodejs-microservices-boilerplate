import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const login = (req: Request, res: Response) => {
    const { username, password } = req.body;

    const validUsername = "test";
    const validPassword = "test123";

    if (username === validUsername && password === validPassword) {
        const token = jwt.sign({ username }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

        return res.json({ token });
    } else {
        return res.status(401).json({ message: "Invalid credentials" });
    }
};
