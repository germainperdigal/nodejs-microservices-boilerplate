import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticateJWT = (request: Request, response: Response, next: NextFunction) => {
    const token = request.header('Authorization')?.split(' ')[1];

    if (!token) {
        return response.status(401).json({ message: 'Unauthorized !' });
    }

    try {
        (request as any).user = jwt.verify(token, process.env.JWT_SECRET as string);
        next();
    } catch (err) {
        return response.status(403).json({ message: 'Forbidden' });
    }
};
