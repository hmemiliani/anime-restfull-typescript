import { Router } from 'express';
import { AnimeController } from '../controllers/AnimeController';
import { container } from 'tsyringe';

const router = Router();
const animeController = container.resolve(AnimeController);

router.get('/animes', (req, res) => animeController.getAnimes(req, res));
router.post('/animes', (req, res) => animeController.createAnime(req, res));

export default router;
