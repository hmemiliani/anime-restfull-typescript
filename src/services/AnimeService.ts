import { injectable } from 'tsyringe';
import { Anime } from '../models/Anime';

interface AnimeData {
    title: string;
    episodes: number;
    studioId: number;
    directorId: number;
}

@injectable()
export class AnimeService {
    async getAllAnimes(): Promise<Anime[]> {
        return Anime.findAll();
    }

    async createAnime(animeData: AnimeData): Promise<Anime> {
        // Asegúrate de tipar explícitamente el objeto
        const newAnime = Anime.build({
            title: animeData.title,
            episodes: animeData.episodes,
            studioId: animeData.studioId,
            directorId: animeData.directorId,
        } as Anime);

        await newAnime.save();
        return newAnime;
    }
}

