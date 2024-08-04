import { injectable } from 'tsyringe';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';

interface UserData {
    email: string;
    password: string;
}

@injectable()
export class UserService {
    async register(userData: UserData): Promise<User> {
        if (!userData.password) {
            throw new Error("Password is required");
        }

        const hashedPassword = await bcrypt.hash(userData.password, 10);


        const newUser = User.build({
            email: userData.email,
            password: hashedPassword,
        } as User);

        await newUser.save();
        return newUser;
    }

    async login(email: string, password: string): Promise<string | null> {
        const user = await User.findOne({ where: { email } });
        if (user && await bcrypt.compare(password, user.password)) {
            return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
        }
        return null;
    }
}
