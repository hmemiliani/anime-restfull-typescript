import { Table, Column, Model, DataType, HasMany, AllowNull } from 'sequelize-typescript';
import { Anime } from './Anime';

@Table
export class Studio extends Model<Studio>{
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

    @HasMany(()=> Anime)
    animes!: Anime[];
}