import { Request, Response } from 'express';
import { UserService } from '../services/UserService';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class UserController {
    constructor(private userService?: UserService) { }

    async register(req: Request, res: Response): Promise<void> {
        const user = await this.userService!.register(req.body);
        res.json(user);
    }

    async login(req: Request, res: Response): Promise<void> {
        const { email, password } = req.body;
        const token = await this.userService!.login(email, password);
        if (token) {
            res.json({ token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    }
}
