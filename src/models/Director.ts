import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Anime } from './Anime';

@Table
export class Director extends Model<Director> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

    @HasMany(() => Anime)
    animes!: Anime[];
}
