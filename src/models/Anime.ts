import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Studio } from './Studio';
import { Director } from './Director';

@Table
export class Anime extends Model<Anime> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    episodes!: number;

    @ForeignKey(() => Studio)
    @Column
    studioId!: number;

    @BelongsTo(() => Studio)
    studio!: Studio;

    @ForeignKey(() => Director)
    @Column
    directorId!: number;

    @BelongsTo(() => Director)
    director!: Director;
}

