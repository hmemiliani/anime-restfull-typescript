import { Request, Response } from 'express';
import { AnimeService } from '../services/AnimeService';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class AnimeController {
    constructor(private animeService?: AnimeService) { }

    async getAnimes(req: Request, res: Response): Promise<void> {
        const animes = await this.animeService!.getAllAnimes();
        res.json(animes);
    }

    async createAnime(req: Request, res: Response): Promise<void> {
        const anime = await this.animeService!.createAnime(req.body);
        res.json(anime);
    }
}
