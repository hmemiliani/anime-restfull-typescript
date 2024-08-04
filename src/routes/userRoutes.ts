import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { container } from 'tsyringe';

const router = Router();
const userController = container.resolve(UserController);

router.post('/register', (req, res) => userController.register(req, res));
router.post('/login', (req, res) => userController.login(req, res));

export default router;
