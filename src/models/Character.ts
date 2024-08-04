import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Anime } from './Anime';

@Table
export class Character extends Model<Character> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    role!: string;

    @ForeignKey(() => Anime)
    @Column
    animeId!: number;

    @BelongsTo(() => Anime)
    anime!: Anime;
}
