import { Sequelize } from 'sequelize-typescript';
import { Anime } from '../models/Anime';
import { Studio } from '../models/Studio';
import { Director } from '../models/Director';
import { Character } from '../models/Character';
import { User } from '../models/User';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    dialect: 'mysql',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    storage: ':memory:',
    models: [Anime, Studio, Director, Character, User]
});

export { sequelize };
