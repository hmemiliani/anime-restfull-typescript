import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface DecodedToken {
    id: number;
    email: string;
}

interface AuthenticatedRequest extends Request {
    user?: DecodedToken;
}

export const authenticateJWT = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        res.sendStatus(403);
        return;
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedToken;
        req.user = decoded;
        next();
    } catch (err) {
        res.sendStatus(403);
    }
};
