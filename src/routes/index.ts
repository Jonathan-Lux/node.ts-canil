import { Router } from "express";
import { home,dogs,cats,fishes } from "../controllers/pagesController";


const router = Router()

router.get('/', home)
router.get('/dogs', dogs)
router.get('/cats', cats)
router.get('/fishes', fishes)

export default router